"use client";

import clsx from "clsx";

export default function FilterBar({
  categories,
  activeCategory,
  onChange,
}: {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}) {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={activeCategory === category}
          className={clsx(
            "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-all",
            activeCategory === category
              ? "border-blue-400/50 bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-white/20 hover:text-white",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
