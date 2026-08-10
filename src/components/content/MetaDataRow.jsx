import { cn } from "@/lib/cn";

export default function MetaDataRow({ title, value = "", className = "" }) {
  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between", className)}>
      <h3 className="text-[16px] font-medium text-white pl-2.5 border-l-2 border-white/20">
        {title}
      </h3>
      {value && (
        <span className="w-fit shrink-0 text-[13px] tracking-wide text-white/80 sm:text-right">
          {value}
        </span>
      )}
    </div>
  );
}