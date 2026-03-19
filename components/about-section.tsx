"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Laptop, Accessibility, Zap } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "7+ Años",
    description: "Experiencia profesional",
  },
  {
    icon: Laptop,
    title: "50+ Proyectos",
    description: "Entregados con exito",
  },
  {
    icon: Accessibility,
    title: "Accesibilidad",
    description: "WCAG 2.1 Compliant",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Core Web Vitals",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - About text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">
                Sobre Mi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Desarrollador con pasion por crear soluciones que importan
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy un desarrollador Full Stack Senior con mas de 7 años de experiencia
                creando aplicaciones web y moviles. Mi trabajo se centra en la interseccion
                del diseño y la ingenieria, construyendo experiencias que no solo funcionan
                bien, sino que son accesibles para todos.
              </p>
              <p>
                Como persona sorda, tengo una perspectiva unica sobre la importancia de la
                accesibilidad digital. Esta experiencia me ha convertido en un defensor de
                crear productos inclusivos que funcionen para todos los usuarios,
                independientemente de sus capacidades.
              </p>
              <p>
                Actualmente trabajo con tecnologias modernas como{" "}
                <span className="text-foreground font-medium">React.js, React Native, JavaScript, Next.js, TypeScript, Material UI, CSS, SCSS, WordPress</span>,{" "}
                <span className="text-foreground font-medium">Node.js, Django, C#, desarrollo de APIs RESTful, PHP, Redis</span>,{" "}
                <span className="text-foreground font-medium">PostgreSQL, MySQL, MongoDB, MariaDB</span>,{" "}
                <span className="text-foreground font-medium">Docker, AWS, Vercel, Netlify, CI/CD, cPanel</span>, y{" "}
                buscando las mejores practicas y patrones de arquitectura para entregar
                codigo limpio y mantenible.
              </p>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <Card
                key={item.title}
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
