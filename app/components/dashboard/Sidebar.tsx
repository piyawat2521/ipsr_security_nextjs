import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md">
      <div className="p-6 text-xl font-bold text-blue-600 dark:text-blue-400">
        IPSR Dashboard
      </div>
      <nav className="mt-6 px-4 space-y-2">
        <Link 
          href="#" 
          className="block px-4 py-2 text-gray-700 dark:text-gray-200 bg-blue-50 dark:bg-gray-700 rounded-lg font-medium"
        >
          หน้าแรก
        </Link>
        <Link 
          href="#" 
          className="block px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
        >
          จัดการข้อมูล
        </Link>
        <Link
          href="/" 
          className="block px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg mt-10 transition"
        >
          ออกจากระบบ
        </Link>
      </nav>
    </aside>
  );
}
