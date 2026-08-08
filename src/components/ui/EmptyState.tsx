import type { ComponentType, SVGProps } from "react";
import { ExperienceIcon } from "@/components/ui/icons";

interface EmptyStateProps {
  message: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}

export default function EmptyState({ message, icon: Icon = ExperienceIcon }: EmptyStateProps) {
  return (
    <div className="mt-10 flex flex-col items-center rounded-3xl border border-dashed border-piel-navy/15 bg-piel-offwhite px-8 py-14 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-piel-blue-soft/40 text-piel-navy">
        <Icon className="h-7 w-7" />
      </span>
      <p className="mt-5 max-w-md text-piel-text/70">{message}</p>
    </div>
  );
}
