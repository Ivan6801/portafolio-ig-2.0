"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Award, GraduationCap, Filter, ZoomIn, X } from "lucide-react"
import { useTranslation } from "react-i18next"

type CertificateCategory = "all" | "frontend" | "backend" | "fullstack" | "career" | "diseño"

interface Certificate {
  id: string
  title: string
  platform: string
  date: string
  category: CertificateCategory
  isCareerPath?: boolean
  credentialUrl?: string
  image?: string
  skills: string[]
}

const categoryStyles: Record<Exclude<CertificateCategory, "all">, { badge: string; cover: string; accent: string }> = {
  frontend: {
    badge: "border-blue-500/30 text-blue-400",
    cover: "from-sky-500/25 via-cyan-500/10 to-transparent",
    accent: "bg-sky-400/15 text-sky-200",
  },
  backend: {
    badge: "border-emerald-500/30 text-emerald-400",
    cover: "from-emerald-500/25 via-green-500/10 to-transparent",
    accent: "bg-emerald-400/15 text-emerald-200",
  },
  fullstack: {
    badge: "border-amber-500/30 text-amber-400",
    cover: "from-amber-500/25 via-orange-500/10 to-transparent",
    accent: "bg-amber-400/15 text-amber-200",
  },
  diseño: {
    badge: "border-pink-500/30 text-pink-400",
    cover: "from-pink-500/25 via-rose-500/10 to-transparent",
    accent: "bg-pink-400/15 text-pink-200",
  },
  career: {
    badge: "border-violet-500/30 text-violet-400",
    cover: "from-violet-500/25 via-fuchsia-500/10 to-transparent",
    accent: "bg-violet-400/15 text-violet-200",
  },
}

