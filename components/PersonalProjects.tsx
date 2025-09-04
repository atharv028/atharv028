"use client"

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  Zap, 
  Code2,
  ExternalLink
} from "lucide-react";

const personalProjects = [
  {
    title: "Media-Centric Booking System",
    status: "Completed",
    statusIcon: CheckCircle,
    statusColor: "bg-blue-500",
    description: "Developed RESTful APIs for a movie booking platform with advanced reporting, analytics, and real-time reservation tracking. Integrated role-based authentication and JWT for secure access.",
    technologies: ["GoLang", "Gin", "PostgreSQL", "JWT", "GORM"],
    githubUrl: "#"
  },
  {
    title: "Cross-DB Backup Tool",
    status: "Completed",
    statusIcon: CheckCircle,
    statusColor: "bg-blue-500",
    description: "Built CLI tools for backup and restore operations across MongoDB, PostgreSQL, and SQLite databases. Automated Slack notifications for backup status and integrated S3 for cloud storage.",
    technologies: ["Python", "SQL", "NoSQL", "S3", "Slack"],
    githubUrl: "#"
  },
  {
    title: "Real-Time Chat API",
    status: "Active",
    statusIcon: Zap,
    statusColor: "bg-green-500",
    description: "Developed a scalable chat API using Node.js, Express.js, and MongoDB, supporting real-time messaging for thousands of concurrent users.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Docker"],
    githubUrl: "#"
  },
  {
    title: "Event-Driven Notification Service",
    status: "Active",
    statusIcon: Zap,
    statusColor: "bg-green-500",
    description: "Built a notification microservice using Go and Kafka, enabling real-time alerts and updates for user activities.",
    technologies: ["Golang", "Kafka", "MongoDB", "Docker"],
    githubUrl: "#"
  },
  {
    title: "API Monitoring Dashboard",
    status: "Completed",
    statusIcon: CheckCircle,
    statusColor: "bg-blue-500",
    description: "Implemented a dashboard for monitoring API health and performance using Prometheus and Signoz.",
    technologies: ["Node.js", "Prometheus", "Signoz", "React"],
    githubUrl: "#"
  }
];

const ProjectCard = ({ project }: { project: typeof personalProjects[0] }) => {
  const StatusIcon = project.statusIcon;
  
  return (
    <Card className="p-4 sm:p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:glow-primary">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <Badge 
          variant="secondary" 
          className={`${project.statusColor} text-white flex items-center gap-1 text-xs`}
        >
          <StatusIcon className="w-3 h-3" />
          {project.status}
        </Badge>
      </div>
      
      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
        {project.technologies.map((tech) => (
          <Badge 
            key={tech} 
            variant="outline" 
            className="text-xs hover:bg-primary/10 hover:border-primary/40 transition-colors cursor-pointer"
          >
            {tech}
          </Badge>
        ))}
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="w-full sm:w-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
        onClick={() => window.open(project.githubUrl, '_blank')}
      >
        <Code2 className="w-4 h-4 mr-2" />
        Code
        <ExternalLink className="w-3 h-3 ml-2" />
      </Button>
    </Card>
  );
};

export const PersonalProjects = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Personal <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
          Side projects and personal initiatives showcasing technical skills and creativity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {personalProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
