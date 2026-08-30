import {
  Code2,
  Palette,
  BarChart3,
  Calculator,
  Megaphone,
  ClipboardList,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  BarChart3,
  Calculator,
  Megaphone,
  ClipboardList,
};

export function getJobIcon(name: string): LucideIcon {
  return iconMap[name] ?? Briefcase;
}