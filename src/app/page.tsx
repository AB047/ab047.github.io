import { Metadata } from "next";
import AboutMe from "./components/home/about-me";
import HeroSection from "./components/home/hero";
import Experience from "./components/home/experience";
import Expertise from "./components/home/expertise";
import Achievements from "./components/home/achievements";
import Projects from "./components/home/projects";
import Collaborate from "./components/home/solution";
import Insight from "./components/home/insight";
import TechIcon from "./components/home/techIcons";
import TechStack from "./components/home/tech-stacks";

export const metadata: Metadata = {
    title: "Atul Bharadwaj - Portfolio",
};


export default function Home() {
  return (
    <main>
      {/* ---------------------Hero section Starts-----------------  */}
      <HeroSection />
      {/* ---------------------Hero section Ends-----------------  */}

      {/* ---------------------Tech Icons section Starts-----------------  */}
      <TechIcon />
      {/* ---------------------Tech Icons section Ends-----------------  */}

      {/* ---------------------About Me section Starts-----------------  */}
      <AboutMe />
      {/* ---------------------About Me section Ends-----------------  */}

      {/* ---------------------Experience & Education section Starts-----------------  */}
      <Experience />
      {/* ---------------------Experience & Education section Ends-----------------  */}

      {/* ---------------------Expertise section Starts-----------------  */}
      <Expertise />
      {/* ---------------------Expertise section Ends-----------------  */}

      {/* ---------------------Tech Stack section Starts-----------------  */}
      <TechStack />
      {/* ---------------------Tech Stack section Ends-----------------  */}

      {/* ---------------------Projects section Starts-----------------  */}
      <Projects />
      {/* ---------------------Projects section Ends-----------------  */}

      {/* ---------------------Certifications & Honors section Starts-----------------  */}
      <Achievements />
      {/* ---------------------Certifications & Honors section Ends-----------------  */}

      {/* ---------------------Insight section Starts-----------------  */}
      <Insight />
      {/* ---------------------Insight section Ends-----------------  */}

      {/* ---------------------Connect section Starts-----------------  */}
      <Collaborate />
      {/* ---------------------Connect section Ends-----------------  */}
    </main>
  )
}
