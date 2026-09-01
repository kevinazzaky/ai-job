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
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onChange(category)}
          aria-pressed={activeCategory === category}
          className={clsx(
            "rounded-full border px-4 py-2 text-sm font-bold transition-colors",
            activeCategory === category
              ? "border-transparent bg-(--color-primary)] text-white"
              : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}