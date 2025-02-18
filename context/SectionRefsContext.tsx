"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useRef,
} from "react";

type SectionRefs = {
  heroRef: React.RefObject<HTMLElement | null>;
  aboutRef: React.RefObject<HTMLElement | null>;
  projectsRef: React.RefObject<HTMLElement | null>;
  contactMeRef: React.RefObject<HTMLElement | null>;
  sections: React.RefObject<HTMLElement | null>[];
};

export const SectionsContext = createContext<SectionRefs | null>(null);

export const SectionContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactMeRef = useRef<HTMLElement | null>(null);

  const sections = [heroRef, aboutRef, projectsRef, contactMeRef];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentSectionIndex = sections.findIndex((ref) => {
        const rect = ref.current?.getBoundingClientRect();
        return rect && rect.top >= 0 && rect.bottom <= window.innerHeight;
      });

      if (
        event.key === "ArrowDown" &&
        currentSectionIndex < sections.length - 1
      ) {
        sections[currentSectionIndex + 1].current?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (event.key === "ArrowUp" && currentSectionIndex > 0) {
        sections[currentSectionIndex - 1].current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <SectionsContext.Provider
      value={{ heroRef, aboutRef, projectsRef, contactMeRef, sections }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

export const useSections = () => {
  const context = useContext(SectionsContext);
  if (!context) {
    throw new Error("useSections must be used within a SectionContextProvider");
  }
  return context;
};
