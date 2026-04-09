"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "DIC 2022 - Actualidad",
    title: "Senior Full Stack Developer",
    company: "Hospital Excel California",
    companyUrl: "#",
    description: "Trabajando actual en Hospital Excel California, desarrollando y manteniendo un sistema de administración de pacientes construido con Django y Python, utilizando MySQL y PostgreSQL en Amazon Web Services. La herramienta era un sistema integral para la gestión de pacientes y construcción de sitios web Full-Stack, con componentes de PMO desarrollados en React.js y TypeScript. Como desarrollador Full-Stack, cuento con habilidades sólidas tanto en front-end como en back-end, lo que me permite crear aplicaciones completas y funcionales de manera eficiente. Tengo experiencia resolviendo problemas técnicos complejos y adaptándome a distintas tecnologías, incluyendo:",
    technologies: ["React", "Figma", "Django", "Docker", "Next.ts", "Redis", "JS vanilla", "Node.js", "PostgreSQL", "MySQL", "MongoDB", "AWS", "Ubuntu, WSL", "Vercel"],
  },
  {
    period: "MAR 2022 - NOV 2022",
    title: "Full Stack Developer Jenior",
    company: "G-Global industrial",
    companyUrl: "#",
    description: "Trabajé en Industrial G-Global como Ingeniero de Software, especializándome en WMS y TMS y brindando soluciones eficientes para el desarrollo de proyectos. Me desempeñé en desarrollo Full-Stack a través de REST APIs, utilizando tecnologías como React.js, Redux, HTML, SCSS, MongoDB, Node.js, Sails.js, SQL, Formik yup y Postman, así como pruebas unitarias y de integración para garantizar la calidad del software. Entre mis responsabilidades destacan: Mantenimiento de sistemas existentes, dando soporte a usuarios, resolviendo errores (bugs) y atendiendo nuevos requerimientos. Mejora continua del sistema, optimizando procesos, limpiando código y aplicando buenas prácticas de programación para asegurar escalabilidad y eficiencia. Mi enfoque combina habilidades técnicas sólidas con la capacidad de mejorar y mantener sistemas complejos de manera organizada y profesional.",
    technologies: ["React.js", "React Native", "Redux", "Node.js","MongoDB", "Docker", "Microservices", "Formik/Yup", "SQL", "Postman", , "HTML", "SCSS", "Sails.js", "Jira Software"],
  },
  {
    period: "FEB 2021 - JUL 2021",
    title: "Frontend Developer",
    company: "Grupo Gurú",
    companyUrl: "#",
    description:
      "Trabajé en Grupo Guru – Diseño de Páginas Web en Tijuana, B.C., realizando mis prácticas profesionales en Front-End durante 4 meses. Me especialicé en el desarrollo y diseño de sitios web utilizando CMS WordPress, adquiriendo experiencia en la creación de páginas funcionales y atractivas, adaptadas a las necesidades de los clientes.",
    technologies: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "Elementor", "WooCommerce", "CMS", "SEO", "cPanel", "Adobe Illustrator", "Adobe XD"],
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-2 mb-12">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              Experiencia
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Mi trayectoria profesional
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
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-lg">{exp.title}</h3>
                      <span className="text-muted-foreground">at</span>
                      <p>{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
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
