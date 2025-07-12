import Link from "next/link";

import { navigation_links } from "@/constants/data";

import { cn } from "@/lib/utils";

type NavLinksProps = {
  className?: string;
  link_className?: string;
  is_scrolled?: boolean;
};

const NavLinks = ({
  className,
  link_className,
  is_scrolled,
}: NavLinksProps) => {
  return (
    <nav className={cn("flex items-center gap-6", className)}>
      <Link
        href={"/"}
        className={cn(
          "group relative transition-colors duration-200 hover:text-blue-400 lg:hidden",
          link_className
        )}
      >
        Login
        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {navigation_links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "group relative transition-colors duration-200 hover:text-blue-400",
            is_scrolled ? "text-foreground" : "text-white",
            link_className
          )}
        >
          {link.name}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
