"use client"

import { Hero } from "@/components/Hero";
import { Skills } from "@/components/SkillsCard";
import { Experience } from "@/components/ExperienceSection";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";
import { usePageAnalytics } from "@/hooks/useAnalytics";
import { getPageSEOContent } from "@/lib/seo";

const Index = () => {
  // Track page-level analytics with SEO-optimized page name
  usePageAnalytics('Full Stack Developer Portfolio - Atharv Tare', '/');

  return (
    <div className="min-h-screen bg-background">
      <ThemeToggle />
      <Hero />
      <Skills />
      <Experience />
      <PersonalProjects />
      <Contact />
    </div>
  );
};

export default Index;
