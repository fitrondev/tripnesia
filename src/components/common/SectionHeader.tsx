import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge_text: string;
  badge_icon: LucideIcon;
  title: string;
  highlight_text?: string;
  description: string;
  className?: string;
};

const SectionHeader = ({
  badge_text,
  badge_icon: BadgeIcon,
  title,
  highlight_text,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center", className)}>
      <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
        <BadgeIcon className="size-4" />
        {badge_text}
      </div>
      <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
        {highlight_text ? (
          <>
            {title}{" "}
            <span className="from-primary bg-gradient-to-r to-cyan-400 bg-clip-text text-transparent">
              {highlight_text}
            </span>
          </>
        ) : (
          title
        )}
      </h2>
      <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed md:text-xl">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
