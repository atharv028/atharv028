"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, ExternalLink } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { ANALYTICS_COMPONENTS, ANALYTICS_ACTIONS } from "@/lib/analytics";

export const Hero = () => {
  const { componentRef, trackClick, trackDownload, trackConversion } = useAnalytics(
    ANALYTICS_COMPONENTS.HERO,
    'hero_section'
  );

  const scrollToContact = () => {
    trackClick(ANALYTICS_ACTIONS.CLICK, 'contact_button', undefined, {
      action_type: 'scroll_to_contact',
      button_text: 'Contact Me'
    });
    
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleResumeDownload = () => {
    trackDownload('atharv_gen.pdf', 'pdf');
    trackConversion('resume_download', 'hero_resume_download', 1, {
      download_source: 'hero_section',
      file_type: 'pdf'
    });
    window.open("/atharv_gen.pdf", "_blank");
  };
  return (
    <section ref={componentRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>
      
      {/* Animated Elements - Hidden on mobile for better performance */}
      <div className="absolute inset-0 hidden sm:block">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-primary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-accent rounded-full animate-pulse delay-300" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <Badge variant="secondary" className="mb-4 sm:mb-6 bg-card/80 backdrop-blur-sm border border-primary/20 text-xs sm:text-sm">
          <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse" />
          <span className="hidden xs:inline">Available for new opportunities</span>
          <span className="xs:hidden">Available</span>
        </Badge>

        {/* Main Heading */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
          <span className="text-gradient">Atharv Tare</span>
        </h1>
        
        <h2 className="text-lg xs:text-xl sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 px-2">
          Full Stack Developer Portfolio | Software Engineer @ Phot.AI
        </h2>

        {/* Value Proposition */}
        <p className="text-base xs:text-lg sm:text-lg md:text-xl text-foreground/80 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          Experienced <span className="text-primary font-semibold">Full Stack Developer</span> with <span className="text-primary font-semibold">3+ years</span> of expertise 
          building scalable backend systems and modern frontend applications. 
          Specialized in <span className="text-accent font-semibold">Node.js, React, AWS</span> and cloud architecture for high-performance software engineering solutions.
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-primary">5M+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Users Served</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-accent">400K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Monthly Active Users</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-3 sm:p-4">
            <div className="text-xl sm:text-2xl font-bold text-success">99.9%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Uptime Achieved</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
          <Button 
            size="lg" 
            className="group bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary w-full xs:w-auto"
            onClick={scrollToContact}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform" />
            <span className="text-sm sm:text-base">Contact Me</span>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="bg-card/20 backdrop-blur-sm border-primary/30 hover:bg-card/40 w-full xs:w-auto"
            onClick={handleResumeDownload}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="text-sm sm:text-base">Download Resume</span>
          </Button>
          
        </div>

      </div>
    </section>
  );
};
