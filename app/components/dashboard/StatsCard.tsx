interface StatsCardProps {
  title: string;
  value: string;
  statusColor?: string; // กำหนดสีของตัวเลขได้ (เช่น สีเขียวสำหรับสถานะ Online)
}

export default function StatsCard({ title, value, statusColor = "text-gray-800 dark:text-white" }: StatsCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
      <p className={`text-3xl font-bold mt-2 ${statusColor}`}>{value}</p>
    </div>
  );
}