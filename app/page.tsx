"use client"

import { Hero } from "@/components/Hero";
import { Skills } from "@/components/SkillsCard";
import { Experience } from "@/components/ExperienceSection";
import { PersonalProjects } from "@/components/PersonalProjects";
import { Contact } from "@/components/Contact";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
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
