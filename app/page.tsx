import Hero from "@/src/components/sections/Hero";
import Intro from "@/src/components/sections/Intro";
import JobExplorer from "@/src/components/jobs/JobExplorer";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <JobExplorer />
      <section id="skills" className="py-20" />
      <section id="human-ai" className="py-20" />
    </>
  );
}
