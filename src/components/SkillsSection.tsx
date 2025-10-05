export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Front End",
      skills: ["React", "Next.js", "Tailwind", "Framer Motion"],
    },
    {
      title: "Back End",
      skills: ["FastAPI", "Node.js", "Express", "Supabase"],
    },
    {
      title: "Other Technologies",
      skills: ["GSAP", "Loki", "Grafana", "AWS"],
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-black mb-12 text-center text-secondary">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div 
              key={category.title}
              className="bg-card border-4 border-foreground rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-4 text-secondary">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-base">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
