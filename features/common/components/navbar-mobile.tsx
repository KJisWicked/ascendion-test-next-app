import { navLinks } from "@/constants/navlinks";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { X } from "lucide-react";

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
          `text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`
        )}
      >
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p
                className={cn(
                  "text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]"
                )}
              >
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* Close Button */}
        <X
          className={cn(
            "absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
          )}
          onClick={closeNav}
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
