"use client";

import { useSections } from "@/context/SectionRefsContext";
import { contactInfo } from "@/lib/data";
import { useTranslations } from "next-intl";
import { FaLinkedin, FaTelegram } from "react-icons/fa";

const ContactMe = () => {
  const { contactMeRef } = useSections();
  const t = useTranslations("ContactMeSection");

  const contactLinks = [
    {
      label: t("email"),
      value: contactInfo.email,
      action: () =>
        window.open(
          `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`,
          "_blank"
        ),
    },
    {
      label: t("phone"),
      value: contactInfo.phone,
      action: () => (window.location.href = `tel:${contactInfo.phone}`),
    },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: contactInfo.linkedin },
    { icon: <FaTelegram />, url: contactInfo.telegram },
  ];

  return (
    <section
      ref={contactMeRef}
      className="min-h-screen bg-secondary p-4 text-slate-600"
    >
      <h2 className="mb-10">{t("contactMe")}</h2>
      <h3 className="mb-10">{t("text")}</h3>

      <div className="flex items-center">
        <form className="flex flex-col gap-4 border-x-2 border-black p-2 rounded-md">
          {contactLinks.map(({ label, value, action }) => (
            <div key={label}>
              <label>{label}: </label>
              <input
                className="px-1 bg-transparent cursor-pointer outline-none"
                type="text"
                readOnly
                value={value}
                onClick={action}
              />
            </div>
          ))}
          <div className="flex gap-1">
            {socialLinks.map(({ icon, url }, index) => (
              <button
                key={index}
                className="px-1 bg-transparent cursor-pointer outline-none"
                onClick={() => window.open(url, "_blank")}
              >
                {icon}
              </button>
            ))}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
