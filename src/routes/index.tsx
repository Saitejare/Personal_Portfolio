import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProjectsSection } from "@/components/sections/projects";
import { JourneySection } from "@/components/sections/journey";
import { SkillsSection } from "@/components/sections/skills";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";

const title = "Kurapati Sai Teja — AI/ML Engineer & SAP ABAP Backend Developer";
const description =
  "Portfolio of Kurapati Sai Teja: AI and machine learning projects, a RAG question answering system, the Zora voice assistant, sales intelligence, and SAP + AI exploration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <JourneySection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </>
  );
}
