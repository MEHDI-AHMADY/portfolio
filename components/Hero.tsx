import React from "react";
import { useTranslations } from "next-intl";
import { ImMagicWand } from "react-icons/im";
import Header from "./Header";

const Hero = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="hero-section min-h-96 p-4 text-white">
      <Header />
      <div className="mt-32 px-5">
        <h1 className="text-5xl">
          {t("jobTitle1")} <br />
          {t("jobTitle2")}.
        </h1>

        <div className="flex items-center gap-2 mt-5 ">
          <p>{t("description")}</p>
          <ImMagicWand className="text-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
