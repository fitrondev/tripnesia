import { AlignJustify } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import NavLinks from "./NavLinks";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <AlignJustify className="size-6" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="hidden">
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>

        <NavLinks
          className="size-full flex-col items-center justify-center"
          link_className="text-foreground text-2xl font-semibold "
        />
      </SheetContent>
    </Sheet>
  );
};
export default MobileMenu;
