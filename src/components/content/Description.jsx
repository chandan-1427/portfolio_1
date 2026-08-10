import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/cn";

export default function Description({ desc, className = "" }) {
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

  return (
    <div ref={ref}>
      <motion.p
        className={cn("text-[15.5px] leading-relaxed text-white/90", className)}
        initial={false}
        animate={shouldReduceMotion ? undefined : { opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {desc}
      </motion.p>
    </div>
  );
}
