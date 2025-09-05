"use client"

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, TrendingUp, Zap, Shield } from "lucide-react";
import { useAnalytics, useExperienceAnalytics } from "@/hooks/useAnalytics";
import { ANALYTICS_COMPONENTS, ANALYTICS_ACTIONS } from "@/lib/analytics";

const achievements = [
  {
    icon: Users,
    metric: "5M+ Users",
    description: "Built and maintained full-stack applications using Node.js, React, and AWS, supporting over 5M users with robust backend APIs and responsive frontend interfaces."
  },
  {
    icon: TrendingUp,
    metric: "3X Performance",
    description: "Optimized full-stack architecture with Express.js APIs and React frontend, achieving 3X faster load times and 65% improved response latency through efficient caching and code splitting."
  },
  {
    icon: Zap,
    metric: "40% Efficiency",
    description: "Implemented event-driven architecture with Kafka and real-time frontend updates using WebSockets, enhancing system efficiency by 40% and enabling seamless user experiences."
  },
  {
    icon: Shield,
    metric: "99.9% Uptime",
    description: "Deployed scalable applications on AWS with Vercel frontend hosting, achieving 99.9% uptime through comprehensive monitoring, automated deployments, and cloud infrastructure optimization."
  }
];

const projects = [
  {
    title: "Full-Stack Web Application",
    description: "Developed end-to-end web application with React frontend, Node.js backend, and AWS cloud infrastructure supporting millions of users.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    metrics: "5M+ users, 99.9% uptime"
  },
  {
    title: "Cloud-Native Deployment Pipeline", 
    description: "Implemented CI/CD pipeline with Vercel frontend deployment, AWS Amplify, and S3 storage with automated testing and monitoring.",
    technologies: ["Vercel", "AWS Amplify", "S3", "Docker"],
    metrics: "Zero downtime deployments"
  }
];

