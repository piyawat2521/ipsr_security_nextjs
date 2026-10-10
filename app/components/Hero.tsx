import Link from "next/link";


type HeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function Hero({
  eyebrow = "ปลอดภัย มั่นใจ ในทุกวัน",
  title = "IPSR SECURITY\\nBUILDING",
  description = "ระบบรักษาความปลอดภัยอาคาร สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล เชื่อมต่อการดูแลพื้นที่และผู้คนด้วยมาตรฐานที่ไว้วางใจได้",
  primaryHref = "/#features",
  primaryLabel = "รู้จักระบบของเรา",
  secondaryHref = "/#about",
  secondaryLabel = "เกี่ยวกับสถาบัน",
}: HeroProps) {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden bg-[#f5f9ff]"
      aria-labelledby="hero-title"
    >
      <div className="pointer-events-none absolute -right-48 -top-52 -z-10 size-[540px] rounded-full bg-blue-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-72 left-1/3 -z-10 size-[500px] rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10 lg:py-24">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-blue-100 bg-white/80 px-3.5 py-2 shadow-sm">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-bold tracking-wide text-slate-700 sm:text-sm">
              {eyebrow}
            </span>
          </div>

          <h1
            id="hero-title"
            className="font-sans max-w-2xl whitespace-pre-line text-4xl leading-[1.08] font-black tracking-[-0.055em] text-slate-950 sm:text-5xl lg:text-[3.65rem]"
          >
            {title.split("\\n").map((line, index) => (
              <span
                key={line}
                className={`block ${index === 1 ? "mt-1 text-[3.1rem] sm:text-6xl lg:text-[5rem]" : "text-[2.1rem] sm:text-5xl lg:text-[3.45rem]"}`}
              >
                {line === "IPSR SECURITY" ? (
                  <>
                    <span className="text-blue-700">IPSR</span>{" "}
                    <span className="text-slate-950">SECURITY</span>
                  </>
                ) : index === 1 ? (
                  <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>
          <div className="mt-4 flex items-center gap-2.5" aria-hidden="true">
            <span className="h-1 w-10 rounded-full bg-blue-700" />
            <span className="h-1 w-3 rounded-full bg-cyan-400" />
            <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-slate-400">
              FACILITY SECURITY SYSTEM
            </span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={primaryHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-700 px-5 text-sm font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-blue-800"
            >
              {primaryLabel}
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
            <Link
              href={secondaryHref}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-5 text-sm font-bold text-slate-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-700"
            >
              {secondaryLabel}
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2">
              {["#1d4ed8", "#0f766e", "#60a5fa", "#1e3a8a"].map((color, index) => (
                <span
                  key={color}
                  className="flex size-9 items-center justify-center rounded-full border-2 border-[#f5f9ff] text-[10px] font-bold text-white"
                  style={{ backgroundColor: color, zIndex: 4 - index }}
                  aria-hidden="true"
                >
                  {["รป", "อค", "บ", "IP"][index]}
                </span>
              ))}
            </div>
            <p className="text-xs leading-5 text-slate-500 sm:text-sm">
              <span className="font-bold text-slate-800">ใส่ใจทุกความปลอดภัย</span>
              <br className="sm:hidden" /> โดยทีมรักษาความปลอดภัยของสถาบัน
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] lg:ml-auto">
          <div className="absolute -left-6 top-12 size-16 rounded-2xl border border-blue-100 bg-white/70 shadow-lg shadow-blue-900/5 sm:-left-10 sm:size-20" />
          <div className="absolute -right-4 bottom-14 size-24 rounded-full border-[14px] border-blue-100/70 sm:-right-8 sm:size-32" />

          <div className="relative overflow-hidden rounded-[28px] border border-white bg-white p-3 shadow-[0_28px_80px_-30px_rgba(30,64,175,0.3)] sm:rounded-[34px] sm:p-4">
            <div className="relative min-h-[340px] overflow-hidden rounded-[21px] bg-gradient-to-br from-[#0d2c65] via-[#12468e] to-[#287bd0] p-5 sm:min-h-[410px] sm:rounded-[26px] sm:p-7">
              <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:34px_34px]" />
              <div className="absolute -right-16 -top-20 size-64 rounded-full border border-white/15" />
              <div className="absolute -right-5 -top-9 size-44 rounded-full border border-white/15" />

              <div className="relative flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-blue-100/75">IPSR BUILDING</p>
                  <p className="mt-1 text-sm font-bold tracking-wide text-white sm:text-base">
                    ศูนย์รักษาความปลอดภัย
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-2.5 py-1.5 text-[10px] font-bold text-emerald-200 sm:text-xs">
                  <span className="size-1.5 rounded-full bg-emerald-300" />
                  ออกแบบเพื่อความปลอดภัย
                </span>
              </div>

              <div className="relative mt-6 flex h-[198px] items-end justify-center sm:mt-8 sm:h-[240px]">
                <div className="absolute bottom-5 left-1/2 h-36 w-[85%] -translate-x-1/2 rounded-t-[100%] border border-white/10 bg-gradient-to-t from-blue-300/10 to-white/[0.04] sm:h-48" />
                <svg
                  viewBox="0 0 420 240"
                  className="relative z-10 h-full w-full drop-shadow-[0_12px_20px_rgba(2,18,50,.25)]"
                  fill="none"
                  role="img"
                  aria-label="ภาพประกอบอาคารสถาบันและระบบรักษาความปลอดภัย"
                >
                  <path d="M25 211h370" stroke="white" strokeOpacity=".25" />
                  <path d="M46 211v-67l54-32 55 32v67H46Z" fill="#dcecff" />
                  <path d="m38 146 62-39 62 39H38Z" fill="#b8d5f8" />
                  <path d="M66 154h17v20H66zm31 0h17v20H97zm31 0h17v20h-17z" fill="#4783c3" />
                  <path d="M82 181h27v30H82z" fill="#3d6eaa" />
                  <path d="M160 211V92l75-44 77 44v119H160Z" fill="#f7fbff" />
                  <path d="m149 97 86-54 88 54H149Z" fill="#c7e0ff" />
                  <path d="M188 104h24v28h-24zm48 0h24v28h-24zm48 0h17v28h-17z" fill="#4987c4" />
                  <path d="M188 148h24v28h-24zm48 0h24v28h-24zm48 0h17v28h-17z" fill="#4987c4" />
                  <path d="M221 178h37v33h-37z" fill="#315e98" />
                  <path d="M278 206c0-14 11-25 25-25s25 11 25 25v5h-50v-5Z" fill="#a8c8eb" />
                  <path d="M303 151v30m-11-19h22" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M281 157c0-12 10-22 22-22s22 10 22 22" stroke="#8de8c1" strokeWidth="2" strokeDasharray="4 5" />
                  <path d="M65 130v-15m-9 9h18" stroke="#fff" strokeOpacity=".7" strokeLinecap="round" />
                  <circle cx="348" cy="74" r="4" fill="#8de8c1" />
                  <circle cx="348" cy="74" r="11" stroke="#8de8c1" strokeOpacity=".5" />
                  <path d="M348 85v35m-10-14 10 10 10-10" stroke="#8de8c1" strokeOpacity=".6" strokeDasharray="3 4" />
                  <path d="M133 211v-21m-8 11h16" stroke="#79d9b1" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>

              <div className="relative mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
                {[
                  { label: "ใส่ใจดูแล", value: "ทุก", suffix: "พื้นที่" },
                  { label: "ต้อนรับ", value: "ทุก", suffix: "คน" },
                  { label: "พร้อม", value: "ประสาน", suffix: "งาน" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/[0.09] px-2 py-3 backdrop-blur sm:rounded-2xl sm:px-3.5 sm:py-3.5"
                  >
                    <p className="text-[9px] font-medium text-blue-100/70 sm:text-[10px]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-lg leading-none font-extrabold text-white sm:text-xl">
                      {item.value}
                      <span className="ml-1 text-[9px] font-medium text-blue-100/70 sm:text-[10px]">
                        {item.suffix}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -left-3 top-[46%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-3.5 py-3 shadow-xl shadow-blue-950/10 sm:-left-12 sm:px-4">
            <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
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
            <span>
              <span className="block text-xs font-bold text-slate-900 sm:text-sm">
                ออกแบบเพื่อความอุ่นใจ
              </span>
              <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-xs">
                ใส่ใจความปลอดภัยของคุณ
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
