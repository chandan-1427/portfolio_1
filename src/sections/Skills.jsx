const SKILL_GROUPS = [
  {
    title: "Frontend",
    description:
      "I focus on clean, and minimal design and maintainance.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "API management",
      "State management",
      "Framer Motion"
    ],
  },
  {
    title: "Backend",
    description:
      "I believe in designing scalable systems with modular complexity.",
    skills: [
      "Node.js",
      "Express.js",
      "Hono",
      "REST APIs",
      "JWT",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Drizzle ORM"
    ],
  },
  {
    title: "AI & Agents",
    description:
      "Rapid changing environment with new tech everyday!",
    skills: [
      "Agno",
      "RAG",
      "LangChain",
      "System design",
      "Tool design",
      "Retrieval systems",
      "Reliability engineering",
      "Security",
      "Evaluation & Observation",
      "Skill building"
    ],
  },
  {
    title: "Tools & Workflow",
    description:
      "Rooted workflow and tool usage.",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Vercel",
      "Render",
      "Postman",
      "VS Code",
      "pgAdmin",
      "AgentMail",
      "LangSmith",
      "Pydantic",
      "ElevenLabs",
    ],
  },
];

export default function SkillsSection() {  
  return (
    <section id="skills" className="relative px-[1.618rem] py-[6.854rem] text-white md:px-[2.618rem] lg:px-[4.236rem]">
      <div className="mx-auto flex max-w-[68.54rem] flex-col gap-[2.618rem]">
        <header className="space-y-[1.618rem]">
          <p className="text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]">
            Skills
          </p>

          <h2 className="max-w-[48rem] font-work text-[1.418rem] leading-[1] text-white/[0.918] md:text-[2.218rem] lg:text-[3.236rem]">
            Skills built through real projects and practical work.
          </h2>
        </header>

        <div className="grid gap-[1.618rem] md:grid-cols-2 md:gap-[2.618rem]">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[1.618rem] backdrop-blur-[0.236rem]"
            >
              <div className="mb-[1.618rem] space-y-[0.764rem]">
                <h4 className="font-work text-[1rem] font-medium leading-[1.2] text-white/[0.918]">
                  {group.title}
                </h4>

                <p className="text-[0.95rem] leading-[1.618] text-white/[0.618] tracking-wide">
                  {group.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-[0.764rem]">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.73rem] tracking-[0.12em] text-white/[0.72]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}