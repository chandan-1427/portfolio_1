import { motion, useReducedMotion } from "motion/react";

export default function DotGridLoader({ visible }) {
  const cols = 20;
  const rows = 14;
  const dots = Array.from({ length: cols * rows });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      {visible && (
        <div
          className="grid h-64 w-64 place-items-center gap-2 rounded-3xl sm:h-80 sm:w-80"
          style={{
            gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          }}
        >
          {dots.map((_, i) => {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const delay = (col + row) * 0.06;
            return (
              <motion.span
                key={i}
                className="block h-1 w-1 rounded-full will-change-transform"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.918)",
                  opacity: shouldReduceMotion ? 1 : 0.2,
                  transform: shouldReduceMotion ? "scale(1)" : "scale(0.35)",
                }}
                initial={shouldReduceMotion ? { scale: 1, opacity: 1 } : { scale: 0.35, opacity: 0.2 }}
                animate={
                  shouldReduceMotion
                    ? { scale: 1, opacity: 1 }
                    : { scale: [0.35, 1, 0.35], opacity: [0.2, 1, 0.2] }
                }
                transition={{
                  duration: 1.4,
                  ease: [0.45, 0, 0.55, 1],
                  repeat: shouldReduceMotion ? 0 : Infinity,
                  delay,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}