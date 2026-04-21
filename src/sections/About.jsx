const EXPERIENCE_ITEMS = [
  {
    title: "Rooman Technologies",
    value: "Feb 2025 - June 2025",
    description:
      "Worked as an Application Developer Intern, improved development fundamentals through projects and hands-on learning.",
    link: "https://rooman.net/",
  },
  {
    title: "Full-Stack Development",
    value: "July 2025 - Jan 2026",
    description:
      "Built end-to-end web applications across frontend, backend, APIs, authentication, and databases using TypeScript, React, Node.js, Hono, PostgreSQL, and ORMs like Prisma.",
    link: "https://github.com/chandan-1427?tab=repositories", 
  },
  {
    title: "Open Source",
    value: "Jan 2026 - Present",
    description:
      "Contributed to public projects, collaborated on existing codebases, reviewed code, and followed community standards. Proud to say I have contributed to projects like Bindu and Agno. Best decision I took for industry exposure and learning.",
    link: "https://github.com/chandan-1427?tab=repositories", 
  },
  {
    title: "Bindu Org",
    value: "March 2026 - Present",
    description:
      "Built and refined AI agents across different problem domains with a focus on practical real-world use cases. Tested and iterated on agent architectures, tools, and workflows to improve reliability, and observability.",
    link: "https://getbindu.com/", 
  },
];

const ABOUT_PARAGRAPHS = [
  "I'm Dakka Chandan, a full-stack developer turned AI engineer from Kadapa, Andhra Pradesh, India. I design and build agents and web applications that are understandable, maintainable, and focused on solving real problems rather than chasing hype.",
  "I like to deeply understand a problem before writing a single line of code. For me, good engineering means breaking complex systems into clear, achievable pieces and solving them step by step. I care more about reliability, observability, and maintainability than fast shipping at the cost of quality.",
  "I enjoy learning new technologies because they often unlock better architectures and cleaner developer experiences. Exploring new tools, frameworks, and workflows is part of my daily routine, and I'm comfortable adapting quickly when a project demands it.",
  "I strongly believe great products are built by teams, not heroes. Clear communication, honest feedback, and close collaboration across engineering, design, and product are, in my experience, the fastest way to build something meaningful.",
];

function AboutParagraph({ children }) {
  return (
    <p className="text-[1.08rem] leading-[1.618]">
      {children}
    </p>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[4.236rem]">
        {/* Header */}
        <header className="space-y-[1.618rem]">
          <p className="text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]">
            About
          </p>

          <h2 className="font-work text-[1.418rem] font- leading-[1] text-white/[0.918] md:text-[2.218rem] lg:text-[3.236rem]">
            Building practical AI agents and full-stack systems that are
            reliable, scalable, and grounded in real-world problems.
          </h2>
        </header>

        {/* Body text */}
        <div className="space-y-[1.618rem] text-white/[0.618]">
          {ABOUT_PARAGRAPHS.map((paragraph, index) => (
            <AboutParagraph key={index}>{paragraph}</AboutParagraph>
          ))}
        </div>

        {/* Experience */}
        <div className="space-y-[2.618rem]">
          <h3 className="text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]">
            Experience
          </h3>

          <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
            {EXPERIENCE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] text-white backdrop-blur-[0.236rem]"
              >
                <div className="mb-[1.618rem] flex flex-col gap-[0.764rem] sm:flex-row sm:items-start sm:justify-between sm:gap-[1rem]">
                  <h4 className="font-work text-[1rem] font-medium leading-[1.2] text-white/[0.918]">
                    {item.title}
                  </h4>

                  <span className="w-fit shrink-0 text-[0.76rem] tracking-[0.16em] text-white/[0.618] sm:text-right">
                    {item.value}
                  </span>
                </div>

                <p className="text-[1rem] leading-[1.618] text-white/[0.618]">
                  {item.description}
                </p>

                <div className="mt-[1.618rem] flex justify-end border-t border-white/[0.08] pt-[0.8rem]">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-fit shrink-0 rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.618rem] uppercase tracking-[0.18em] text-white/[0.618] transition-colors duration-300 hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146]"
                  >
                    Visit {`>`}

                    <span className="pointer-events-none absolute left-1/2 top-[-2.2rem] z-20 -translate-x-1/2 whitespace-nowrap rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.55rem] py-[0.3rem] text-[0.58rem] uppercase tracking-[0.14em] text-white/[0.75] opacity-0 shadow-lg transition-all duration-200 group-hover:top-[-2.5rem] group-hover:opacity-100">
                      Link
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}