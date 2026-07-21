"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  X,
  ZoomIn,
} from "lucide-react"
import { useTranslation } from "react-i18next"

const categories = ["Todos", "Frontend", "Backend", "Full Stack", "IA"] as const

const projects = [
  {
    image: "/abc-lsm.png",
    category: "Full Stack",
    technologies: ["React", "Styled Components", "Django", "PostgreSQL", "DBeaver", "Redis", "Celery", "Docker", "Worker", "OpenAI", "AWS", "Nginx", "Auth JWT", "FireBase", "React Context", "PWA", "PyTest", "CI/CD", "Responsive Design", "SEO", "Accessibility", "Figma"],
    liveUrl: "https://abcsenas.com/",
    githubUrl: null,
    featured: true,
  },
  {
    image: "/excelmycare.png",
    category: "Full Stack",
    technologies: ["Next.ts", "SCSS", "Docker", "Node.js", "OpenAI", "SEO", "Nginx", "Vercel", "Google Maps API", "Responsive Design", "Figma"],
    liveUrl: "https://www.excelmycare.com/",
    githubUrl: null,
    featured: true,
  },
  {
    image: "/shopi.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Postman", "PayPal API", "Jest", "PWA", "React Hook", "SEO", "Figma"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/fullstack-postgres",
    featured: false,
  },
  {
    image: "/Petgram.gif",
    category: "Frontend",
    technologies: ["React", "GraphQL", "React Hook", "Router", "SEO", "PWA", "localStorage"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/Petgram",
    featured: false,
  },
  {
    image: "/Pokemon.jpg",
    category: "Frontend",
    technologies: ["React Native", "Expo", "React Navigation", "Async Storage", "Axios"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/wsl-native",
    featured: false,
  },
  {
    image: "/coffee-shop.png",
    category: "Backend",
    technologies: ["Django", "AWS", "AWS RDS", "AWS S3", "AWS EC2", "AWS VPC", "Gunicorn", "Nginx"],
    liveUrl: null,
    githubUrl: "https://gitlab.com/Ivan6801/coffee_shop",
    featured: false,
  },
  {
    image: "/uptask.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express js", "Tailwind CSS", "Headless UI", "Context API", "Socket IO"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/MERN",
    featured: false,
  },
  {
    image: "/Math.png",
    category: "Frontend",
    technologies: ["JS Vanilla", "HTML", "CSS"],
    liveUrl: "https://ivan6801.github.io/Math/",
    githubUrl: null,
    featured: false,
  },
  {
    image: "/cientifico.png",
    category: "Frontend",
    technologies: ["JS Vanilla", "HTML", "CSS", "Vite", "API"],
    liveUrl: "https://cientifico-vanilla-js.vercel.app/",
    githubUrl: null,
    featured: false,
  },
  {
    image: "/LangChain.png",
    category: "IA",
    technologies: ["Python", "LangChain", "Docker", "API", "Ollama", "PDF"],
    liveUrl: null,
    githubUrl: "https://gitlab.com/Ivan6801/langchain/-/tree/fix-main?ref_type=heads",
    featured: false,
  },
  {
    image: "/web-con-blazor.png",
    category: "Backend",
    technologies: [".NET", "Blazor", "WebAssembly", "C#", "HTML", "CSS"],
    liveUrl: null,
    githubUrl: "https://gitlab.com/Ivan6801/Blazor-WebAssembly",
    featured: false,
  },
]

type ProjectText = {
  title: string
  description: string
}

export function ProjectsSection() {
  const { t } = useTranslation()
  const [activeCategory, setActiveCategory] = useState("Todos")
  const categoryLabels = t("projects.categories", {
    returnObjects: true,
  }) as string[]
  const projectText = t("projects.items", {
    returnObjects: true,
  }) as ProjectText[]

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  const localizedProjects = projects.map((project, index) => ({
    ...project,
    text: projectText[index],
  }))

  const filteredProjects =
    activeCategory === "Todos"
      ? localizedProjects
      : localizedProjects.filter(
          (p) => p.category === activeCategory
        )

  const openImage = (image: string) => {
    setSelectedImage(image)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <section
        id="projects"
        className="py-20 md:py-32"
      >
        <div className="container mx-auto px-4 md:px-6">

          <div className="space-y-2 mb-10">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("projects.eyebrow")}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {t("projects.title")}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={
                  activeCategory === category
                    ? "default"
                    : "outline"
                }
                size="sm"
                onClick={() =>
                  setActiveCategory(category)
                }
                className="transition-all duration-300"
              >
                {categoryLabels[index]}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredProjects.map((project, index) => (

              <Card
                key={index}
                className="
                  group
                  overflow-hidden
                  border-border/50
                  bg-card/50
                  backdrop-blur-sm
                  hover:border-primary/40
                  transition-all
                  duration-500
                  hover:-translate-y-2
                "
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.text.title}
                    onClick={() =>
                      openImage(project.image)
                    }
                    className="
                      w-full
                      h-full
                      object-cover
                      cursor-zoom-in
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-black/50
                      opacity-0
                      group-hover:opacity-100
                      transition-opacity
                      duration-300
                      flex
                      items-center
                      justify-center
                      gap-4
                    "
                  >

                    <button
                      onClick={() =>
                        openImage(project.image)
                      }
                      className="
                        h-11
                        w-11
                        rounded-full
                        bg-white
                        text-black
                        flex
                        items-center
                        justify-center
                        hover:scale-110
                        transition
                      "
                    >
                      <ZoomIn className="h-5 w-5" />
                    </button>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          h-11
                          w-11
                          rounded-full
                          bg-primary
                          text-primary-foreground
                          flex
                          items-center
                          justify-center
                          hover:scale-110
                          transition
                        "
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          h-11
                          w-11
                          rounded-full
                          bg-secondary
                          flex
                          items-center
                          justify-center
                          hover:scale-110
                          transition
                        "
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  {project.featured && (
                    <Badge
                      className="
                        absolute
                        top-3
                        left-3
                      "
                    >
                      {t("projects.featured")}
                    </Badge>
                  )}
                </div>

                <CardContent className="p-5 space-y-4">

                  <div className="flex items-start justify-between">

                    <h3
                      className="
                        text-xl
                        font-semibold
                        group-hover:text-primary
                        transition-colors
                      "
                    >
                      {project.text.title}
                    </h3>

                    <ArrowUpRight
                      className="
                        h-5
                        w-5
                        text-muted-foreground
                        group-hover:text-primary
                        transition
                      "
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.text.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                </CardContent>

              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={closeImage}
          className="
            fixed
            inset-0
            z-50
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
            animate-in
            fade-in
          "
        >

          <button
            onClick={closeImage}
            className="
              absolute
              top-6
              right-6
              text-white
              hover:scale-110
              transition
            "
          >
            <X color="red" style={{ cursor: "pointer", zIndex: "100 !important", position: "relative" }} className="h-10 w-10" />
          </button>

          <img
            src={selectedImage}
            alt={t("projects.previewAlt")}
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
    </>
  )
}
