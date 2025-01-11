import { Link } from "@/i18n/routing";
import React from "react";
import { useTranslations } from "next-intl";
import { CgFormatJustify } from "react-icons/cg";

const Header = () => {
  const t = useTranslations();

  return (
    <header className="flex items-center justify-between">
      <Link href="/">
        {t("Header.Mehdi")}
      </Link>

        <nav>
            <ul>
                <li>
                    <Link href="/about"></Link>
                </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
