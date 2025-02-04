"use client";

import { useLocale, useTranslations } from "next-intl";
import { ImMagicWand } from "react-icons/im";
import Header from "./Header";
import Image from "next/image";
import MyImage from "@/assets/images/me.jpg";
import { useSections } from "@/context/SectionRefsContext";

const Hero = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale();
  const { heroRef, sections } = useSections();

  const style = locale === "en" ? "text-white" : "text-primary";

  return (
    <section ref={heroRef} className="shared-bg p-4 text-white lg:min-h-screen">
      <Header />

      <div className="flex items-center justify-between mt-32 px-5">
        <div className={`${style}`}>
          <h1 className="text-5xl text-secondary">
            {t("jobTitle1")} <br />
            {t("jobTitle2")}.
          </h1>

          <div className="flex items-center gap-2 mt-5 ">
            <p className={`${locale === "fa" ? "text-lg" : "text-2xl"}`}>
              {t("description")}
            </p>
            <ImMagicWand className="text-lg" />
          </div>

          <p
            className={`mt-20 max-w-52 ${
              locale === "fa" ? "text-sm" : "text-lg"
            }`}
          >
            {t("description2")}
          </p>
        </div>

        <div
          className={`imageParent relative w-64 h-64 ${
            locale === "fa" ? "xl:left-96" : "xl:right-96"
          }`}
        >
          <Image src={MyImage} fill={true} alt="myImage" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
