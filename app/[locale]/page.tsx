import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionNavigate from "@/components/SectionNavigate";

export default function Home() {

  return (
    <>
      <Hero />
      <About />
      <Projects />
      <SectionNavigate />
      <ContactMe />
    </>
  );
}
