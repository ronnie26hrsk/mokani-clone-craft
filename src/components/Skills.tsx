import { Code, Database, Globe, Layout, Server, Smartphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    items: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend Development",
    items: ["Node.js", "Python", "Express", "FastAPI", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Firebase"],
  },
  {
    icon: Layout,
    title: "UI/UX Design",
    items: ["Figma", "Adobe XD", "Responsive Design", "Accessibility"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: ["GraphQL", "WebSockets", "PWA", "SEO", "Performance"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    items: ["React Native", "Flutter", "iOS", "Android", "App Store"],
  },
];

export const Skills = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills & <span className="gradient-text">Expertise</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                      {skill.title}
                    </h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {skill.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
