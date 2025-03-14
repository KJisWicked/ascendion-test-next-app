"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Hero from "@/features/home/components/hero";

const HomePage = () => {
  const t = useTranslations("HomePage");

  return (
    <div className={cn("flex flex-col min-h-screen mx-56 pt-32")}>
      <main className="flex-grow p-4">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <p>Your dynamic content goes here.</p>
        <Hero />
      </main>
    </div>
  );
};

export default HomePage;
