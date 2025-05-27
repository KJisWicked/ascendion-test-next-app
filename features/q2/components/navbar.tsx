"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import { AlignJustify } from "lucide-react";
import { Input } from "@/components/ui/input";

type NavBarProps = {
  openNav: () => void;
};

const Navbar = ({ openNav }: NavBarProps) => {
  return (
    <div
      className={cn(
        `bg-neutral-950 transition-all duration-200 h-[12vh] z-[1000] fixed w-full`
      )}
    >
      <div
        className={cn(
          "flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto space-x-10"
        )}
      >
        {/* Navbar Title and Navlinks */}
        <div className={cn("flex flex-row space-x-10 pl-5 lg:pl-0")}>
          <div className={cn("flex items-center")}>
            <h1
              className={cn(
                "text-xl md:text-2xl text-white uppercase font-bold"
              )}
            >
              AEON
            </h1>
          </div>
          <div className={cn("hidden lg:flex items-center space-x-10")}>
            {navLinks.map((link) => {
              const { id, url, label } = link;
              return (
                <Link href={url} key={id}>
                  <p
                    className={cn(
                      "relative text-white text-base font-medium w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ae2b2f] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-right"
                    )}
                  >
                    {label}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Search Bar */}
        <div className={cn("flex items-center space-x-4")}>
          <div className={cn("hidden lg:flex lg:w-60")}>
            <Input placeholder="Search Documentation..." />
          </div>
          <div className="pr-3">
            <AlignJustify
              className={cn("w-8 h-8 cursor-pointer text-white lg:hidden")}
              onClick={openNav}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
