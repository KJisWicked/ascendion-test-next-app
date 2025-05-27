import { navLinks } from "@/constants/navlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Hamburger, Search } from "lucide-react";

type NavBarMobileProps = {
  showNav: boolean;
  closeNav: () => void;
};

const NavbarMobile = ({ showNav, closeNav }: NavBarMobileProps) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={cn(
          `fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`
        )}
      ></div>

      {/* Navlinks */}
      <div
        className={cn(
          `text-white ${navOpen} fixed flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-gradient-to-br from-[#0F0F1A] via-[#1A1A2E] to-[#202040] space-y-6 z-[1003]`
        )}
      >
        <div className="flex items-center justify-between py-6 pr-6 pl-12 border-b border-gray-100">
          {/* Logo/Brand */}
          <h1 className="text-2xl font-light text-blue-500 tracking-wide">
            AEON
          </h1>

          {/* Action Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-6 h-6 text-gray-400" />
            <Hamburger className="w-6 h-6 cursor-pointer" onClick={closeNav} />
          </div>
        </div>

        <div className={cn("flex flex-col space-y-6 pt-5")}>
          {navLinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p
                  className={cn(
                    "text-white w-fit text-[20px] ml-12 pb-1 border-white sm:text-[30px]"
                  )}
                >
                  {link.label}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
