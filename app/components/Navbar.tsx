import Link from "next/link";

const links = [
  { href: "/#overview", label: "ภาพรวมระบบ" },
  { href: "/#features", label: "ความสามารถ" },
  { href: "/#about", label: "เกี่ยวกับเรา" },
];

type NavbarProps = {
  activeHref?: string;
};

export function Navbar({ activeHref = "/#overview" }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <nav
        aria-label="เมนูหลัก"
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <Link href="/" className="group flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-2xl bg-blue-700 text-white shadow-lg shadow-blue-900/15 transition group-hover:bg-blue-800">
            <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
              <path
                d="M12 3 19 6v5.2c0 4.7-3 8.2-7 9.8-4-1.6-7-5.1-7-9.8V6l7-3Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="m9 12 2 2 4-4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <span className="block text-[15px] font-extrabold tracking-[0.12em] text-slate-900">
              IPSR <span className="text-blue-700">SECURITY</span>
            </span>
            <span className="mt-0.5 hidden text-xs font-medium tracking-wide text-slate-500 sm:block">
              สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? "page" : undefined}
              className={`text-sm font-semibold transition ${
                activeHref === link.href
                  ? "text-blue-700"
                  : "text-slate-600 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/#contact"
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full bg-blue-700 px-3 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-blue-800 sm:px-5"
        >
          <span className="hidden sm:inline">ติดต่อเจ้าหน้าที่</span>
          <span className="sm:hidden">ติดต่อเรา</span>
          <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
            <path
              d="M4 10h12m-5-5 5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
