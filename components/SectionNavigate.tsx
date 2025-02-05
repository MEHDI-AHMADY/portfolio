"use client";

import { useSections } from "@/context/SectionRefsContext";
import { useEffect, useState } from "react";
import { PiBaseballFill } from "react-icons/pi";
import { PiBaseballDuotone } from "react-icons/pi";

const SectionNavigate = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState<number | null>(
    null
  );
  const { sections } = useSections();

  const scrollToSection = (sectionRef: React.RefObject<HTMLElement | null>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const updateCurrentSection = () => {
      const visibleSectionIndex = sections.findIndex((ref) => {
        const rect = ref.current?.getBoundingClientRect();
        return rect && rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      if (visibleSectionIndex !== -1) {
        setCurrentSectionIndex(visibleSectionIndex);
      }
    };

    updateCurrentSection();

    const handleScroll = () => {
      updateCurrentSection();
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed bottom-20 end-10">
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <button onClick={() => scrollToSection(section)} className="outline-none hover:scale-110">
              {currentSectionIndex === index ? (
                <PiBaseballFill className="w-5 h-5" />
              ) : (
                <PiBaseballDuotone className="w-5 h-5" />
              )}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SectionNavigate;