export const Experience = () => {
  const { componentRef } = useAnalytics(
    ANALYTICS_COMPONENTS.EXPERIENCE,
    'experience_section'
  );
  const { trackAchievementView, trackProjectView } = useExperienceAnalytics();

  const handleAchievementView = (achievement: string, company: string) => {
    trackAchievementView(achievement, company);
  };

  const handleProjectView = (projectName: string, company: string) => {
    trackProjectView(projectName, company);
  };

  return (
    <section ref={componentRef} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Professional <span className="text-gradient">Experience</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
          Full Stack Developer with 3+ years of experience building scalable applications, modern frontend technologies, and cloud deployment expertise
        </p>
      </div>

      {/* Current Role */}
      <Card className="p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Software Development Engineer I | Full Stack Developer
            </h3>
            <div className="flex items-center text-primary font-semibold mb-2">
              <span>Phot.AI</span>
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Dec 2022 - Present</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Delhi, India</span>
              </div>
              <Badge variant="secondary" className="bg-success text-success-foreground w-fit">
                Full-time
              </Badge>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Key Achievements</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-start space-x-3"
                  onMouseEnter={() => handleAchievementView(achievement.metric, 'Phot.AI')}
                >
                  <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-primary mb-1 text-sm sm:text-base">{achievement.metric}</div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Key Projects</h4>
          <div className="space-y-3 sm:space-y-4">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="p-3 sm:p-4 bg-secondary/50 border-secondary"
                onMouseEnter={() => handleProjectView(project.title, 'Phot.AI')}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-3 md:mb-0 flex-1 min-w-0">
                    <h5 className="font-semibold text-foreground mb-1 text-sm sm:text-base">{project.title}</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <div className="text-xs sm:text-sm font-medium text-accent">{project.metrics}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>

      {/* Freelance Role */}
      <Card className="p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Full Stack Developer
            </h3>
            <div className="flex items-center text-primary font-semibold mb-2">
              <span>Forethought India</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground ml-2">
                Freelance
              </Badge>
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Dec 2022 - Mar 2023</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">TypeScript</Badge>
            <Badge variant="outline" className="text-xs">LESS</Badge>
            <Badge variant="outline" className="text-xs">Node.js</Badge>
            <Badge variant="outline" className="text-xs">MongoDB</Badge>
            <Badge variant="outline" className="text-xs">Email Automation</Badge>
            <Badge variant="outline" className="text-xs">Data Extraction</Badge>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Key Achievements</h4>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Developed custom email solution for automating and extracting data, handling full project lifecycle from design to deployment.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Designed responsive UI with intuitive forms and dashboard for seamless data input and visualization.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Built scalable backend using Node.js and MongoDB, capable of handling large amounts of data with reliable service delivery.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Integrated various APIs for seamless data extraction and automated email processing workflows.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Collaborated closely with client throughout development process, ensuring requirements alignment and successful delivery.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Deployed production-ready solution with optimized performance and stability on client servers.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Key Projects</h4>
          <div className="space-y-3 sm:space-y-4">
            <Card 
              className="p-3 sm:p-4 bg-secondary/50 border-secondary"
              onMouseEnter={() => handleProjectView("Custom Email Automation Platform", "Forethought India")}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-3 md:mb-0 flex-1 min-w-0">
                  <h5 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Custom Email Automation Platform</h5>
                  <p className="text-xs sm:text-sm text-muted-foreground mb-2">Full-stack email solution with automated data extraction, responsive dashboard, and API integrations.</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    <Badge variant="outline" className="text-xs">TypeScript</Badge>
                    <Badge variant="outline" className="text-xs">LESS</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                    <Badge variant="outline" className="text-xs">MongoDB</Badge>
                  </div>
                </div>
                <div className="text-left md:text-right mt-2 md:mt-0">
                  <div className="text-xs sm:text-sm font-medium text-accent">Streamlined client operations</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Card>

      <Card className="p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              SDE-1 (Intern)
            </h3>
            <div className="flex items-center text-primary font-semibold mb-2">
              <span>Appyhigh Technologies</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground ml-2">
                Internship
              </Badge>
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Mar 2022 - Dec 2022</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">Android</Badge>
            <Badge variant="outline" className="text-xs">Kotlin</Badge>
            <Badge variant="outline" className="text-xs">RxJava</Badge>
            <Badge variant="outline" className="text-xs">SQLite</Badge>
            <Badge variant="outline" className="text-xs">Firebase</Badge>
            <Badge variant="outline" className="text-xs">Firestore</Badge>
          </div>
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Key Achievements</h4>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Refactored legacy Android codebases, introducing MVVM architecture and Dependency Injection to improve maintainability and scalability.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Developed and integrated unit and instrumentation tests, increasing code coverage and reliability for production releases.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Enhanced debugging workflows and automated build processes, reducing release cycle time and improving team productivity.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Collaborated with senior engineers to migrate critical features to modern Android APIs, resulting in improved app performance and stability.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Contributed to feature development and bug fixes for live applications, supporting successful production deployments.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Previous Role */}
      <Card className="p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 sm:mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
              Android Developer (Intern)
            </h3>
            <div className="flex items-center text-primary font-semibold mb-2">
              <span>IBDTD Technologies</span>
              <Badge variant="secondary" className="bg-accent text-accent-foreground ml-2">
                Internship
              </Badge>
            </div>
            <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Oct 2021 - Mar 2022</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span>Remote</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Technologies Used</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">Android</Badge>
            <Badge variant="outline" className="text-xs">Kotlin</Badge>
            <Badge variant="outline" className="text-xs">RxJava</Badge>
            <Badge variant="outline" className="text-xs">SQLite</Badge>
          </div>
        </div>

        <div>
          <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Key Achievements</h4>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Refactored legacy codebases and implemented modern architectural practices such as MVVM and Dependency In-jection.
             </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="p-1 bg-gradient-primary rounded-full flex-shrink-0 mt-1">
                <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
               Wrote tests, improved debugging processes, and contributed to production releases. 
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};
