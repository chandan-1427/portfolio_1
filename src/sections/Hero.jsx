import { useEffect, useMemo, useState } from "react";

const NAME = "CHANDAN";
const TAGLINE = "Full Stack Developer & AI Engineer";

export default function HeroSection() {
  const letters = useMemo(() => NAME.split(""), []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="flex min-h-screen w-full items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <p
            className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50 transition-all duration-700 ease-out sm:mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(0.5rem)",
              transitionDelay: "120ms",
            }}
          >
            Hello! I&apos;m
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-y-2"
            role="heading"
            aria-level={1}
            aria-label={NAME}
          >
            {letters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                aria-hidden="true"
                className="inline-block font-work text-[50px] font-medium tracking-[0.12em] text-white transition-all duration-700 ease-out md:text-[90px] lg:text-[110px]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? "translateY(0)"
                    : index % 2 === 0
                    ? "translateY(-1.5rem)"
                    : "translateY(1.5rem)",
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </div>

          <p
            className="mt-5 max-w-[90%] text-[15px] tracking-[0.15em] text-white/70 transition-all duration-700 ease-out sm:mt-6 sm:tracking-[0.13em] md:max-w-2xl md:text-[20px] lg:text-[20px]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(1rem)",
              transitionDelay: `${letters.length * 80 + 200}ms`,
            }}
          >
            {TAGLINE}
          </p>
        </div>
      </div>
    </section>
  );
}