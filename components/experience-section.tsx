"use client"

import { Badge } from "@/components/ui/badge"
import { useTranslation } from "react-i18next"

const experiences = [
  {
    technologies: ["React", "Figma", "Django", "Docker", "Next.ts", "Redis", "JS vanilla", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Ubuntu, WSL", "Vercel"],
  },
  {
    technologies: ["React.js", "React Native", "Redux", "Node.js","MongoDB", "Docker", "Microservices", "Formik/Yup", "SQL", "Postman", "HTML", "SCSS", "Sails.js", "Jira Software"],
  },
  {
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Elementor", "WooCommerce", "CMS", "SEO", "cPanel", "Adobe Illustrator", "Adobe XD"],
  }
]

type ExperienceText = {
  period: string
  title: string
  company: string
  description: string
}

export function ExperienceSection() {
  const { t } = useTranslation()
  const experienceText = t("experience.items", {
    returnObjects: true,
  }) as ExperienceText[]

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 mb-12">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("experience.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("experience.title")}
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-primary/50 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-primary" />

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="text-sm text-muted-foreground font-mono">
                      {experienceText[index].period}
                    </span>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{experienceText[index].title}</h3>
                      <span className="text-muted-foreground">{t("experience.at")}</span>
                      <p>{experienceText[index].company}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {experienceText[index].description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
