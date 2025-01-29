"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const sections = [heroRef , aboutRef];
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
    <>
      <Hero sectionRef={heroRef} sections={{ about : aboutRef}} />
      <About sectionRef={aboutRef} />
    </>
  );
}
