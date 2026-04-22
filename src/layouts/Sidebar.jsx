const LINKS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="pointer-events-none fixed right-[1.618rem] top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
        <div className="pointer-events-auto rounded-[0.5rem] border border-white/[0.146] bg-white/[0.034] p-[0.764rem] backdrop-blur-[0.236rem]">
          <nav className="flex flex-col gap-[0.618rem]">
            {LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className="group relative flex h-[2.85rem] w-[2.85rem] items-center justify-center rounded-[0.5rem] border border-white/[0.08] bg-white/[0.04] transition-all duration-300 hover:border-white/[0.2] hover:bg-white/[0.08]"
              >
                <span className="font-geist text-[0.72rem] uppercase tracking-[0.12em] text-white/[0.78]">
                  {item.label.charAt(0)}
                </span>

                <span className="pointer-events-none absolute right-[120%] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-[0.4rem] border border-white/[0.1] bg-[#111111] px-[0.764rem] py-[0.382rem] font-geist text-[0.64rem] uppercase tracking-[0.16em] text-white/[0.78] opacity-0 transition-all duration-300 group-hover:right-[135%] group-hover:opacity-100">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-[1rem] left-1/2 z-50 flex w-[calc(100%-1.618rem)] max-w-[28rem] -translate-x-1/2 items-center justify-between rounded-[0.75rem] border border-white/[0.12] bg-[#0D0D0D]/80 px-[0.5rem] py-[0.5rem] backdrop-blur-[20px] lg:hidden">
        {LINKS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => handleClick(item.id)}
            className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-[0.236rem] rounded-[0.5rem] px-[0.4rem] py-[0.55rem] transition-all duration-300 hover:bg-white/[0.08]"
          >
            <span className="font-geist text-[0.72rem] uppercase tracking-[0.08em] text-white/[0.78]">
              {item.label.charAt(0)}
            </span>

            <span className="truncate font-geist text-[0.52rem] uppercase tracking-[0.12em] text-white/[0.5]">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </>
  );
}