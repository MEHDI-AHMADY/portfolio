"use client";

import { useSections } from "@/context/SectionRefsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiAxios,
  SiReactquery,
  SiTypescript,
  SiReacthookform,
  SiShadcnui,
  SiMui,
  SiReactrouter,
  SiNextdotjs,
  SiPrisma,
  SiZod
} from "react-icons/si";
interface Project {
  id: number;
  title: string;
  description: string;
  tech: React.ReactNode[];
  github: string;
  image: string;
}

const Projects = () => {
  const { projectsRef } = useSections();
  const t = useTranslations("ProjectsSection");

  const projects: Project[] = [
    {
      id: 1,
      title: t("Dashboard.title"),
      description: t("Dashboard.description"),
      tech: [<SiReact />, <SiMui />, <SiTailwindcss />, <SiReactrouter />],
      github: t("Dashboard.github"),
      image: t("Dashboard.image"),
    },
    {
      id: 2,
      title: t("LandingPage.title"),
      description: t("LandingPage.description"),
      tech: [<SiNextdotjs />, <SiFramer />, <SiTailwindcss />],
      github: t("LandingPage.github"),
      image: t("LandingPage.image"),
    },
    {
      id: 3,
      title: t("IMdbClone.title"),
      description: t("IMdbClone.description"),
      tech: [<SiNextdotjs />, <SiAxios />, <SiFramer />],
      github: t("IMdbClone.github"),
      image: t("IMdbClone.image"),
    },
    {
      id: 4,
      title: t("NumberPuzzle.title"),
      description: t("NumberPuzzle.description"),
      tech: [<SiReact />, <SiTailwindcss />],
      github: t("NumberPuzzle.github"),
      image: t("NumberPuzzle.image"),
    },
    {
      id: 5,
      title: t("PersianDashboard.title"),
      description: t("PersianDashboard.description"),
      tech: [
        <SiReact />,
        <SiAxios />,
        <SiShadcnui />,
        <SiFramer />,
        <SiTailwindcss />,
        <SiReacthookform />,
        <SiReactrouter />,
      ],
      github: t("PersianDashboard.github"),
      image: t("PersianDashboard.image"),
    },
    {
      id: 6,
      title: t("Ticketing.title"),
      description: t("Ticketing.description"),
      tech: [<SiNextdotjs /> , <SiPrisma /> , <SiZod /> , <SiShadcnui /> , <SiReacthookform /> ],
      github: t("Ticketing.github"),
      image: t("Ticketing.image"),
    },
  ];

  return (
    <section ref={projectsRef} className="lg:min-h-screen px-4 lg:px-20">
      <h2 className="text-2xl mb-4 inline-block p-1 rounded-sm">
        {t("Projects")}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" bg-secondary/50 rounded-md border border-purple-950 hover:scale-105 transition-transform duration-200 cursor-pointer text-slate-800"
          >
            <div className="relative w-full min-h-40">
              <Image
                src={project.image}
                fill
                alt={project.title}
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <p>{project.description}</p>

              <div className="flex gap-1 items-center flex-wrap">
                <span>{t("Tools")} :</span>
                {project.tech.map((item, index) => (
                  <div key={index} className="px-1">{item}</div>
                ))}
              </div>

              <Link
                href={project.github}
                className="bg-primary/10 px-1 rounded-md"
              >
                {t("GithubAddress")}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
