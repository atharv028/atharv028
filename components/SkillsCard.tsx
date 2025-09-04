"use client"

import { Card } from "@/components/ui/card";
import { 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  MessageSquare, 
  BarChart3, 
  Monitor,
  Zap,
  Server,
  Globe
} from "lucide-react";
import { 
  SiNodedotjs,
  SiGo,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiVite,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiVercel,
  SiDocker,
  SiKubernetes,
  SiApachekafka,
  SiGraphql,
  SiPrometheus,
  SiGit,
  SiAndroid,
  SiKotlin,
  SiSqlite
} from "react-icons/si";

const RedisIcon = () => {
  return (
    <img src="/redis.svg" alt="Redis" className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
  );
};


const skillCategories = [
  {
    icon: Server,
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Golang", icon: SiGo },
      { name: "Express.js", icon: SiExpress },
      { name: "Gin", icon: SiGo },
      { name: "Echo", icon: SiGo },
      { name: "Fiber", icon: SiGo }
    ]
  },
  {
    icon: Monitor,
    title: "Frontend Technologies",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: RedisIcon }
    ]
  },
  {
    icon: Monitor,
    title: "Mobile Development",
    skills: [
      { name: "Android", icon: SiAndroid },
      { name: "Kotlin", icon: SiKotlin },
      { name: "RxJava", icon: SiKotlin },
      { name: "SQLite", icon: SiSqlite }
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    skills: [
      { name: "AWS", icon: SiAmazon },
      { name: "Vercel", icon: SiVercel },
      { name: "AWS Amplify", icon: SiAmazon },
      { name: "AWS S3", icon: SiAmazon },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes }
    ]
  },
  {
    icon: MessageSquare,
    title: "Messaging & APIs",
    skills: [
      { name: "Kafka", icon: SiApachekafka },
      { name: "REST APIs", icon: MessageSquare },
      { name: "GraphQL", icon: SiGraphql },
      { name: "WebSockets", icon: MessageSquare }
    ]
  },
  {
    icon: BarChart3,
    title: "Monitoring & Tools",
    skills: [
      { name: "Prometheus", icon: SiPrometheus },
      { name: "Signoz", icon: BarChart3 },
      { name: "Git", icon: SiGit },
      { name: "ArgoCD", icon: BarChart3 }
    ]
  }
];

export const Skills = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Technical <span className="text-gradient">Expertise</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
          Full-stack development skills with backend focus, modern frontend technologies, and cloud deployment expertise
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Card 
              key={category.title} 
              className="p-4 sm:p-6 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:glow-primary"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4 sm:mb-5">
                <div className="p-2 bg-gradient-primary rounded-lg mr-3 group-hover:animate-pulse flex-shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={skill.name} className="flex items-center space-x-2 p-2 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                      <IconComponent 
                        className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm text-foreground font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
