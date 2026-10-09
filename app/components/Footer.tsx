import Link from "next/link";

type FooterProps = {
  description?: string;
};

export function Footer({
  description = "ระบบรักษาความปลอดภัยอาคาร สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล",
}: FooterProps) {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="flex items-start gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blue-700 text-white">
            <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden="true">
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
          <div>
            <p className="text-sm font-extrabold tracking-wide text-slate-900">
              IPSR <span className="text-blue-700">SECURITY</span>
            </p>
            <p className="mt-1 max-w-lg text-xs leading-6 text-slate-500 sm:text-sm">
              {description}
            </p>
          </div>
        </div>
        <div className="md:text-right">
          <p className="text-xs font-semibold text-slate-700 sm:text-sm">
            สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล
          </p>
          <p className="mt-1 text-xs text-slate-500">
            999 ถนนพุทธมณฑลสาย 4 ศาลายา นครปฐม 73170
          </p>
          <Link
            href="tel:024413932"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-800"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-4" aria-hidden="true">
              <path
                d="M6.2 3.5h2l1 3-1.5 1.4a11 11 0 0 0 4.4 4.4l1.4-1.5 3 1v2c0 .9-.7 1.7-1.7 1.7A12.8 12.8 0 0 1 4.5 5.2c0-1 .8-1.7 1.7-1.7Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            02-441-3939
          </Link>
        </div>
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-[11px] text-slate-400 sm:px-8 sm:text-xs md:flex-row md:items-center md:justify-between">
          <p>IPSR Security · Institute for Population and Social Research</p>
          <p>Institute for Population and Social Research, Mahidol University</p>
        </div>
      </div>
    </footer>
  );
}
