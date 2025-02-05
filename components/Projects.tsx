"use client";

import { useSections } from "@/context/SectionRefsContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  image: string;
}

const Projects = () => {
  const { projectsRef } = useSections();
  const t = useTranslations("ProjectsSection");

  const dashboardTechArray = Object.values(t.raw("Dashboard.tech")) as string[];
  const landingTechArray = Object.values(t.raw("LandingPage.tech")) as string[];
  const imdbCloneTechArray = Object.values(t.raw("IMdbClone.tech")) as string[];
  const numberPuzzleTechArray = Object.values(t.raw("NumberPuzzle.tech")) as string[];
  const persianDashboardTechArray = Object.values(t.raw("PersianDashboard.tech")) as string[];

  const projects: Project[] = [
    {
      id: 1,
      title: t("Dashboard.title"),
      description: t("Dashboard.description"),
      tech: dashboardTechArray,
      github: t("Dashboard.github"),
      image: t("Dashboard.image"),
    },
    {
      id: 2,
      title: t("LandingPage.title"),
      description: t("LandingPage.description"),
      tech: landingTechArray,
      github: t("LandingPage.github"),
      image: t("LandingPage.image"),
    },
    {
      id: 3,
      title: t("IMdbClone.title"),
      description: t("IMdbClone.description"),
      tech: imdbCloneTechArray,
      github: t("IMdbClone.github"),
      image: t("IMdbClone.image"),
    },
    {
      id: 4,
      title: t("NumberPuzzle.title"),
      description: t("NumberPuzzle.description"),
      tech: numberPuzzleTechArray,
      github: t("NumberPuzzle.github"),
      image: t("NumberPuzzle.image"),
    },
    {
      id: 5,
      title: t("PersianDashboard.title"),
      description: t("PersianDashboard.description"),
      tech: persianDashboardTechArray,
      github: t("PersianDashboard.github"),
      image: t("PersianDashboard.image"),
    },
    {
      id: 6,
      title: t("Ticketing.title"),
      description: t("Ticketing.description"),
      tech: persianDashboardTechArray,
      github: t("Ticketing.github"),
      image: t("Ticketing.image"),
    },
  ];

  return (
    <section ref={projectsRef} className="h-screen p-5">
      <h2 className="text-2xl my-4 inline-block bg-secondary p-1 rounded-sm">
        {t("Projects")}
      </h2>
      <div className="grid grid-cols-3 gap-4">
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
                  <div key={index}>{item},</div>
                ))}
              </div>

                <Link href={project.github} className="bg-primary/10 px-1 rounded-md">{t("GithubAddress")}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
