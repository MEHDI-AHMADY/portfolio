import { Link } from "@/i18n/routing";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "./LocaleSwitcher";
import { HeroProps } from "./Hero";

type HeaderProps = Pick<HeroProps, "sections">;

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const t = useTranslations("Header");
  const locale = useLocale();

  const style = locale === "en" ? "text-white" : "text-primary";
  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="p-5 flex items-center justify-between">
      <nav>
        <ul className={`flex items-center gap-6 ${style}`}>
          <li className="nav-item">
            <button onClick={() => scrollToSection(sections.about)} className="outline-none">
              {t("about")}
            </button>
          </li>
          <li className="nav-item">
            <Link href="#resume">{t("resume")}</Link>
          </li>
          <li className="nav-item">
            <Link href="#projects">{t("projects")}</Link>
          </li>
          <li className="nav-item">
            <Link href="#github">{t("github")}</Link>
          </li>
        </ul>
      </nav>
      <LocaleSwitcher />
    </header>
  );
};

export default Header;
