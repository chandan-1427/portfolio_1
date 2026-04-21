const PROJECT_ITEMS = [
  {
    title: "Bindu Mail Agent",
    value: "AI Automation",
    description:
      "An intelligent HR automation system that processes job applications via email, using AI-powered skills to extract data, evaluate completeness, and generate professional responses. Features a modular skills architecture, dynamic per-inbox requirements, comprehensive audit trails, and enterprise-grade production features.",
    tech: ["Python", "Bindu", "Agno", "AgentMail", "Claude Skills", "Hindsight", "PostgreSQl", "HTML/CSS"],
    github: "https://github.com/chandan-1427/mail-agent",
    live: "",
  },
  {
    title: "Feedback Intelligence",
    value: "Full-Stack",
    description:
      "A comprehensive full-stack application for collecting, analyzing, and managing customer feedback with AI-powered insights, theme extraction, and intelligent solution generation. Transforms customer feedback into actionable insights through feedback collection interface, AI analysis and comprehensive analytics dashboard.",
    tech: ["TypeScript", "React", "Node.js", "Hono", "PostgreSQL", "JWT", "Zod", "Groq", "TailwindCSS", "Vite", "Recharts"],
    github: "https://github.com/chandan-1427/feedback-intelligence",
    live: "https://feedback-intelligence-five.vercel.app",
  },
  {
    title: "AI Interview Coach Agent",
    value: "AI Agent",
    description:
      "An AI agent that simulates professional responses for technical interviews, demonstrating depth, real-world experience, and architectural trade-offs. Built on the Bindu Agent Framework, this agent helps technical candidates master interview narratives by providing concise, 30-second STAR method responses.",
    tech: ["Python", "Bindu", "Langchain", "Memo", "OpenAI"],
    github: "https://github.com/chandan-1427/interview-coaching-agent",
    live: "",
  },
  {
    title: "Vessify",
    value: "Full-Stack",
    description:
      "Vessify is a full-stack SaaS application designed to extract and structure financial transaction data from unstructured sources like bank SMS messages and financial statements. Converts raw financial statements into structured data instantly.",
    tech: ["Typescript", "Next.js", "NextAuth", "Tailwindcss", "Hono", "Prisma ORM", "Better Auth"],
    github: "https://github.com/chandan-1427/text-extractor",
    live: "https://vessify-six.vercel.app",
  },
];

const buttonBaseClass =
  "w-fit shrink-0 rounded-[0.3rem] border border-white/[0.146] px-[0.764rem] py-[0.382rem] text-[0.618rem] uppercase tracking-[0.18em] transition-colors duration-300";

const buttonVariants = {
  live: "bg-white/[0.156] text-white hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146]",
  code: "bg-white/[0.056] text-white/[0.618] hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146]",
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <header className="space-y-[1.618rem]">
          <p className="text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]">
            Projects
          </p>

          <h2 className="max-w-[48rem] font-work text-[1.418rem] leading-[1] text-white/[0.918] md:text-[2.218rem] lg:text-[3.236rem]">
            My work across AI agents, and full-stack applications.
          </h2>
        </header>

        <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
          {PROJECT_ITEMS.map((item) => (
            <div
              key={item.title}
              className="rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] text-white backdrop-blur-[0.236rem]"
            >
              <div className="mb-[1.618rem] flex flex-col gap-[0.764rem] sm:flex-row sm:items-start sm:justify-between">
                <h3 className="font-work text-[1rem] font-medium leading-[1.2] text-white/[0.918]">
                  {item.title}
                </h3>

                <span className="w-fit shrink-0 text-[0.76rem] tracking-[0.16em] text-white/[0.618] sm:text-right">
                  {item.value}
                </span>
              </div>

              <p className="text-[1rem] leading-[1.618] text-white/[0.618]">
                {item.description}
              </p>

              <div className="mt-[1.618rem] flex flex-wrap gap-[0.618rem]">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.618rem] uppercase tracking-[0.18em] text-white/[0.618]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-[1.618rem] flex justify-end gap-[0.764rem] border-t border-white/[0.08] pt-[0.8rem]">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBaseClass} ${buttonVariants.live} group relative`}
                  >
                    Live {`>`}

                    <span className="pointer-events-none absolute left-1/2 top-[-2.2rem] z-20 -translate-x-1/2 whitespace-nowrap rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.55rem] py-[0.3rem] text-[0.58rem] uppercase tracking-[0.14em] text-white/[0.75] opacity-0 shadow-lg transition-all duration-200 group-hover:top-[-2.5rem] group-hover:opacity-100">
                      Live Link
                    </span>
                  </a>
                )}

                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${buttonBaseClass} ${buttonVariants.code} group relative`}
                >
                  Code {`>`}

                  <span className="pointer-events-none absolute left-1/2 top-[-2.2rem] z-20 -translate-x-1/2 whitespace-nowrap rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.55rem] py-[0.3rem] text-[0.58rem] uppercase tracking-[0.14em] text-white/[0.75] opacity-0 shadow-lg transition-all duration-200 group-hover:top-[-2.5rem] group-hover:opacity-100">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}