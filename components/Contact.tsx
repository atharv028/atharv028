"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Download, ExternalLink, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact-section" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
          Ready to build full-stack applications with modern technologies and scalable cloud solutions. 
          Open to new opportunities and exciting challenges.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Contact Info */}
        <Card className="p-4 sm:p-6 md:p-8 bg-card/80 backdrop-blur-sm border-primary/20">
          <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">Get in Touch</h3>
          
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="font-medium text-foreground text-sm sm:text-base">Email</div>
                <div className="text-xs sm:text-sm text-muted-foreground break-all">hire.atharv@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium text-foreground text-sm sm:text-base">Location</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Delhi, India</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-primary rounded-lg flex-shrink-0">
                <Badge className="bg-success text-success-foreground border-0 text-xs">
                  Available
                </Badge>
              </div>
              <div>
                <div className="font-medium text-foreground text-sm sm:text-base">Status</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Open to new opportunities</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-card/20 backdrop-blur-sm border-primary/30 flex-1 xs:flex-none items-center justify-center py-2"
              onClick={() => window.open("https://github.com/atharv028", "_blank")}
            >
              <span className="flex items-center">
                <Github className="w-5 h-5 mr-2 p-0.5" />
                <span className="text-xs sm:text-sm">GitHub</span>
              </span>
            </Button>
            <Button 
              size="sm" 
              variant="outline" 
              className="bg-card/20 backdrop-blur-sm border-primary/30 flex-1 xs:flex-none items-center justify-center py-2"
              onClick={() => window.open("https://linkedin.com/in/atharv-tare", "_blank")}
            >
              <span className="flex items-center">
                <Linkedin className="w-5 h-5 mr-2 p-0.5" />
                <span className="text-xs sm:text-sm">LinkedIn</span>
              </span>
            </Button>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-4 sm:p-6 md:p-8 bg-gradient-secondary border-primary/20">
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">Ready to Collaborate?</h3>
          <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            I'm passionate about building full-stack applications with modern frontend technologies and scalable backend systems. 
            Whether you need expertise in React, Node.js, AWS, or cloud deployment, let's discuss how I can contribute to your team.
          </p>
          
          <div className="space-y-2 sm:space-y-3">
            <Button 
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 glow-primary"
              onClick={() => window.open("mailto:hire.atharv@gmail.com", "_blank")}
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm sm:text-base">Send Message</span>
            </Button>
            
            <Button 
              variant="outline" 
              className="w-full bg-card/20 backdrop-blur-sm border-primary/30"
              onClick={() => window.open("/atharv_gen.pdf", "_blank")}
            >
              <Download className="w-4 h-4 mr-2" />
              <span className="text-sm sm:text-base">Download Resume</span>
            </Button>
            
          </div>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-border">
        <p className="text-xs sm:text-sm text-muted-foreground px-2">
          Built with React, TypeScript, and Tailwind CSS. 
          <span className="text-primary"> Always learning, always building.</span>
        </p>
      </div>
    </section>
  );
};
