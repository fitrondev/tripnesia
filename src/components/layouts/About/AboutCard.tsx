import { LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface AboutCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "feature" | "value";
}

const AboutCard = ({
  icon: Icon,
  title,
  description,
  variant = "feature",
}: AboutCardProps) => {
  if (variant === "value") {
    return (
      <Card className="border-0 bg-transparent shadow-none">
        <CardHeader className="text-center">
          <div className="from-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r to-cyan-400">
            <Icon className="size-8 text-white" />
          </div>
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <CardDescription className="leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardHeader>
        <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
          <Icon className="text-primary size-6" />
        </div>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
