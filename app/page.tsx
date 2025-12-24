import AboutPreview from "./components/AboutPreview";
import CTA from "./components/CTA";
import ExperiencePreview from "./components/ExperiencePreview";
import FeaturedProjects from "./components/FeaturedProjects";
import Hero from "./components/Hero";
import SkillsPreview from "./components/SkillsPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsPreview />
      <FeaturedProjects />
      <ExperiencePreview />
      <CTA />
    </>
  );
}
