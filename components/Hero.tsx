"use client";

import { useLocale, useTranslations } from "next-intl";
import { ImMagicWand } from "react-icons/im";
import Header from "./Header";
import Image from "next/image";
import MyImage from "@/public/assets/images/me.jpg";
import { useSections } from "@/context/SectionRefsContext";

const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const { heroRef } = useSections();

  return (
    <section ref={heroRef} className="md:shared-bg p-4 text-white lg:min-h-screen">
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-between mt-10 px-14 md:mt-32">
        <div className={`hidden md:block ${locale === "en" ? "text-secondary" : "text-primary"}`}>
          <h1 className={`text-5xl ${locale === "en" ? "text-secondary" : "text-primary"}`}>
            {t("jobTitle1")} <br />
            {t("jobTitle2")}.
          </h1>

          <p
            className={`mt-10 md:max-w-36 ${
              locale === "fa" ? "text-lg" : "text-2xl"
            }`}
          >
            {t("description")}
          </p>

          <p
            className={`mt-20 max-w-52 ${
              locale === "fa" ? "text-sm" : "text-lg"
            }`}
          >
            {t("description2")}
        </p>
        </div>
        <div className={`flex items-center justify-center ${
              locale === "fa" ? "xl:left-96" : "xl:right-96"
            }`}>
          <div
            className={`mt-4 imageParent w-52 h-52 rounded-full overflow-hidden relative md:w-64 md:h-64`}
          >
            <Image src={MyImage} fill={true} alt="myImage" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
