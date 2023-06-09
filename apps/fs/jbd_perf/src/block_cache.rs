use alloc::boxed::Box;
use core::any::Any;
use core::cell::{RefCell, UnsafeCell};

const BLOCK_SZ: usize = 512;

extern crate alloc;
use alloc::collections::BTreeMap;
use alloc::rc::Rc;

use jbd::sal::BlockDevice;

struct BlockCacheInner {
    /// cached block data
    cache: [u8; BLOCK_SZ],
    /// underlying block id
    block_id: usize,
    /// underlying block device
    block_device: Rc<dyn BlockDevice>,
    /// whether the block is dirty
    modified: bool,
    jbd_dirty: bool,
    private: Option<Box<dyn Any>>,
    jbd_managed: bool,
    revoked: bool,
    revoke_valid: bool,
}

/// Cached block inside memory
pub struct BlockCache(RefCell<BlockCacheInner>);

impl BlockCache {
    /// Load a new BlockCache from disk.
    pub fn new(block_id: usize, block_device: Rc<dyn BlockDevice>) -> Self {
        let mut cache = [0u8; BLOCK_SZ];
        block_device.read_block(block_id, &mut cache);
        Self(RefCell::new(BlockCacheInner {
            cache,
            block_id,
            block_device,
            modified: false,
            jbd_dirty: false,
            private: None,
            jbd_managed: false,
            revoked: false,
            revoke_valid: false,
        }))
    }

    fn sync(&self) {
        let mut inner = self.0.borrow_mut();
        if inner.modified {
            inner.modified = false;
            inner.block_device.write_block(inner.block_id, &inner.cache);
        }
    }
}

impl jbd::sal::Buffer for BlockCache {
    fn block_id(&self) -> usize {
        self.0.borrow().block_id
    }
    fn size(&self) -> usize {
        BLOCK_SZ
    }
    fn dirty(&self) -> bool {
        self.0.borrow().modified
    }
    fn mark_dirty(&self) {
        self.0.borrow_mut().modified = true;
    }
    fn clear_dirty(&self) {
        self.0.borrow_mut().modified = false;
    }
    fn jbd_dirty(&self) -> bool {
        self.0.borrow().jbd_dirty
    }
    fn mark_jbd_dirty(&self) {
        self.0.borrow_mut().jbd_dirty = true;
    }
    fn clear_jbd_dirty(&self) {
        self.0.borrow_mut().jbd_dirty = false;
    }
    fn data(&self) -> *mut u8 {
        self.0.borrow().cache.as_ptr() as *mut u8
    }
    fn private(&self) -> &Option<Box<dyn Any>> {
        unsafe { &*(&self.0.borrow().private as *const _) }
    }
    fn set_private(&self, private: Option<Box<dyn Any>>) {
        self.0.borrow_mut().private = private;
    }
    fn jbd_managed(&self) -> bool {
        self.0.borrow().jbd_managed
    }
    fn set_jbd_managed(&self, managed: bool) {
        self.0.borrow_mut().jbd_managed = managed;
    }
    fn revoked(&self) -> bool {
        self.0.borrow().revoked
    }
    fn set_revoked(&self) {
        self.0.borrow_mut().revoked = true;
    }
    fn clear_revoked(&self) {
        self.0.borrow_mut().revoked = false;
    }
    fn revoke_valid(&self) -> bool {
        self.0.borrow().revoke_valid
    }
    fn set_revoke_valid(&self) {
        self.0.borrow_mut().revoke_valid = true;
    }
    fn clear_revoke_valid(&self) {
        self.0.borrow_mut().revoke_valid = false;
    }
    fn test_clear_dirty(&self) -> bool {
        let mut inner = self.0.borrow_mut();
        let ret = inner.modified;
        inner.modified = false;
        ret
    }
    fn test_clear_jbd_dirty(&self) -> bool {
        let mut inner = self.0.borrow_mut();
        let ret = inner.jbd_dirty;
        inner.jbd_dirty = false;
        ret
    }
    fn test_clear_revoke_valid(&self) -> bool {
        let mut inner = self.0.borrow_mut();
        let ret = inner.revoke_valid;
        inner.revoke_valid = false;
        ret
    }
    fn test_clear_revoked(&self) -> bool {
        let mut inner = self.0.borrow_mut();
        let ret = inner.revoked;
        inner.revoked = false;
        ret
    }
    fn test_set_revoke_valid(&self) -> bool {
        let mut inner = self.0.borrow_mut();
        let ret = inner.revoke_valid;
        inner.revoke_valid = true;
        ret
    }
    fn test_set_revoked(&self) -> bool {
        let mut inner = self.0.borrow_mut();
        let ret = inner.revoked;
        inner.revoked = true;
        ret
    }
    fn sync(&self) {
        let mut inner = self.0.borrow_mut();
        if inner.modified {
            inner.modified = false;
            inner.block_device.write_block(inner.block_id, &inner.cache);
        }
    }
}

impl Drop for BlockCache {
    fn drop(&mut self) {
        self.sync();
    }
}

pub struct BlockCacheManager {
    // Use a map to avoid eviction
    pub queue: BTreeMap<usize, Rc<BlockCache>>,
}

impl BlockCacheManager {
    pub const fn new() -> Self {
        Self {
            queue: BTreeMap::new(),
        }
    }

    pub fn get_block_cache(
        &mut self,
        block_id: usize,
        block_device: Rc<dyn BlockDevice>,
    ) -> Rc<BlockCache> {
        self.queue
            .entry(block_id)
            .or_insert_with(|| Rc::new(BlockCache::new(block_id, Rc::clone(&block_device))))
            .clone()
    }

    pub fn clear_all(&mut self) {
        self.queue.clear();
    }
}

struct SyncCell<T>(UnsafeCell<T>);
unsafe impl<T> Sync for SyncCell<T> {}
impl<T> SyncCell<T> {
    const fn new(v: T) -> Self {
        Self(UnsafeCell::new(v))
    }
    #[allow(clippy::mut_from_ref)]
    unsafe fn get_mut(&self) -> &mut T {
        &mut *self.0.get()
    }
}
impl<T: Copy> SyncCell<T> {}
unsafe impl Send for BlockCacheManager {}

static BLOCK_CACHE_MANAGER: SyncCell<BlockCacheManager> = SyncCell::new(BlockCacheManager::new());

pub fn block_cache_manager() -> &'static mut BlockCacheManager {
    unsafe { BLOCK_CACHE_MANAGER.get_mut() }
}

pub fn block_cache_clear_all() {
    block_cache_manager().clear_all();
}
