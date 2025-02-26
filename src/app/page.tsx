"use client";

import HeroSection from "@/components/section/hero";
import AboutMe from "@/components/section/about";
import Carousel from "@/components/section/carousel";
import ExperienceSection from "@/components/section/experience";
import ProjectsSection from "@/components/section/projects";
import ConnectSection from "@/components/section/connect";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HeroSection />
        <AboutMe />
        <Carousel />
        <ExperienceSection />
        <ProjectsSection />
        <ConnectSection />
        
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
            className="flex items-center justify-center hover:text-secondary-lightBlue text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://github.com/wilo0510/My-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed & built by Wilmer Pachon
          </a>
      </footer>
    </div>
  );
}
