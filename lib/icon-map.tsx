import {
  Code2,
  Palette,
  BarChart3,
  Calculator,
  Megaphone,
  ClipboardList,
  Briefcase,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, typeof Briefcase> = {
  Code2,
  Palette,
  BarChart3,
  Calculator,
  Megaphone,
  ClipboardList,
};

export function JobIcon({
  name,
  ...props
}: { name: string } & LucideProps) {
  const Icon = iconMap[name] ?? Briefcase;
  return <Icon {...props} />;
}
