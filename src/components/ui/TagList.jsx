import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const hoverTransition = { duration: 0.25, ease: "easeOut" };
const tapTransition = { duration: 0.15, ease: "easeOut" };

export default function TagList({ tags, className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("flex flex-wrap gap-2", className)}
      initial={shouldReduceMotion ? undefined : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={{ once: false, amount: 0.4 }}
      variants={container}
    >
      {tags.map((tag) => (
        <motion.span
          key={tag}
          className="rounded-[14px] border-2 border-white/[0.16] bg-white/2 px-3 py-1.5 text-[13px] tracking-wide text-white/90 cursor-default"
          variants={tagVariants}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.05, transition: hoverTransition }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.95, transition: tapTransition }}
        >
          {tag}
        </motion.span>
      ))}
    </motion.div>
  );
}