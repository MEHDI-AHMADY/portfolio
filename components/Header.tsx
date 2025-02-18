"use client";

import { Link } from "@/i18n/routing";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { useSections } from "@/context/SectionRefsContext";

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const { sections } = useSections();

  const style = locale === "en" ? "text-white" : "text-primary";

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="p-5 flex items-center justify-between">
      <nav>
        <ul className={`flex items-center gap-6 ${style}`}>
          <li className="nav-item">
            <button
              onClick={() => scrollToSection(sections[1])}
              className="outline-none"
            >
              {t("about")}
            </button>
          </li>
          <li className="nav-item">
            <button
              className="outline-none"
              onClick={() => scrollToSection(sections[2])}
            >
              {t("projects")}
            </button>
          </li>
        </ul>
      </nav>
      <LocaleSwitcher />
    </header>
  );
};

export default Header;
