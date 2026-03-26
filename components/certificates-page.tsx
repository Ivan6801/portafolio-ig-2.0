"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, GraduationCap, Filter } from "lucide-react"

type CertificateCategory = "all" | "frontend" | "backend" | "fullstack" | "career" | "diseño"

interface Certificate {
  id: string
  title: string
  platform: string
  date: string
  category: CertificateCategory
  isCareerPath?: boolean
  credentialUrl?: string
  skills: string[]
}

const certificates: Certificate[] = [
  // Frontend Courses
  {
    id: "html-css",
    title: "HTML y CSS",
    platform: "Platzi",
    date: "Febrero 2020",
    category: "frontend",
    skills: ["HTML5", "CSS3", "Semantic HTML"],
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    platform: "Platzi",
    date: "Marzo 2020",
    category: "frontend",
    skills: ["Media Queries", "Flexbox", "Mobile First"],
  },
  {
    id: "responsive-mobile-first",
    title: "Responsive Design: Maquetacion Mobile First",
    platform: "Platzi",
    date: "Abril 2020",
    category: "frontend",
    skills: ["Mobile First", "Responsive", "CSS"],
  },
  {
    id: "css-grid",
    title: "CSS Grid Layout",
    platform: "Platzi",
    date: "Mayo 2020",
    category: "frontend",
    skills: ["CSS Grid", "Layouts", "Responsive"],
  },
  {
    id: "javascript",
    title: "Fundamentos de JavaScript",
    platform: "Platzi",
    date: "Septiembre 2020",
    category: "frontend",
    skills: ["JavaScript", "ES6+", "DOM"],
  },
{
    id: "vue",
    title: "Vue 3",
    platform: "Platzi",
    date: "Septiembre 2020",
    category: "frontend",
    skills: ["JavaScript", "ES6+", "DOM"],
  },
  {
    id: "react",
    title: "React.js",
    platform: "Platzi",
    date: "2021",
    category: "frontend",
    skills: ["React", "Hooks", "Components"],
  },
  {
    id: "react-advanced",
    title: "ReactJS Avanzado",
    platform: "Platzi",
    date: "Noviembre 2022",
    category: "frontend",
    skills: ["React", "Performance", "Patterns"],
  },
  // Backend Courses
  {
    id: "nodejs-api",
    title: "Backend con Node.js: API REST con Express.js",
    platform: "Platzi",
    date: "2024",
    category: "backend",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    id: "nodejs-postgresql",
    title: "Backend con Node.js: Bases de Datos con PostgreSQL",
    platform: "Platzi",
    date: "Agosto 2024",
    category: "backend",
    skills: ["PostgreSQL", "Node.js", "SQL"],
  },
  {
    id: "nodejs-auth",
    title: "Backend con Node.js: Autenticacion con Passport.js y JWT",
    platform: "Platzi",
    date: "Abril 2025",
    category: "backend",
    skills: ["JWT", "Passport.js", "Auth"],
  },
  {
    id: "nestjs",
    title: "Backend con NestJS",
    platform: "Platzi",
    date: "Marzo 2024",
    category: "backend",
    skills: ["NestJS", "TypeScript", "Node.js"],
  },
  {
    id: "django",
    title: "Django",
    platform: "Platzi",
    date: "Noviembre 2024",
    category: "backend",
    skills: ["Django", "Python", "ORM"],
  },
  {
    id: "django-rest",
    title: "Django REST Framework",
    platform: "Platzi",
    date: "Agosto 2021",
    category: "backend",
    skills: ["DRF", "REST API", "Python"],
  },
  {
    id: "flask",
    title: "Flask",
    platform: "Platzi",
    date: "Septiembre 2022",
    category: "backend",
    skills: ["Flask", "Python", "Web"],
  },
  {
    id: "laravel-api",
    title: "API REST con Laravel",
    platform: "Platzi",
    date: "Noviembre 2022",
    category: "backend",
    skills: ["Laravel", "PHP", "REST API"],
  },
  // Fullstack / Tools
  {
    id: "git-github",
    title: "Git y GitHub",
    platform: "Platzi",
    date: "Septiembre 2020",
    category: "fullstack",
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    platform: "Platzi",
    date: "Abril 2022",
    category: "fullstack",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "web-online",
    title: "Desarrollo Web Online",
    platform: "Platzi",
    date: "Octubre 2020",
    category: "fullstack",
    skills: ["HTML", "CSS", "Web"],
  },
  {
    id: "despliegue-python",
    title: "Despliegue de Aplicaciones Python en la Nube",
    platform: "Platzi",
    date: "Octubre 2020",
    category: "backend",
    skills: ["Python", "AWS", "Nginx", "AWS EC2", "AWS RDS"],
  },
  // Career Paths
  {
    id: "career-frontend-react",
    title: "Frontend con React",
    platform: "Platzi",
    date: "Junio 2020",
    category: "career",
    isCareerPath: true,
    skills: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "career-backend-nodejs",
    title: "Backend con Node.js",
    platform: "Platzi",
    date: "Abril 2022",
    category: "career",
    isCareerPath: true,
    skills: ["Node.js", "Express", "Backend"],
  },
  {
    id: "career-react-native",
    title: "Desarrollo de Apps con React Native",
    platform: "Platzi",
    date: "Abril 2022",
    category: "career",
    isCareerPath: true,
    skills: ["React Native", "Mobile", "Apps"],
  },
  {
    id: "career-backend-python",
    title: "Desarrollo Backend con Python",
    platform: "Platzi",
    date: "Octubre 2022",
    category: "career",
    isCareerPath: true,
    skills: ["Python", "Django", "Backend"],
  },
  {
    id: "sistemas-diseno-figma",
    title: "Sistemas de Diseño con Figma",
    platform: "Platzi",
    date: "Febrero 2022",
    category: "diseño",
    isCareerPath: true,
    skills: ["Figma", "Prototipo", "Creatividad", "Convertir a PDF", "Diseño de interfaz de usuario", "UI/UX", "Wireframes", "Logo y Icono"],
  }
]

