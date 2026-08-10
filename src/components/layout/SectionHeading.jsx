import { cn } from "@/lib/cn";

export default function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={cn(
        "text-2xl leading-tight tracking-tight text-white md:text-4xl lg:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}