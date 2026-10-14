import Link from "next/link";
import { handleLogout } from "@/app/actions/auth";

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between min-h-screen">
      <div>
        <div className="p-6 text-xl font-bold text-blue-600 dark:text-blue-400 border-b border-gray-100 dark:border-gray-700">
          IPSR Security
        </div>
        <nav className="mt-6 px-4 space-y-2">
          <Link
            href="/dashboard"
            className="block px-4 py-2.5 text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 rounded-lg font-medium"
          >
            ภาพรวมระบบ
          </Link>
          <Link
            href="#"
            className="block px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
          >
            จัดการข้อมูลผู้ใช้
          </Link>
          <Link
            href="#"
            className="block px-4 py-2.5 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition"
          >
            บันทึกความปลอดภัย
          </Link>
        </nav>
      </div>

      <div className="p-4 border-t border-gray-100 dark:border-gray-700">
        <form action={handleLogout}>
          <button
            type="submit"
            className="w-full text-left px-4 py-2.5 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition font-medium cursor-pointer"
          >
            ออกจากระบบ
          </button>
        </form>
      </div>
    </aside>
  );
}
