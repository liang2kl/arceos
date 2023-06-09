#![no_std]
#![no_main]

use core::cell::RefCell;

extern crate alloc;
use alloc::rc::Rc;
use block_cache::block_cache_clear_all;
use dev::DiskWrapper;
use jbd::{sal::BlockDevice, Journal};
use journal::{get_buffer_dyn, SystemProvider};
use spin::Mutex;

mod block_cache;
mod dev;
mod journal;

const BUF_SIZE: usize = 2048;
const JOURNAL_SIZE: usize = 2048;

#[no_mangle]
fn main() {
    let mut total_metadata_efficiency = 0.0;
    let mut total_data_efficiency = 0.0;

    for _ in 0..16 {
        let (journal, device) = create_journal();
        let journal = Rc::new(RefCell::new(journal));

        total_metadata_efficiency += bench_metadata(journal.clone(), device.clone());
        total_data_efficiency += bench_data(journal.clone(), device.clone());
    }

    axlog::ax_println!(
        "Metadata Journaling efficiency: {:.0}%",
        100.0 * total_metadata_efficiency / 16.0,
    );

    axlog::ax_println!(
        "Data Journaling efficiency: {:.0}%",
        100.0 * total_data_efficiency / 16.0,
    );
}

fn bench_metadata(journal: Rc<RefCell<Journal>>, dev: Rc<dyn BlockDevice>) -> f64 {
    let handle_rc = Journal::start(journal.clone(), 512).unwrap();
    let mut handle = handle_rc.borrow_mut();

    let start = libax::time::Instant::now();
    for i in 0..512 {
        let buf = get_buffer_dyn(&dev, i).unwrap();
        buf.mark_dirty();
        handle.get_create_access(&buf).unwrap();
        handle.dirty_metadata(&buf).unwrap();
    }

    handle.stop().unwrap();
    journal.as_ref().borrow_mut().commit_transaction().unwrap();
    journal.as_ref().borrow_mut().log_do_checkpoint();
    let duration_checkpoint = start.elapsed().as_secs_f64();

    block_cache_clear_all();

    let start = libax::time::Instant::now();
    for i in 512..1024 {
        let buf = get_buffer_dyn(&dev, i).unwrap();
        buf.mark_dirty();
        buf.sync();
    }
    let duration_sync = start.elapsed().as_secs_f64();

    block_cache_clear_all();

    duration_sync / duration_checkpoint
}

fn bench_data(journal: Rc<RefCell<Journal>>, dev: Rc<dyn BlockDevice>) -> f64 {
    let handle_rc = Journal::start(journal.clone(), 512).unwrap();
    let mut handle = handle_rc.borrow_mut();

    let start = libax::time::Instant::now();
    for i in 1024..1536 {
        let buf = get_buffer_dyn(&dev, i).unwrap();
        handle.get_create_access(&buf).unwrap();
        buf.mark_dirty();
        handle.dirty_data(&buf).unwrap();
    }

    handle.stop().unwrap();
    journal.as_ref().borrow_mut().commit_transaction().unwrap();
    journal.as_ref().borrow_mut().log_do_checkpoint();
    let duration_checkpoint = start.elapsed().as_secs_f64();

    block_cache_clear_all();

    let start = libax::time::Instant::now();
    for i in 1536..2048 {
        let buf = get_buffer_dyn(&dev, i).unwrap();
        buf.mark_dirty();
        buf.sync();
    }
    let duration_sync = start.elapsed().as_secs_f64();

    block_cache_clear_all();

    duration_sync / duration_checkpoint
}

fn create_journal() -> (jbd::Journal, Rc<DiskWrapper>) {
    let mut all_devices = axdriver::init_drivers();
    let device = dev::Disk::new(all_devices.block.take_one().unwrap());
    let wrapper = Rc::new(DiskWrapper(Mutex::new(device)));
    let mut journal = jbd::Journal::init_dev(
        Rc::new(SystemProvider::new()),
        wrapper.clone(),
        wrapper.clone(),
        BUF_SIZE as u32,
        JOURNAL_SIZE as u32,
    )
    .unwrap();
    journal.create().unwrap();

    (journal, wrapper)
}
