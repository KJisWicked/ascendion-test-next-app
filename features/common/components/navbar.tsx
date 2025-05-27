"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { navLinks } from "@/constants/navlinks";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";

type NavBarProps = {
  openNav: () => void;
};

const Navbar = ({ openNav }: NavBarProps) => {
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={cn(
        `bg-neutral-950 ${navBackground ? "opacity-95" : "fixed"} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`
      )}
    >
      <div
        className={cn(
          "flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto"
        )}
      >
        {/* LOGO */}
        <div className={cn("flex items-center space-x-3")}>
          <div
            className={cn(
              "w-16 h-16 bg-rose-500 rounded-full flex items-center justify-center flex-col"
            )}
          >
            <Image
              src="/images/jfj-logo.png"
              width={80}
              height={70}
              alt="logo"
            />
          </div>
          <h1
            className={cn("text-xl md:text-2xl text-white uppercase font-bold")}
          >
            锦飞锦
          </h1>
        </div>
        {/* Navlinks */}
        <div className={cn("flex flex-row space-x-10")}>
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
          {/* Buttons */}
          <div className={cn("flex items-center space-x-4")}>
            <Button
              className={cn(
                "md:x-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200"
              )}
            >
              Order Now
            </Button>
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
