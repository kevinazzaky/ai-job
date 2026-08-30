import Hero from "@/src/components/sections/Hero";
import Intro from "@/src/components/sections/Intro";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <section id="jobs" className="py-20" />
      <section id="skills" className="py-20" />
      <section id="human-ai" className="py-20" />
    </>
  );
}