const certificates: Certificate[] = [
  // Frontend Courses
  {
    id: "html-css",
    title: "HTML y CSS",
    platform: "Platzi",
    date: "Febrero 2020",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/htmlCss-1be14b49.jpg",
    skills: ["HTML5", "CSS3", "Semantic HTML"],
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    platform: "Platzi",
    date: "Marzo 2020",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/responsiveDesgin-680a012d.jpg",
    skills: ["Media Queries", "Flexbox", "Mobile First"],
  },
  {
    id: "responsive-mobile-first",
    title: "Responsive Design: Maquetacion Mobile First",
    platform: "Platzi",
    date: "Abril 2020",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/responsive-design-maquetacion-mobile-first-3de3be91.jpg",
    skills: ["Mobile First", "Responsive", "CSS"],
  },
  {
    id: "css-grid",
    title: "CSS Grid Layout",
    platform: "Platzi",
    date: "Mayo 2020",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/CssGridLayout-e5437628.jpg",
    skills: ["CSS Grid", "Layouts", "Responsive"],
  },
  {
    id: "javascript",
    title: "Fundamentos de JavaScript",
    platform: "Platzi",
    date: "Septiembre 2020",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/javascript-c1a2436a.jpg",
    skills: ["JavaScript", "ES6+", "DOM"],
  },
  {
    id: "javascript-engine-v8",
    title: "JavaScript Engine (V8) y el Navegador",
    platform: "Platzi",
    date: "Diciembre 2020",
    category: "frontend",
    image: "/assets/diploma-javascript-navegador.png",
    skills: ["JavaScript", "ES6+", "DOM", "Google Chrome", "V8"],
  },
  {
    id: "vue",
    title: "Vue 3",
    platform: "Platzi",
    date: "Septiembre 2020",
    category: "frontend",
    image: "/assets/vue-3.png",
    skills: ["JavaScript", "ES6+", "DOM"],
  },
  {
    id: "svelte",
    title: "Svelte.js",
    platform: "Platzi",
    date: "Enero 2021",
    category: "frontend",
    image: "/assets/svelte.png",
    skills: ["JavaScript", "ES6+", "DOM"],
  },
  {
    id: "react",
    title: "React.js",
    platform: "Platzi",
    date: "2021",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/react-5491356b.jpg",
    skills: ["React", "Hooks", "Components"],
  },
  {
    id: "react-advanced",
    title: "ReactJS Avanzado",
    platform: "Platzi",
    date: "Noviembre 2022",
    category: "frontend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/react-avanzado-1d74daff.jpg",
    skills: ["React", "Performance", "Patterns"],
  },
  // Backend Courses
  {
    id: "nodejs-api",
    title: "Backend con Node.js: API REST con Express.js",
    platform: "Platzi",
    date: "2024",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/Backend-con-Node.-c224b136.jpg",
    skills: ["Node.js", "Express", "REST API"],
  },
  {
    id: "nodejs-postgresql",
    title: "Backend con Node.js: Bases de Datos con PostgreSQL",
    platform: "Platzi",
    date: "Agosto 2024",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/node-postgresql-6cc775f9.jpg",
    skills: ["PostgreSQL", "Node.js", "SQL"],
  },
  {
    id: "nodejs-auth",
    title: "Backend con Node.js: Autenticacion con Passport.js y JWT",
    platform: "Platzi",
    date: "Abril 2025",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/node-jwt-9a6c1234.png",
    skills: ["JWT", "Passport.js", "Auth"],
  },
  {
    id: "nestjs",
    title: "Backend con NestJS",
    platform: "Platzi",
    date: "Marzo 2024",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/nestjs-c23cfcbf.jpg",
    skills: ["NestJS", "TypeScript", "Node.js"],
  },
  {
    id: "django",
    title: "Django",
    platform: "Platzi",
    date: "Noviembre 2024",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/Django-ee851ee5.jpg",
    skills: ["Django", "Python", "ORM"],
  },
  {
    id: "django-rest",
    title: "Django REST Framework",
    platform: "Platzi",
    date: "Agosto 2021",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/diploma-django-rest-framework-3a591d24.png",
    skills: ["DRF", "REST API", "Python"],
  },
  {
    id: "flask",
    title: "Flask",
    platform: "Platzi",
    date: "Septiembre 2022",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/flask-certificate-7c5e52ab.jpg",
    skills: ["Flask", "Python", "Web"],
  },
  {
    id: "fastapi",
    title: "FastAPI",
    platform: "Platzi",
    date: "Septiembre 2022",
    category: "backend",
    image: "/assets/diploma-deploying-python.png",
    skills: ["Flask", "Python", "Web"],
  },
  {
    id: "laravel-api",
    title: "API REST con Laravel",
    platform: "Platzi",
    date: "Noviembre 2022",
    category: "backend",
    image: "https://portafolio-ig-2-0.vercel.app/assets/api-laravel-16da0681.jpg",
    skills: ["Laravel", "PHP", "REST API"],
  },
  {
    id: "mysql-mariadb",
    title: "Bases de Datos con MySQL y MariaDB",
    platform: "Platzi",
    date: "Diceembre 2024",
    category: "backend",
    image: "/assets/mysql-mariadb.png",
    skills: ["MySQL", "MariaDB", "SQL"],
  },
  // Fullstack / Tools
  {
    id: "git-github",
    title: "Git y GitHub Profesional",
    platform: "Platzi",
    date: "Septiembre 2020",
    category: "fullstack",
    image: "https://portafolio-ig-2-0.vercel.app/assets/git-28c0e93e.jpg",
    skills: ["Git", "GitHub", "Version Control"],
  },
  {
    id: "frontend-developer",
    title: "Frontend Developer",
    platform: "Platzi",
    date: "Abril 2022",
    category: "fullstack",
    image: "https://portafolio-ig-2-0.vercel.app/assets/frontend-developer-be860e59.jpg",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "web-online",
    title: "Desarrollo Web Online",
    platform: "Platzi",
    date: "Octubre 2020",
    category: "fullstack",
    image: "https://portafolio-ig-2-0.vercel.app/assets/DesarrolloDeWebOnline-2d1dbff4.jpg",
    skills: ["HTML", "CSS", "Web"],
  },
  {
    id: "despliegue-python",
    title: "Despliegue de Aplicaciones Python en la Nube",
    platform: "Platzi",
    date: "Octubre 2020",
    category: "backend",
    image: "/assets/diploma-deploying-python.png",
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
    image: "https://portafolio-ig-2-0.vercel.app/assets/frontend-react-0a8a8272.jpg",
    skills: ["React", "JavaScript", "Frontend"],
  },
  {
    id: "career-backend-nodejs",
    title: "Backend con Node.js",
    platform: "Platzi",
    date: "Abril 2022",
    category: "career",
    isCareerPath: true,
    image: "https://portafolio-ig-2-0.vercel.app/assets/diploma-web-node-d9691014.png",
    skills: ["Node.js", "Express", "Backend"],
  },
  {
    id: "career-react-native",
    title: "Desarrollo de Apps con React Native",
    platform: "Platzi",
    date: "Abril 2022",
    category: "career",
    isCareerPath: true,
    image: "https://portafolio-ig-2-0.vercel.app/assets/diploma-react-native-c086017f.png",
    skills: ["React Native", "Mobile", "Apps"],
  },
  {
    id: "career-backend-python",
    title: "Desarrollo Backend con Python",
    platform: "Platzi",
    date: "Octubre 2022",
    category: "career",
    isCareerPath: true,
    image: "https://portafolio-ig-2-0.vercel.app/assets/backend-con-python-2569a1b4.jpg",
    skills: ["Python", "Django", "Backend"],
  },
  {
    id: "sistemas-diseno-figma",
    title: "Sistemas de Diseño con Figma",
    platform: "Platzi",
    date: "Febrero 2022",
    category: "diseño",
    isCareerPath: true,
    image: "/assets/sistemas-de-diseno-desarrolladores.png",
    skills: ["Figma", "Prototipo", "Creatividad", "Convertir a PDF", "Diseño de interfaz de usuario", "UI/UX", "Wireframes", "Logo y Icono"],
  }
]

