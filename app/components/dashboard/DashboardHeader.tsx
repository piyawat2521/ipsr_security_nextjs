type DashboardHeaderProps = {
  userName?: string | null;
  role?: string;
};

export default function DashboardHeader({
  userName,
  role = "ผู้ดูแลระบบ",
}: DashboardHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          ภาพรวมระบบ
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          ระบบรักษาความปลอดภัยอาคาร สถาบันวิจัยประชากรและสังคม
        </p>
      </div>
      <span className="inline-flex items-center self-start sm:self-auto text-sm bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 px-3.5 py-1.5 rounded-full font-medium">
        ยินดีต้อนรับ {userName ? `${userName} (${role})` : role}
      </span>
    </header>
  );
}