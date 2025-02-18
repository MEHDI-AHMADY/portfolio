"use client";

import { routing, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import React from "react";
import { useTranslations } from "use-intl";

const LocaleSwitcher = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <form className="min-w-20 sm:min-w-40">
      <select
        onChange={(e) => switchLanguage(e.target.value)}
        value={currentLocale}
        className={`w-full min-h-10 px-2 rounded-md focus:outline-none border-none cursor-pointer overflow-hidden ${currentLocale === "en" ? "bg-secondary text-slate-700" : "bg-primary text-white"}`}
      >
        {routing.locales.map((locale) => (
          <option value={locale} key={locale}>
            {t(`Language.${locale}`)}
          </option>
        ))}
      </select>
    </form>
  );
};

export default LocaleSwitcher;
