import { useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const t = useTranslations("Common");

  return <div>{t("orderNow")}</div>;
};

export default Hero;
