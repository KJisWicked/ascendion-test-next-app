import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramSvgIcon from "@/components/icons/instagram";
import WhatsappSvgIcon from "@/components/icons/whatsapp";
import LinkedInSvgIcon from "@/components/icons/linkedin";
import TiktokSvgIcon from "@/components/icons/tiktok";
import YoutubeSvgIcon from "@/components/icons/youtube";
import FacebookSvgIcon from "@/components/icons/facebook";

const Footer = () => {
  return (
    <div className={cn("pt-16 pb-16 bg-neutral-950 text-white")}>
      <div
        className={cn(
          "w-full mx-auto flex flex-col sm:flex-row justify-center gap-28"
        )}
      >
        {/* 1st Part */}
        <div className={cn("flex flex-col space-y-2 items-center")}>
          <div
            className={cn(
              "w-36 h-36 bg-rose-500 rounded-full flex items-center justify-center flex-col"
            )}
          >
            <Image
              src="/images/jfj-logo.png"
              width={180}
              height={170}
              alt="logo"
            />
          </div>
          <div className={cn("flex flex-col space-y-1.5 items-center")}>
            <h1
              className={cn(
                "text-xl md:text-2xl text-white uppercase font-bold"
              )}
            >
              锦飞锦
            </h1>
            <div className="w-24 h-[2px] bg-white opacity-50"></div>
            <h1 className="text-sm">est. 2024</h1>
          </div>
        </div>
        {/* 2nd Part */}
        <div className={cn("flex flex-col space-y-3 items-center")}>
          <p
            className={cn(
              "text-gray-800 font-medium cursor-pointer text-s hover:text-blue-950"
            )}
          >
            Home
          </p>
          <p
            className={cn(
              "text-gray-800 font-medium cursor-pointer text-s hover:text-blue-950"
            )}
          >
            Track Order
          </p>
        </div>
        {/* 3rd Part */}
        <div className="flex flex-col justify-evenly items-center space-y-10 sm:space-y-5">
          <div className={cn("flex flex-col space-y-3 items-center")}>
            <h1 className={cn("text-lg font-bold")}>Our Socials</h1>
            <div className={cn("flex flex-row gap-2 items-center")}>
              <Link href="#" target="_blank">
                <InstagramSvgIcon className={cn("w-9 h-9")} />
              </Link>
              <Link href="#" target="_blank">
                <FacebookSvgIcon className={cn("w-9 h-9")} />
              </Link>
              <Link href="#" target="_blank">
                <WhatsappSvgIcon className={cn("w-9 h-9")} />
              </Link>
              <Link href="#" target="_blank">
                <LinkedInSvgIcon className={cn("w-8 h-8")} />
              </Link>
              <Link href="#" target="_blank">
                <TiktokSvgIcon className={cn("w-8 h-8")} />
              </Link>
              <Link href="#" target="_blank">
                <YoutubeSvgIcon className={cn("w-11 h-11")} />
              </Link>
            </div>
          </div>
          <div className={cn("flex flex-col space-y-2 items-center")}>
            <h1 className={cn("text-sm")}>
              &copy; 2025 锦飞锦 - All Rights Reserved
            </h1>
            <h1 className={cn("text-sm")}>Site by Techkadia</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
