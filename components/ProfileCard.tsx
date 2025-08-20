"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import Image from "next/image"

interface ProfileData {
  name: string
  title: string
  titleShort: string
  company: string
  location: string
  email: string
  linkedin: string
  github: string
  bio: string
}

interface ProfileCardProps {
  profile: ProfileData
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const handleContact = () => {
    window.open(`mailto:${profile.email}`, "_blank")
  }

  const handleLinkedIn = () => {
    window.open(profile.linkedin, "_blank")
  }

  const handleGitHub = () => {
    window.open(profile.github, "_blank")
  }

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardContent className="p-6 text-center">
        <div className="relative w-44 h-44 mx-auto mb-4">
          <Image
            src="/me.webp"
            alt={profile.name}
            fill
            className="rounded-full object-cover border-4 border-slate-700"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2 text-white">{profile.name}</h1>
        <p className="text-slate-300 mb-1">{profile.titleShort} @ {profile.company}</p>
        <span className="text-slate-400 text-sm mb-4 flex items-center justify-center">
          <MapPin className="w-4 h-4 mx-1 inline" /> {profile.location}
        </span>

        {/* Contact, LinkedIn, GitHub as icon-only buttons without outlines */}
        <div className="flex space-x-2 justify-center">
          <Button
            variant="ghost"
            className="text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700"
            onClick={handleContact}
            title="Contact"
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </Button>
          <Button
            variant="ghost" // Changed to ghost to remove outline
            size="icon" // Icon-only button
            className="text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={handleLinkedIn}
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost" // Changed to ghost to remove outline
            size="icon" // Icon-only button
            className="text-slate-300 hover:text-white hover:bg-slate-800"
            onClick={handleGitHub}
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
