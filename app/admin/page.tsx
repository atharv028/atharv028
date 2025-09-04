"use client"

import { useState, useRef, useEffect } from "react"
import ProfileCard from "@/components/ProfileCard"
import { Skills } from "@/components/SkillsCard"
import { Experience } from "@/components/ExperienceSection"
import { PersonalProjects } from "@/components/PersonalProjects"
import ProjectsSection from "@/components/ProjectsSection"
import VisitCounter from "@/components/VisitCounter"
import VisitAnalytics from "@/components/VisitAnalytics"
import { ThemeToggle } from "@/components/ThemeToggle"
import portfolioData from "@/data/portfolio-data.json"

export default function AdminPortfolio() {
  const [activeTab, setActiveTab] = useState("experience")
  const [selectedResumeId, setSelectedResumeId] = useState("backend")
  const mainContentRef = useRef<HTMLDivElement>(null)

  const handleDownloadResume = () => {
    const selectedResume = portfolioData.resumes.find((r) => r.id === selectedResumeId)
    if (selectedResume) {
      console.log(`Downloading ${selectedResume.filename}`)
      // In a real app, this would download the actual file
      window.open(`${selectedResume.filename}`, '_blank')
    }
  }

  const currentSkills =
    portfolioData.resumes.find((r) => r.id === selectedResumeId)?.skills || portfolioData.resumes[0].skills

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-primary/20 px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-lg font-semibold text-foreground">Portfolio Admin Dashboard</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-success/20 px-3 py-1.5 rounded-md border border-success/30">
            <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
            Admin Mode Active
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Main Content with padding for fixed header */}
      <div className="pt-16">
        {/* Profile Section */}
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <ProfileCard profile={portfolioData.profile} />
        </div>

        {/* Resume Type Tabs */}
        <div className="px-4 sm:px-6 max-w-6xl mx-auto mb-8">
          <div className="flex space-x-1 bg-card/80 backdrop-blur-sm p-0.5 rounded-lg border border-primary/20">
            {portfolioData.resumes.map((resume) => (
              <button
                key={resume.id}
                onClick={() => setSelectedResumeId(resume.id)}
                className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  selectedResumeId === resume.id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {resume.title}
              </button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground px-2 mt-2">
            {portfolioData.resumes.find((r) => r.id === selectedResumeId)?.description}
          </p>
        </div>

        {/* Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Personal Projects Section */}
        <PersonalProjects />

        {/* Legacy Projects Section */}
        <div className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Legacy <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
              Additional projects and personal initiatives showcasing technical skills and creativity
            </p>
          </div>
          <ProjectsSection projects={portfolioData.personalProjects} />
        </div>
      </div>

      {/* Admin Tools - Always visible in admin route */}
      <VisitCounter />
      <VisitAnalytics />
    </div>
  )
}
