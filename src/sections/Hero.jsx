import { motion, useReducedMotion } from "motion/react";
import { HiOutlineDocumentText } from "react-icons/hi";
import Tooltip from "@/components/ui/ToolTip";
import { useHover } from "@/lib/useHover";

const NAME = "CHANDAN";
const LETTERS = NAME.split("");
const TAGLINE = "- Full Stack Developer -";

const container = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.15, staggerChildren: 0.03 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function HeroSection({ ready = true }) {
  const shouldReduceMotion = useReducedMotion();
  const [resumeHovered, resumeHoverProps] = useHover();

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="flex min-h-screen items-center justify-center bg-green-800 m-3 rounded-[24px] px-4 sm:m-6 sm:rounded-[32px] sm:px-6 md:rounded-[20px]">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={shouldReduceMotion ? undefined : "hidden"}
          animate={shouldReduceMotion ? undefined : ready ? "visible" : "hidden"}
          variants={container}
        >
          <motion.p
            className="mb-3 text-xs uppercase tracking-[0.3em] text-white/90 sm:mb-4"
            variants={fadeUp}
          >
            Hello! I&apos;m
          </motion.p>

          <h1 aria-label={NAME} className="flex flex-wrap items-center justify-center">
            {LETTERS.map((letter, index) => (
              <motion.span
                key={`${letter}-${index}`}
                aria-hidden="true"
                className="inline-block text-[36px] font-france font-extralight tracking-[0.08em] text-white sm:text-[50px] sm:tracking-[0.12em] md:text-[90px] lg:text-[110px]"
                variants={{
                  hidden: { opacity: 0, y: index % 2 === 0 ? -24 : 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-5 whitespace-nowrap uppercase text-[11px] font-light tracking-[0.06em] text-white sm:mt-6 sm:text-sm sm:tracking-[0.10em] md:text-[16px]"
            variants={fadeUp}
          >
            {TAGLINE}
          </motion.p>

          <motion.a
            href="/chandan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-8 flex w-fit shrink-0 items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-xs tracking-wide text-white/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_8px_-2px_rgba(0,0,0,0.2)] transition-colors duration-200 hover:border-white/[0.12] hover:bg-white/[0.07] hover:text-white/80 active:bg-white/[0.03] active:shadow-none sm:mt-10"
            variants={fadeUp}
            whileTap={
              shouldReduceMotion
                ? undefined
                : { scale: 0.96, transition: { duration: 0.15, ease: "easeOut" } }
            }
            {...resumeHoverProps}
          >
            <HiOutlineDocumentText size={14} />
            View resume
            <Tooltip label="View PDF" position="top-compact" visible={resumeHovered} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
