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
            "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === category
              ? "border-gray-900 bg-gray-900 text-white"
              : "border-gray-200 bg-white text-gray-600 hover:border-gray-300",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
