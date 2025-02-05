"use client";

import { useSections } from "@/context/SectionRefsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AboutImage from '@/public/assets/images/about.jpg';

const About = () => {
  const { aboutRef } = useSections();
  const t = useTranslations("AboutSection");

  return (
    <section ref={aboutRef} className="h-screen px-5 py-2 flex items-center justify-center">

      <div className="grid lg:grid-cols-2 justify-between items-center w-full">
        <div className="text-shadow text-primary/80 mt-10 max-w-96">
          {t("description")}
        </div>

        <div className="relative w-full lg:min-h-[500px]">
          <Image src={AboutImage} fill alt="aboutImage"/>
        </div>
      </div>
    </section>
  );
};

export default About;
