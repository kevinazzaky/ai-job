import Hero from "@/src/components/sections/Hero";
import Intro from "@/src/components/sections/Intro";
import JobExplorer from "@/src/components/jobs/JobExplorer";
import SkillsSection from "@/src/components/sections/SkillsSection";
import HumanAI from "@/src/components/sections/HumanAI";
import FinalCTA from "@/src/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <JobExplorer />
      <SkillsSection />
      <HumanAI />
      <FinalCTA />
    </>
  );
}
