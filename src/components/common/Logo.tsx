import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  text_className?: string;
};

const Logo = ({ className, text_className }: LogoProps) => {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex items-center gap-2 transition-opacity hover:opacity-80",
        className
      )}
    >
      <Image
        src={"/assets/svg/logo.svg"}
        alt="Logo"
        width={35}
        height={35}
        priority
      />

      <span className="sr-only">Tripnesia</span>
      <span className={cn("text-2xl font-bold", text_className)}>
        Tripnesia
      </span>
    </Link>
  );
};
export default Logo;
