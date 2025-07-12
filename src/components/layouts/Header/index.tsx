"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import Logo from "@/components/common/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import MobileMenu from "./MobileMenu";
import NavLinks from "./NavLinks";

const Header = () => {
  const [is_scrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 right-0 left-0 z-50 transition-all duration-300 ease-in-out",
        is_scrolled
          ? "text-foreground bg-white shadow-lg backdrop-blur-md"
          : "bg-transparent text-white"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden lg:block">
          <NavLinks is_scrolled={is_scrolled} />
        </div>

        <div className="flex items-center gap-4">
          {is_scrolled ? (
            <Button size={"lg"} className={cn("hidden lg:flex")} asChild>
              <Link href={"/"}>Buat Akun</Link>
            </Button>
          ) : (
            <Button
              variant={"outline"}
              size={"lg"}
              className={cn("hidden bg-transparent duration-300 lg:flex")}
              asChild
            >
              <Link href={"/"}>Buat Akun</Link>
            </Button>
          )}

          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
export default Header;
