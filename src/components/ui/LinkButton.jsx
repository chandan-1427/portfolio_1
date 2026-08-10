import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export default function LinkButton({ href, variant = "code", children, className = "" }) {
  const variantClasses = {
    code: "bg-white text-black border-black/75 hover:bg-white/[0.12] hover:text-white hover:border-white/[0.16] active:bg-white/[0.06] active:shadow-none",
    live: "bg-black/80 text-white border-white/15 hover:bg-white/[0.07] hover:text-neon hover:border-black/30 active:bg-white/[0.03] active:shadow-none",
  };

  const shouldReduceMotion = useReducedMotion();

  // Observed separately from the animated element below — if we watched the
  // element we're translating, its own transform would shift its bounding
  // box and re-trigger the observer mid-animation, causing flicker.
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
      return;
    }

    // Debounce only the exit — right at the edge of the viewport, ordinary
    // scroll jitter flips isInView back and forth rapidly.
    const timeout = setTimeout(() => setVisible(false), 200);
    return () => clearTimeout(timeout);
  }, [isInView]);

  const hoverTransition = { duration: 0.25, ease: "easeOut" };
  const tapTransition = { duration: 0.15, ease: "easeOut" };

  const buttonVariants = {
    hover: { scale: shouldReduceMotion ? 1 : 1.02, transition: hoverTransition },
    tap: { scale: shouldReduceMotion ? 1 : 0.9, transition: tapTransition },
  };

  const textVariants = {
    hover: { scale: shouldReduceMotion ? 1 : 1.06, transition: hoverTransition },
    tap: { scale: shouldReduceMotion ? 1 : 0.94, transition: tapTransition },
  };

  return (
    <div ref={ref}>
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "group relative flex items-center gap-1 py-2 px-3 border-3 rounded-2xl text-[14px] font-medium",
          variantClasses[variant],
          className
        )}
        initial={false}
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: visible ? 1 : 0, y: visible ? 0 : 16, scale: 1 }
        }
        transition={{ duration: 0.4, ease: "easeOut" }}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <motion.span variants={textVariants} className="flex items-center gap-1">
          {children}
        </motion.span>
      </motion.a>
    </div>
  );
}