const categories = [
  { value: "all" as const, count: certificates.length },
  { value: "frontend" as const, count: certificates.filter(c => c.category === "frontend").length },
  { value: "backend" as const, count: certificates.filter(c => c.category === "backend").length },
  { value: "fullstack" as const, count: certificates.filter(c => c.category === "fullstack").length },
  { value: "diseño" as const, count: certificates.filter(c => c.category === "diseño").length },
  { value: "career" as const, count: certificates.filter(c => c.category === "career").length },
]

export function CertificatesPage() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] =
    useState<CertificateCategory>("all")

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter(
        (cert) => cert.category === activeFilter
      )

  const regularCerts = filteredCertificates.filter(
    (c) => !c.isCareerPath
  )

  const careerPaths = filteredCertificates.filter(
    (c) => c.isCareerPath
  )

  const openImage = (image: string) => {
    setSelectedImage(image)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const getCategoryLabel = (category: CertificateCategory) => {
    return t(`certificates.categories.${category}`)
  }

  const renderCertificateCover = (
    cert: Certificate,
    compact = false
  ) => {

    const coverClassName = compact
      ? "h-56"
      : "h-72"

    const contentClassName = compact
      ? "p-5"
      : "p-6"

    return (
      <div
        className={`
          relative
          w-full
          overflow-hidden
          border-b
          border-border/50
          bg-gradient-to-br
          ${coverClassName}
          ${categoryStyles[cert.category].cover}
        `}
      >

        {cert.image ? (
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src={cert.image}
              alt={t("certificates.previewAlt", { title: cert.title })}
              loading="lazy"
              onClick={() => openImage(cert.image!)}
              className="
                absolute
                inset-0
                h-full
                w-full
                cursor-zoom-in
                object-cover
                transition-transform
                duration-500
                ease-out
                hover:scale-125
              "
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/10" />

            {/* Overlay */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-black/50
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-300
              "
            >

              <button
                onClick={() =>
                  openImage(cert.image!)
                }
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  shadow-xl
                  hover:scale-110
                  transition
                "
              >
                <ZoomIn className="h-5 w-5" />
              </button>

            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_45%)]" />
        )}

        <div
          className={`
            relative
            flex
            h-full
            flex-col
            justify-between
            ${contentClassName}
          `}
        >

          <div className="flex items-start justify-between gap-3">

            <Badge
              className={`
                border-0
                ${categoryStyles[cert.category].accent}
              `}
            >
              {getCategoryLabel(cert.category)}
            </Badge>

            <div
              className="
                rounded-full
                border
                border-white/10
                bg-background/60
                px-2
                py-1
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-muted-foreground
                backdrop-blur
              "
            >
              {cert.platform}
            </div>

          </div>

          <div className="space-y-2">

            <p
              className={`
                ${compact
                  ? "line-clamp-3 text-lg"
                  : "max-w-sm text-lg"
                }
                font-semibold
                leading-tight
                text-foreground
              `}
            >
              {cert.title}
            </p>

            <p className="text-xs text-muted-foreground">
              {cert.date}
            </p>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">

      <Navigation />

      <main className="pt-24 pb-16">

        <div className="container mx-auto px-4 md:px-6">

          {/* Header */}
          <div className="mb-12 text-center">

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-primary/10
                px-4
                py-2
                text-primary
                mb-6
              "
            >
              <GraduationCap className="h-4 w-4" />

              <span className="text-sm font-medium">
                {t("certificates.learning")}
              </span>
            </div>

            <h1 className="mb-4 text-4xl md:text-5xl font-bold">
              {t("certificates.titleStart")}{" "}
              <span className="text-primary">
                {t("certificates.titleHighlight")}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {t("certificates.description")}
            </p>

          </div>

          {/* Filters */}
          <div
            className="
              mb-12
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
            "
          >

            <Filter className="mr-2 h-4 w-4 text-muted-foreground" />

            {categories.map((category) => (

              <Button
                key={category.value}
                size="sm"
                variant={
                  activeFilter === category.value
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setActiveFilter(category.value)
                }
                className="rounded-full"
              >
                {getCategoryLabel(category.value)}
              </Button>

            ))}
          </div>

          {/* Career */}
          {careerPaths.length > 0 && (
            <div className="mb-16">

              <h2
                className="
                  mb-6
                  flex
                  items-center
                  gap-3
                  text-2xl
                  font-bold
                "
              >
                <Award className="h-6 w-6 text-primary" />
                {t("certificates.career")}
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                {careerPaths.map((cert) => (

                  <Card
                    key={cert.id}
                    className="
                      group
                      overflow-hidden
                      border-primary/20
                      bg-gradient-to-br
                      from-primary/10
                      via-card
                      to-card
                      transition-all
                      duration-300
                      hover:border-primary/40
                    "
                  >

                    {renderCertificateCover(cert)}

                    <CardContent className="p-6">

                      <h3
                        className="
                          mb-4
                          text-xl
                          font-bold
                          group-hover:text-primary
                          transition-colors
                        "
                      >
                        {cert.title}
                      </h3>

                      <div className="flex flex-wrap gap-2 mb-5">

                        {cert.skills.map((skill) => (

                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs"
                          >
                            {skill}
                          </Badge>

                        ))}
                      </div>

                      <div className="flex items-center justify-between">

                        <span className="text-sm text-muted-foreground">
                          {cert.date}
                        </span>

                        {cert.credentialUrl && (
                          <Button
                            variant="ghost"
                            size="sm"
                            asChild
                          >
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                            >
                              {t("certificates.viewCredential")}
                              <ExternalLink className="ml-2 h-4 w-4" />
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

          {/* Regular Grid */}
          <div>

            <h2
              className="
                mb-6
                flex
                items-center
                gap-3
                text-2xl
                font-bold
              "
            >
              <GraduationCap className="h-6 w-6 text-primary" />
              {t("certificates.completed")}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

              {regularCerts.map((cert) => (

                <Card
                  key={cert.id}
                  className="
                    group
                    overflow-hidden
                    border-border/50
                    bg-card/50
                    transition-all
                    duration-300
                    hover:border-primary/30
                    hover:bg-card/80
                    hover:-translate-y-1
                  "
                >

                  {renderCertificateCover(cert, true)}

                  <CardContent className="p-5">

                    <h3
                      className="
                        mb-4
                        font-semibold
                        line-clamp-2
                        group-hover:text-primary
                        transition-colors
                      "
                    >
                      {cert.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">

                      {cert.skills.map((skill) => (

                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>

                      ))}

                    </div>

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        border-t
                        border-border/50
                        pt-3
                      "
                    >

                      <span className="text-xs text-muted-foreground">
                        {cert.date}
                      </span>

                      <Badge
                        variant="outline"
                        className={
                          categoryStyles[cert.category]
                            .badge
                        }
                      >
                        {
                          getCategoryLabel(cert.category)
                        }
                      </Badge>

                    </div>

                  </CardContent>
                </Card>

              ))}

            </div>
          </div>

        </div>
      </main>

      {/* IMAGE MODAL */}
      {selectedImage && (

        <div
          onClick={closeImage}
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/90
            backdrop-blur-md
            p-4
          "
        >

          {/* Close */}
          <button
            onClick={closeImage}
            className="
              absolute
              right-6
              top-6
              text-white
              hover:scale-110
              transition
            "
          >
            <X className="h-8 w-8" />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt={t("certificates.selectedPreviewAlt")}
            className="
              max-h-[95vh]
              max-w-[95vw]
              rounded-2xl
              object-contain
              shadow-2xl
              animate-in
              zoom-in-95
              duration-300
            "
          />

        </div>
      )}

      <Footer />
    </div>
  )
}
