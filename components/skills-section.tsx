"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Vue.js", level: "Proficient" },
      { name: "HTML / CSS", level: "Expert" },
      { name: "Framer Motion", level: "Proficient" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "Django / Python", level: "Expert" },
      { name: "PostgreSQL", level: "Expert" },
      { name: "MongoDB", level: "Proficient" },
      { name: "GraphQL", level: "Proficient" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", level: "Expert" },
      { name: "Expo", level: "Proficient" },
      { name: "Swift / iOS", level: "Familiar" },
      { name: "Android / Kotlin", level: "Familiar" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Git / GitHub", level: "Expert" },
      { name: "Docker", level: "Proficient" },
      { name: "AWS / Vercel", level: "Proficient" },
      { name: "CI/CD", level: "Proficient" },
      { name: "Linux", level: "Proficient" },
      { name: "Figma", level: "Proficient" },
    ],
  },
]

function getLevelColor(level: string) {
  switch (level) {
    case "Expert":
      return "bg-primary/20 text-primary"
    case "Proficient":
      return "bg-accent/20 text-accent"
    case "Familiar":
      return "bg-muted text-muted-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-2 mb-12">
          <p className="text-primary text-sm font-medium tracking-wide uppercase">
            Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Tecnologias y herramientas
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Mi stack tecnologico se ha construido a lo largo de 7 años de experiencia,
            manteniendome actualizado con las mejores practicas de la industria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm">{skill.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${getLevelColor(
                        skill.level
                      )}`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
