import Link from "next/link";

const features = [
  {
    number: "01",
    title: "ดูแลอาคารและพื้นที่",
    description:
      "วางแผนการดูแลพื้นที่ภายในและโดยรอบสถาบัน ให้ทุกอาคารพร้อมใช้งานและได้รับการดูแลอย่างทั่วถึง",
    icon: (
      <>
        <path d="M4 20V8l8-5 8 5v12H4Z" />
        <path d="M9 20v-6h6v6M8 10h.01M12 10h.01M16 10h.01" />
      </>
    ),
  },
  {
    number: "02",
    title: "เข้า–ออกอย่างมั่นใจ",
    description:
      "สนับสนุนการดูแลการเข้าออกอาคารและการต้อนรับผู้มาติดต่อ ด้วยขั้นตอนที่เป็นระบบและเป็นมิตร",
    icon: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3m4-4v4m-2-2h4" />
      </>
    ),
  },
  {
    number: "03",
    title: "พร้อมประสานงาน",
    description:
      "มีช่องทางติดต่อทีมเจ้าหน้าที่เพื่อประสานงาน ดูแลเหตุเร่งด่วน และช่วยเหลือผู้ใช้พื้นที่",
    icon: (
      <>
        <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 7.7 7.7 0 0 1-3.5-.8L4 20l1.8-4.4a7.7 7.7 0 0 1-.8-3.5 7.5 7.5 0 0 1 15 0Z" />
        <path d="M9 11.5h.01M12.5 11.5h.01M16 11.5h.01" />
      </>
    ),
  },
];

type ContentProps = {
  heading?: string;
  description?: string;
};

export function Content({
  heading = "ดูแลทุกมิติ เพื่อพื้นที่ที่อุ่นใจ",
  description = "ผสานการดูแลอาคาร การประสานงาน และการบริการ เพื่อให้บุคลากร นักศึกษา และผู้มาติดต่อ ใช้พื้นที่ของสถาบันได้อย่างมั่นใจ",
}: ContentProps) {
  return (
    <>
      <section
        id="features"
        className="bg-white px-5 py-20 sm:px-8 sm:py-24"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-bold tracking-wide text-blue-700">
              <span className="size-1.5 rounded-full bg-blue-600" />
              ความปลอดภัยที่ใส่ใจผู้คน
            </span>
            <h2
              id="features-heading"
              className="mt-5 text-3xl leading-tight font-extrabold tracking-tight text-slate-950 sm:text-4xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              {description}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group rounded-3xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_50px_-30px_rgba(30,64,175,0.3)] sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="size-6"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {feature.icon}
                    </svg>
                  </span>
                  <span className="text-xs font-bold tracking-[0.16em] text-slate-300">
                    {feature.number}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
                <Link
                  href="/#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700"
                >
                  สอบถามเพิ่มเติม
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-[#0c2d65] px-6 py-10 sm:rounded-[36px] sm:px-10 sm:py-14 lg:px-16">
          <div className="pointer-events-none absolute -right-20 -top-36 size-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-2 -top-20 size-60 rounded-full border border-white/10" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.18em] text-blue-200">
                INSTITUTE FOR POPULATION AND SOCIAL RESEARCH
              </p>
              <h2 className="mt-4 text-2xl leading-snug font-extrabold text-white sm:text-3xl">
                สถาบันชั้นนำในระดับโลก
                <br className="hidden sm:block" /> สรรสร้างวิทยาการด้านประชากรและสังคม
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
                สถาบันวิจัยประชากรและสังคม มหาวิทยาลัยมหิดล
                สรรสร้างวิทยาการด้านประชากรและสังคม
                เพื่อการพัฒนาอย่างยั่งยืน
              </p>
            </div>
            <Link
              href="/#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 self-center rounded-xl bg-white px-5 text-sm font-bold text-blue-800 transition hover:bg-blue-50"
            >
              ติดต่อ IPSR Security
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
          </div>
        </div>
      </section>
    </>
  );
}
