import React from 'react'

export default function DashboardHeader() {
  return (
    <header className="flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
        ภาพรวมระบบ
      </h1>
      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
        ยินดีต้อนรับ ผู้ดูแลระบบ
      </span>
    </header>
  );
}