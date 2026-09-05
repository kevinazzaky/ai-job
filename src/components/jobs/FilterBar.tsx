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
    <div className="mb-8 flex gap-6 overflow-x-auto border-b border-slate-200">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={activeCategory === category}
          className={clsx(
            "shrink-0 border-b-2 pb-3 text-sm font-medium transition-colors",
            activeCategory === category
              ? "border-[var(--color-primary)] text-slate-950"
              : "border-transparent text-slate-500 hover:text-slate-800",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
