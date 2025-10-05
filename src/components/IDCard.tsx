import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Github, Linkedin, Globe } from "lucide-react";

export const IDCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className="py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-md h-96 cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ perspective: "1000px" }}
          >
            <div
              className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front of card */}
              <Card
                className="absolute inset-0 p-8 backface-hidden border-2 shadow-2xl card-glow"
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center text-5xl font-bold text-white shadow-xl">
                    AM
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">Aakash Mokani</h3>
                  <p className="text-muted-foreground mb-4">Full-Stack Developer</p>
                  
                  <div className="flex gap-2 mb-6">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Mumbai, India</span>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-6 italic">
                    Click to flip the card
                  </p>
                </div>
              </Card>

              {/* Back of card */}
              <Card
                className="absolute inset-0 p-8 backface-hidden border-2 shadow-2xl card-glow rotate-y-180"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 gradient-text">Get In Touch</h3>
                    
                    <div className="space-y-4">
                      <a
                        href="mailto:contact@mokanichokani.me"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <Mail className="h-5 w-5 text-primary" />
                        <span className="group-hover:text-primary transition-colors">
                          contact@mokanichokani.me
                        </span>
                      </a>
                      
                      <a
                        href="https://github.com/mokanichokani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <Github className="h-5 w-5 text-primary" />
                        <span className="group-hover:text-primary transition-colors">
                          @mokanichokani
                        </span>
                      </a>
                      
                      <a
                        href="https://linkedin.com/in/mokanichokani"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <Linkedin className="h-5 w-5 text-primary" />
                        <span className="group-hover:text-primary transition-colors">
                          Aakash Mokani
                        </span>
                      </a>
                      
                      <a
                        href="https://mokanichokani.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                      >
                        <Globe className="h-5 w-5 text-primary" />
                        <span className="group-hover:text-primary transition-colors">
                          mokanichokani.me
                        </span>
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-xs text-muted-foreground text-center italic mt-4">
                    Click to flip back
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