const categories = [
  { value: "all" as const, label: "Todos", count: certificates.length },
  { value: "frontend" as const, label: "Frontend", count: certificates.filter(c => c.category === "frontend").length },
  { value: "backend" as const, label: "Backend", count: certificates.filter(c => c.category === "backend").length },
  { value: "fullstack" as const, label: "Full Stack", count: certificates.filter(c => c.category === "fullstack").length },
  { value: "diseño" as const, label: "Sistemas de Diseño", count: certificates.filter(c => c.category === "diseño").length },
  { value: "career" as const, label: "Rutas de Carrera", count: certificates.filter(c => c.category === "career").length },
]

export function CertificatesPage() {
  const [activeFilter, setActiveFilter] = useState<CertificateCategory>("all")

  const filteredCertificates = activeFilter === "all" 
    ? certificates 
    : certificates.filter(cert => cert.category === activeFilter)

  const regularCerts = filteredCertificates.filter(c => !c.isCareerPath)
  const careerPaths = filteredCertificates.filter(c => c.isCareerPath)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-medium">Aprendizaje continuo</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mis <span className="text-gradient">Certificaciones</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Certificados profesionales que respaldan mis conocimientos en desarrollo web y movil.
              Siempre aprendiendo y mejorando mis habilidades.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{certificates.length}</div>
                <div className="text-sm text-muted-foreground">Total Certificados</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">{careerPaths.length}</div>
                <div className="text-sm text-muted-foreground">Rutas Completadas</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">1</div>
                <div className="text-sm text-muted-foreground">Plataforma</div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-1">6+</div>
                <div className="text-sm text-muted-foreground">Años Aprendiendo</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeFilter === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(category.value)}
                className="rounded-full"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2 bg-background/20">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Career Paths Section */}
          {careerPaths.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Rutas de Carrera Completadas
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {careerPaths.map((cert) => (
                  <Card 
                    key={cert.id} 
                    className="group relative overflow-hidden bg-gradient-to-br from-primary/10 via-card to-card border-primary/20 hover:border-primary/40 transition-all duration-300"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Award className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide">
                              {cert.platform}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Ruta de Aprendizaje
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                          Carrera
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Aprobado: {cert.date}
                        </span>
                        {cert.credentialUrl && (
                          <Button variant="ghost" size="sm" className="gap-2" asChild>
                            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                              Ver credencial
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Regular Certificates Grid */}
          {regularCerts.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" />
                Cursos Completados
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {regularCerts.map((cert) => (
                  <Card 
                    key={cert.id} 
                    className="group bg-card/50 border-border/50 hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded bg-primary/10">
                          <GraduationCap className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-xs text-muted-foreground uppercase tracking-wide">
                          {cert.platform}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {cert.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {cert.skills.slice(0, 3).map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs px-2 py-0">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-border/50">
                        <span className="text-xs text-muted-foreground">
                          {cert.date}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${
                            cert.category === "frontend" 
                              ? "border-blue-500/30 text-blue-400" 
                              : cert.category === "backend"
                              ? "border-green-500/30 text-green-400"
                              : "border-purple-500/30 text-purple-400"
                          }`}
                        >
                          {cert.category === "frontend" ? "Frontend" : cert.category === "backend" ? "Backend" : "Full Stack"}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Empty State */}
          {filteredCertificates.length === 0 && (
            <div className="text-center py-16">
              <GraduationCap className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No hay certificados en esta categoria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}