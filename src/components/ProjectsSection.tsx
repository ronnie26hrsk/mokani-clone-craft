import { Github, ExternalLink } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "ObservoAI",
      description: "AI-powered API observability platform with real-time traffic monitoring and anomaly detection",
      tags: ["Python", "Machine Learning", "LGTM Stack"],
      image: "https://www.mokanichokani.me/_next/image?url=%2Fobservoai.png&w=1920&q=75",
      github: "https://github.com/mokanichokani/API-Monitoring-and-AI-Analysis",
      demo: null,
    },
    {
      title: "Webster",
      description: "SaaS business dashboard with drag-and-drop website builder and AI agents",
      tags: ["Next.js", "Supabase", "Agentic AI"],
      image: "https://www.mokanichokani.me/_next/image?url=%2Fwebster.png&w=1920&q=75",
      github: "https://github.com/mokanichokani/webstermajorproject",
      demo: null,
    },
    {
      title: "JobWeMet",
      description: "Job platform with remote interviews, live coding tests, and job applications",
      tags: ["Next.js", "Clerk", "WebRTC", "Stream SDK"],
      image: "https://www.mokanichokani.me/_next/image?url=%2Fjobwemet.png&w=1920&q=75",
      github: "https://github.com/mokanichokani/jobwemet",
      demo: "https://jobwemet.vercel.app/",
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center text-secondary">Featured Projects</h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card border-4 border-foreground rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-black mb-4 text-secondary">{project.title}</h3>
                  <p className="text-lg mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-bold border-2 border-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg font-bold hover:opacity-80 transition-opacity"
                      >
                        <Github className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg font-bold hover:opacity-80 transition-opacity"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
