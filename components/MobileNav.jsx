"use client";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import Link from "next/link";
import Social from "./Social";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-full p-12">
          {/* Logo */}
          <Link href="/" className="mb-24">
            <Image
              src="/footer/logo.svg"
              width={90}
              height={46}
              alt="logo"
              priority
            />
          </Link>
          {/* Nav */}
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />
          {/* sociales */}
          <Social containerStyles="flex gap-x-4 text-black" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
