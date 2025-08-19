"use client"

import { useState, useRef } from "react"
import ProfileCard from "@/components/ProfileCard"
import SkillsCard from "@/components/SkillsCard"
import ExperienceSection from "@/components/ExperienceSection"
import ProjectsSection from "@/components/ProjectsSection"
import portfolioData from "@/data/portfolio-data.json"

export default function Portfolio() {
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
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-8 flex-1 flex flex-col lg:flex-row gap-8 overflow-hidden">
        {/* Left Sidebar - Profile & Skills (with independent scroll) */}
        <div className="lg:w-1/3 lg:flex-shrink-0 h-full">
          <div className="sticky top-0 space-y-6 max-h-full overflow-y-auto hide-scrollbar pr-2">
            <ProfileCard profile={portfolioData.profile} />

            {/* Resume Type Tabs - Moved out of SkillsCard, no heading, no card */}
            <div className="flex space-x-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
              {portfolioData.resumes.map((resume) => (
                <button
                  key={resume.id}
                  onClick={() => setSelectedResumeId(resume.id)}
                  className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    selectedResumeId === resume.id
                      ? "bg-slate-800 text-white" // Active state similar to main tabs
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50" // Inactive state similar to main tabs
                  }`}
                >
                  {resume.title}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-400 px-2">
              {portfolioData.resumes.find((r) => r.id === selectedResumeId)?.description}
            </p>

            <SkillsCard skills={currentSkills} onDownloadResume={handleDownloadResume} />
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:flex-1 h-full overflow-y-auto hide-scrollbar" ref={mainContentRef}>
          {/* Tab Navigation - Now sticky within this scrollable div */}
          <div className="sticky top-0 z-40 bg-slate-950 pb-4">
            <div className="flex space-x-1 bg-slate-900 p-0.5 rounded-lg">
              {[
                { id: "experience", label: "Experience", icon: "💼" },
                { id: "projects", label: "Personal Projects", icon: "🚀" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-slate-800 text-white"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Sections */}
          <div id="experience" className={activeTab === "experience" ? "block" : "hidden"}>
            <ExperienceSection experiences={portfolioData.experiences} />
          </div>

          <div id="projects" className={activeTab === "projects" ? "block" : "hidden"}>
            <ProjectsSection projects={portfolioData.personalProjects} />
          </div>
        </div>
      </div>
    </div>
  )
}
