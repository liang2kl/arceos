(function() {var implementors = {
"allocator":[["impl&lt;const PAGE_SIZE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"allocator/struct.BitmapPageAllocator.html\" title=\"struct allocator::BitmapPageAllocator\">BitmapPageAllocator</a>&lt;PAGE_SIZE&gt;",1,["allocator::bitmap::BitmapPageAllocator"]],["impl Freeze for <a class=\"struct\" href=\"allocator/struct.BuddyByteAllocator.html\" title=\"struct allocator::BuddyByteAllocator\">BuddyByteAllocator</a>",1,["allocator::buddy::BuddyByteAllocator"]],["impl Freeze for <a class=\"struct\" href=\"allocator/struct.SlabByteAllocator.html\" title=\"struct allocator::SlabByteAllocator\">SlabByteAllocator</a>",1,["allocator::slab::SlabByteAllocator"]],["impl Freeze for <a class=\"enum\" href=\"allocator/enum.AllocError.html\" title=\"enum allocator::AllocError\">AllocError</a>",1,["allocator::AllocError"]]],
"arm_gic":[["impl Freeze for <a class=\"enum\" href=\"arm_gic/gic_v2/enum.TriggerMode.html\" title=\"enum arm_gic::gic_v2::TriggerMode\">TriggerMode</a>",1,["arm_gic::gic_v2::TriggerMode"]],["impl Freeze for <a class=\"enum\" href=\"arm_gic/gic_v2/enum.Polarity.html\" title=\"enum arm_gic::gic_v2::Polarity\">Polarity</a>",1,["arm_gic::gic_v2::Polarity"]],["impl Freeze for <a class=\"struct\" href=\"arm_gic/gic_v2/struct.GicDistributor.html\" title=\"struct arm_gic::gic_v2::GicDistributor\">GicDistributor</a>",1,["arm_gic::gic_v2::GicDistributor"]],["impl Freeze for <a class=\"struct\" href=\"arm_gic/gic_v2/struct.GicCpuInterface.html\" title=\"struct arm_gic::gic_v2::GicCpuInterface\">GicCpuInterface</a>",1,["arm_gic::gic_v2::GicCpuInterface"]]],
"axalloc":[["impl Freeze for <a class=\"struct\" href=\"axalloc/struct.GlobalPage.html\" title=\"struct axalloc::GlobalPage\">GlobalPage</a>",1,["axalloc::page::GlobalPage"]],["impl !Freeze for <a class=\"struct\" href=\"axalloc/struct.GlobalAllocator.html\" title=\"struct axalloc::GlobalAllocator\">GlobalAllocator</a>",1,["axalloc::GlobalAllocator"]]],
"axdriver":[["impl Freeze for <a class=\"struct\" href=\"axdriver/struct.BlockDevices.html\" title=\"struct axdriver::BlockDevices\">BlockDevices</a>",1,["axdriver::BlockDevices"]],["impl Freeze for <a class=\"struct\" href=\"axdriver/struct.NetDevices.html\" title=\"struct axdriver::NetDevices\">NetDevices</a>",1,["axdriver::NetDevices"]],["impl Freeze for <a class=\"struct\" href=\"axdriver/struct.DisplayDevices.html\" title=\"struct axdriver::DisplayDevices\">DisplayDevices</a>",1,["axdriver::DisplayDevices"]],["impl Freeze for <a class=\"struct\" href=\"axdriver/struct.AllDevices.html\" title=\"struct axdriver::AllDevices\">AllDevices</a>",1,["axdriver::AllDevices"]]],
"axerrno":[["impl Freeze for <a class=\"enum\" href=\"axerrno/enum.LinuxError.html\" title=\"enum axerrno::LinuxError\">LinuxError</a>",1,["axerrno::linux_errno::LinuxError"]],["impl Freeze for <a class=\"enum\" href=\"axerrno/enum.AxError.html\" title=\"enum axerrno::AxError\">AxError</a>",1,["axerrno::AxError"]]],
"axfs":[["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axfs/api/struct.ReadDir.html\" title=\"struct axfs::api::ReadDir\">ReadDir</a>&lt;'a&gt;",1,["axfs::api::dir::ReadDir"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"axfs/api/struct.DirEntry.html\" title=\"struct axfs::api::DirEntry\">DirEntry</a>&lt;'a&gt;",1,["axfs::api::dir::DirEntry"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.DirBuilder.html\" title=\"struct axfs::api::DirBuilder\">DirBuilder</a>",1,["axfs::api::dir::DirBuilder"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.File.html\" title=\"struct axfs::api::File\">File</a>",1,["axfs::api::file::File"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.Metadata.html\" title=\"struct axfs::api::Metadata\">Metadata</a>",1,["axfs::api::file::Metadata"]],["impl Freeze for <a class=\"struct\" href=\"axfs/api/struct.OpenOptions.html\" title=\"struct axfs::api::OpenOptions\">OpenOptions</a>",1,["axfs::api::file::OpenOptions"]],["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.File.html\" title=\"struct axfs::fops::File\">File</a>",1,["axfs::fops::File"]],["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.Directory.html\" title=\"struct axfs::fops::Directory\">Directory</a>",1,["axfs::fops::Directory"]],["impl Freeze for <a class=\"struct\" href=\"axfs/fops/struct.OpenOptions.html\" title=\"struct axfs::fops::OpenOptions\">OpenOptions</a>",1,["axfs::fops::OpenOptions"]]],
"axfs_devfs":[["impl !Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.DirNode.html\" title=\"struct axfs_devfs::DirNode\">DirNode</a>",1,["axfs_devfs::dir::DirNode"]],["impl Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.NullDev.html\" title=\"struct axfs_devfs::NullDev\">NullDev</a>",1,["axfs_devfs::null::NullDev"]],["impl Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.ZeroDev.html\" title=\"struct axfs_devfs::ZeroDev\">ZeroDev</a>",1,["axfs_devfs::zero::ZeroDev"]],["impl !Freeze for <a class=\"struct\" href=\"axfs_devfs/struct.DeviceFileSystem.html\" title=\"struct axfs_devfs::DeviceFileSystem\">DeviceFileSystem</a>",1,["axfs_devfs::DeviceFileSystem"]]],
"axfs_vfs":[["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.FileSystemInfo.html\" title=\"struct axfs_vfs::FileSystemInfo\">FileSystemInfo</a>",1,["axfs_vfs::structs::FileSystemInfo"]],["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.VfsNodeAttr.html\" title=\"struct axfs_vfs::VfsNodeAttr\">VfsNodeAttr</a>",1,["axfs_vfs::structs::VfsNodeAttr"]],["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.VfsNodePerm.html\" title=\"struct axfs_vfs::VfsNodePerm\">VfsNodePerm</a>",1,["axfs_vfs::structs::VfsNodePerm"]],["impl Freeze for <a class=\"enum\" href=\"axfs_vfs/enum.VfsNodeType.html\" title=\"enum axfs_vfs::VfsNodeType\">VfsNodeType</a>",1,["axfs_vfs::structs::VfsNodeType"]],["impl Freeze for <a class=\"struct\" href=\"axfs_vfs/struct.VfsDirEntry.html\" title=\"struct axfs_vfs::VfsDirEntry\">VfsDirEntry</a>",1,["axfs_vfs::structs::VfsDirEntry"]]],
"axhal":[["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.TrapFrame.html\" title=\"struct axhal::arch::TrapFrame\">TrapFrame</a>",1,["axhal::arch::x86_64::context::TrapFrame"]],["impl Freeze for <a class=\"struct\" href=\"axhal/arch/struct.TaskContext.html\" title=\"struct axhal::arch::TaskContext\">TaskContext</a>",1,["axhal::arch::x86_64::context::TaskContext"]],["impl Freeze for <a class=\"struct\" href=\"axhal/mem/struct.MemRegionFlags.html\" title=\"struct axhal::mem::MemRegionFlags\">MemRegionFlags</a>",1,["axhal::mem::MemRegionFlags"]],["impl Freeze for <a class=\"struct\" href=\"axhal/mem/struct.MemRegion.html\" title=\"struct axhal::mem::MemRegion\">MemRegion</a>",1,["axhal::mem::MemRegion"]],["impl Freeze for <a class=\"struct\" href=\"axhal/paging/struct.PagingIfImpl.html\" title=\"struct axhal::paging::PagingIfImpl\">PagingIfImpl</a>",1,["axhal::paging::PagingIfImpl"]]],
"axio":[["impl&lt;R&gt; Freeze for <a class=\"struct\" href=\"axio/struct.BufReader.html\" title=\"struct axio::BufReader\">BufReader</a>&lt;R&gt;<span class=\"where fmt-newline\">where\n    R: Freeze,</span>",1,["axio::buffered::bufreader::BufReader"]],["impl Freeze for <a class=\"enum\" href=\"axio/enum.SeekFrom.html\" title=\"enum axio::SeekFrom\">SeekFrom</a>",1,["axio::SeekFrom"]]],
"axnet":[["impl Freeze for <a class=\"struct\" href=\"axnet/struct.TcpSocket.html\" title=\"struct axnet::TcpSocket\">TcpSocket</a>",1,["axnet::smoltcp_impl::tcp::TcpSocket"]]],
"axsync":[["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"axsync/struct.Mutex.html\" title=\"struct axsync::Mutex\">Mutex</a>&lt;T&gt;",1,["axsync::mutex::Mutex"]],["impl&lt;'a, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"axsync/struct.MutexGuard.html\" title=\"struct axsync::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;",1,["axsync::mutex::MutexGuard"]]],
"axtask":[["impl Freeze for <a class=\"struct\" href=\"axtask/struct.TaskId.html\" title=\"struct axtask::TaskId\">TaskId</a>",1,["axtask::task::TaskId"]],["impl !Freeze for <a class=\"struct\" href=\"axtask/struct.WaitQueue.html\" title=\"struct axtask::WaitQueue\">WaitQueue</a>",1,["axtask::wait_queue::WaitQueue"]]],
"capability":[["impl Freeze for <a class=\"struct\" href=\"capability/struct.Cap.html\" title=\"struct capability::Cap\">Cap</a>",1,["capability::Cap"]],["impl Freeze for <a class=\"struct\" href=\"capability/struct.CapError.html\" title=\"struct capability::CapError\">CapError</a>",1,["capability::CapError"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"capability/struct.WithCap.html\" title=\"struct capability::WithCap\">WithCap</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: Freeze,</span>",1,["capability::WithCap"]]],
"driver_block":[["impl Freeze for <a class=\"struct\" href=\"driver_block/ramdisk/struct.RamDisk.html\" title=\"struct driver_block::ramdisk::RamDisk\">RamDisk</a>",1,["driver_block::ramdisk::RamDisk"]]],
"driver_common":[["impl Freeze for <a class=\"enum\" href=\"driver_common/enum.DeviceType.html\" title=\"enum driver_common::DeviceType\">DeviceType</a>",1,["driver_common::DeviceType"]],["impl Freeze for <a class=\"enum\" href=\"driver_common/enum.DevError.html\" title=\"enum driver_common::DevError\">DevError</a>",1,["driver_common::DevError"]]],
"driver_display":[["impl Freeze for <a class=\"struct\" href=\"driver_display/struct.DisplayInfo.html\" title=\"struct driver_display::DisplayInfo\">DisplayInfo</a>",1,["driver_display::DisplayInfo"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"driver_display/struct.FrameBuffer.html\" title=\"struct driver_display::FrameBuffer\">FrameBuffer</a>&lt;'a&gt;",1,["driver_display::FrameBuffer"]]],
"driver_net":[["impl Freeze for <a class=\"struct\" href=\"driver_net/struct.EthernetAddress.html\" title=\"struct driver_net::EthernetAddress\">EthernetAddress</a>",1,["driver_net::EthernetAddress"]]],
"driver_virtio":[["impl&lt;H, T&gt; Freeze for <a class=\"struct\" href=\"driver_virtio/struct.VirtIoBlkDev.html\" title=\"struct driver_virtio::VirtIoBlkDev\">VirtIoBlkDev</a>&lt;H, T&gt;<span class=\"where fmt-newline\">where\n    T: Freeze,</span>",1,["driver_virtio::blk::VirtIoBlkDev"]],["impl&lt;H, T&gt; Freeze for <a class=\"struct\" href=\"driver_virtio/struct.VirtIoGpuDev.html\" title=\"struct driver_virtio::VirtIoGpuDev\">VirtIoGpuDev</a>&lt;H, T&gt;<span class=\"where fmt-newline\">where\n    T: Freeze,</span>",1,["driver_virtio::gpu::VirtIoGpuDev"]],["impl&lt;H, T, const QS: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"driver_virtio/struct.VirtIoNetDev.html\" title=\"struct driver_virtio::VirtIoNetDev\">VirtIoNetDev</a>&lt;H, T, QS&gt;<span class=\"where fmt-newline\">where\n    T: Freeze,</span>",1,["driver_virtio::net::VirtIoNetDev"]]],
"handler_table":[["impl&lt;const N: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; !Freeze for <a class=\"struct\" href=\"handler_table/struct.HandlerTable.html\" title=\"struct handler_table::HandlerTable\">HandlerTable</a>&lt;N&gt;",1,["handler_table::HandlerTable"]]],
"kernel_guard":[["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.NoOp.html\" title=\"struct kernel_guard::NoOp\">NoOp</a>",1,["kernel_guard::NoOp"]],["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.IrqSave.html\" title=\"struct kernel_guard::IrqSave\">IrqSave</a>",1,["kernel_guard::IrqSave"]],["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.NoPreempt.html\" title=\"struct kernel_guard::NoPreempt\">NoPreempt</a>",1,["kernel_guard::NoPreempt"]],["impl Freeze for <a class=\"struct\" href=\"kernel_guard/struct.NoPreemptIrqSave.html\" title=\"struct kernel_guard::NoPreemptIrqSave\">NoPreemptIrqSave</a>",1,["kernel_guard::NoPreemptIrqSave"]]],
"lazy_init":[["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"lazy_init/struct.LazyInit.html\" title=\"struct lazy_init::LazyInit\">LazyInit</a>&lt;T&gt;",1,["lazy_init::LazyInit"]]],
"libax":[["impl Freeze for <a class=\"struct\" href=\"libax/io/struct.Stdin.html\" title=\"struct libax::io::Stdin\">Stdin</a>",1,["libax::io::stdio::Stdin"]],["impl Freeze for <a class=\"struct\" href=\"libax/io/struct.Stdout.html\" title=\"struct libax::io::Stdout\">Stdout</a>",1,["libax::io::stdio::Stdout"]],["impl Freeze for <a class=\"struct\" href=\"libax/time/struct.Instant.html\" title=\"struct libax::time::Instant\">Instant</a>",1,["libax::time::Instant"]],["impl Freeze for <a class=\"struct\" href=\"libax/net/struct.TcpStream.html\" title=\"struct libax::net::TcpStream\">TcpStream</a>",1,["libax::net::tcp::TcpStream"]],["impl Freeze for <a class=\"struct\" href=\"libax/net/struct.TcpListener.html\" title=\"struct libax::net::TcpListener\">TcpListener</a>",1,["libax::net::tcp::TcpListener"]]],
"linked_list":[["impl&lt;G&gt; Freeze for <a class=\"struct\" href=\"linked_list/struct.List.html\" title=\"struct linked_list::List\">List</a>&lt;G&gt;",1,["linked_list::linked_list::List"]],["impl&lt;A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.List.html\" title=\"struct linked_list::unsafe_list::List\">List</a>&lt;A&gt;",1,["linked_list::unsafe_list::List"]],["impl&lt;'a, A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.Iterator.html\" title=\"struct linked_list::unsafe_list::Iterator\">Iterator</a>&lt;'a, A&gt;",1,["linked_list::unsafe_list::Iterator"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.Links.html\" title=\"struct linked_list::unsafe_list::Links\">Links</a>&lt;T&gt;",1,["linked_list::unsafe_list::Links"]],["impl&lt;'a, A: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"linked_list/unsafe_list/struct.Cursor.html\" title=\"struct linked_list::unsafe_list::Cursor\">Cursor</a>&lt;'a, A&gt;",1,["linked_list::unsafe_list::Cursor"]]],
"memory_addr":[["impl Freeze for <a class=\"struct\" href=\"memory_addr/struct.PhysAddr.html\" title=\"struct memory_addr::PhysAddr\">PhysAddr</a>",1,["memory_addr::PhysAddr"]],["impl Freeze for <a class=\"struct\" href=\"memory_addr/struct.VirtAddr.html\" title=\"struct memory_addr::VirtAddr\">VirtAddr</a>",1,["memory_addr::VirtAddr"]]],
"page_table":[["impl Freeze for <a class=\"struct\" href=\"page_table/x86_64/struct.X64PagingMetaData.html\" title=\"struct page_table::x86_64::X64PagingMetaData\">X64PagingMetaData</a>",1,["page_table::arch::x86_64::X64PagingMetaData"]],["impl Freeze for <a class=\"struct\" href=\"page_table/riscv/struct.Sv39MetaData.html\" title=\"struct page_table::riscv::Sv39MetaData\">Sv39MetaData</a>",1,["page_table::arch::riscv::Sv39MetaData"]],["impl Freeze for <a class=\"struct\" href=\"page_table/riscv/struct.Sv48MetaData.html\" title=\"struct page_table::riscv::Sv48MetaData\">Sv48MetaData</a>",1,["page_table::arch::riscv::Sv48MetaData"]],["impl Freeze for <a class=\"struct\" href=\"page_table/aarch64/struct.A64PagingMetaData.html\" title=\"struct page_table::aarch64::A64PagingMetaData\">A64PagingMetaData</a>",1,["page_table::arch::aarch64::A64PagingMetaData"]],["impl&lt;M, PTE, IF&gt; Freeze for <a class=\"struct\" href=\"page_table/struct.PageTable64.html\" title=\"struct page_table::PageTable64\">PageTable64</a>&lt;M, PTE, IF&gt;",1,["page_table::bits64::PageTable64"]],["impl Freeze for <a class=\"enum\" href=\"page_table/enum.PagingError.html\" title=\"enum page_table::PagingError\">PagingError</a>",1,["page_table::PagingError"]],["impl Freeze for <a class=\"enum\" href=\"page_table/enum.PageSize.html\" title=\"enum page_table::PageSize\">PageSize</a>",1,["page_table::PageSize"]]],
"page_table_entry":[["impl Freeze for <a class=\"struct\" href=\"page_table_entry/x86_64/struct.X64PTE.html\" title=\"struct page_table_entry::x86_64::X64PTE\">X64PTE</a>",1,["page_table_entry::arch::x86_64::X64PTE"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/riscv/struct.PTEFlags.html\" title=\"struct page_table_entry::riscv::PTEFlags\">PTEFlags</a>",1,["page_table_entry::arch::riscv::PTEFlags"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/riscv/struct.Rv64PTE.html\" title=\"struct page_table_entry::riscv::Rv64PTE\">Rv64PTE</a>",1,["page_table_entry::arch::riscv::Rv64PTE"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/aarch64/struct.DescriptorAttr.html\" title=\"struct page_table_entry::aarch64::DescriptorAttr\">DescriptorAttr</a>",1,["page_table_entry::arch::aarch64::DescriptorAttr"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/aarch64/struct.A64PTE.html\" title=\"struct page_table_entry::aarch64::A64PTE\">A64PTE</a>",1,["page_table_entry::arch::aarch64::A64PTE"]],["impl Freeze for <a class=\"struct\" href=\"page_table_entry/struct.MappingFlags.html\" title=\"struct page_table_entry::MappingFlags\">MappingFlags</a>",1,["page_table_entry::MappingFlags"]]],
"ratio":[["impl Freeze for <a class=\"struct\" href=\"ratio/struct.Ratio.html\" title=\"struct ratio::Ratio\">Ratio</a>",1,["ratio::Ratio"]]],
"scheduler":[["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"scheduler/struct.FifoTask.html\" title=\"struct scheduler::FifoTask\">FifoTask</a>&lt;T&gt;",1,["scheduler::fifo::FifoTask"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"scheduler/struct.FifoScheduler.html\" title=\"struct scheduler::FifoScheduler\">FifoScheduler</a>&lt;T&gt;",1,["scheduler::fifo::FifoScheduler"]],["impl&lt;T, const MAX_TIME_SLICE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; !Freeze for <a class=\"struct\" href=\"scheduler/struct.RRTask.html\" title=\"struct scheduler::RRTask\">RRTask</a>&lt;T, MAX_TIME_SLICE&gt;",1,["scheduler::round_robin::RRTask"]],["impl&lt;T, const MAX_TIME_SLICE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.usize.html\">usize</a>&gt; Freeze for <a class=\"struct\" href=\"scheduler/struct.RRScheduler.html\" title=\"struct scheduler::RRScheduler\">RRScheduler</a>&lt;T, MAX_TIME_SLICE&gt;",1,["scheduler::round_robin::RRScheduler"]]],
"slab_allocator":[["impl Freeze for <a class=\"enum\" href=\"slab_allocator/enum.HeapAllocator.html\" title=\"enum slab_allocator::HeapAllocator\">HeapAllocator</a>",1,["slab_allocator::HeapAllocator"]],["impl Freeze for <a class=\"struct\" href=\"slab_allocator/struct.Heap.html\" title=\"struct slab_allocator::Heap\">Heap</a>",1,["slab_allocator::Heap"]]],
"spinlock":[["impl&lt;G, T&gt; !Freeze for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLock.html\" title=\"struct spinlock::BaseSpinLock\">BaseSpinLock</a>&lt;G, T&gt;",1,["spinlock::base::BaseSpinLock"]],["impl&lt;'a, G, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spinlock/struct.BaseSpinLockGuard.html\" title=\"struct spinlock::BaseSpinLockGuard\">BaseSpinLockGuard</a>&lt;'a, G, T&gt;<span class=\"where fmt-newline\">where\n    &lt;G as <a class=\"trait\" href=\"kernel_guard/trait.BaseGuard.html\" title=\"trait kernel_guard::BaseGuard\">BaseGuard</a>&gt;::<a class=\"associatedtype\" href=\"kernel_guard/trait.BaseGuard.html#associatedtype.State\" title=\"type kernel_guard::BaseGuard::State\">State</a>: Freeze,</span>",1,["spinlock::base::BaseSpinLockGuard"]]],
"timer_list":[["impl&lt;E&gt; Freeze for <a class=\"struct\" href=\"timer_list/struct.TimerList.html\" title=\"struct timer_list::TimerList\">TimerList</a>&lt;E&gt;",1,["timer_list::TimerList"]],["impl Freeze for <a class=\"struct\" href=\"timer_list/struct.TimerEventFn.html\" title=\"struct timer_list::TimerEventFn\">TimerEventFn</a>",1,["timer_list::TimerEventFn"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()