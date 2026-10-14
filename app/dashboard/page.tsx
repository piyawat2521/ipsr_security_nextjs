import { Suspense } from "react";
import { getSession } from "@/app/actions/auth";
import Sidebar from "@/app/components/dashboard/Sidebar";
import DashboardHeader from "@/app/components/dashboard/DashboardHeader";
import StatsCard from "@/app/components/dashboard/StatsCard";

async function DashboardContent() {
  const session = await getSession();

  return (
    <>
      <DashboardHeader
        userName={session?.nameUser || session?.username}
        role={session?.role || "ผู้ดูแลระบบ"}
      />
      <section aria-label="สรุปภาพรวม" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatsCard
          title="สถานะระบบรักษาความปลอดภัย"
          value="ปกติ (Online)"
          statusColor="text-emerald-600 dark:text-emerald-400"
        />
        <StatsCard
          title="บทบาทปัจจุบัน"
          value={session?.role ? session.role.toUpperCase() : "GUEST / ADMIN"}
          statusColor="text-blue-600 dark:text-blue-400"
        />
        <StatsCard
          title="การแจ้งเตือนความปลอดภัย"
          value="0 รายการ"
          statusColor="text-gray-700 dark:text-gray-300"
        />
      </section>
    </>
  );
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-gray-900">
      <Sidebar />
      <main className="flex-1 p-6 sm:p-8 overflow-y-auto">
        <Suspense
          fallback={
            <div className="flex h-32 items-center justify-center text-slate-500">
              กำลังโหลดข้อมูลระบบ...
            </div>
          }
        >
          <DashboardContent />
        </Suspense>
      </main>
    </div>
  );
}

