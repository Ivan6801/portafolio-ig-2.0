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

const categories = ["Todos", "Frontend", "Backend", "Full Stack", "IA"]

const projects = [
  {
    title: "ABC LSM",
    description:
      "Lengua de Señas Mexicana, LSM, educación, videos, accesibilidad.",
    image: "/abc-lsm.png",
    category: "Full Stack",
    technologies: ["React", "Styled Components", "Django", "PostgreSQL", "DBeaver", "Redis", "Celery", "Docker", "Worker", "OpenAI", "AWS", "Nginx", "Auth JWT", "FireBase", "React Context", "PWA", "PyTest", "CI/CD", "Responsive Design", "SEO", "Accessibility", "Figma"],
    liveUrl: "https://abcsenas.com/",
    githubUrl: null,
    featured: true,
  },
  {
    title: "My Care Hospital Excel",
    description:
      "Bienvenido a My Care en Tijuana. Turismo médico por Hospital Excel 🩺.",
    image: "/excelmycare.png",
    category: "Full Stack",
    technologies: ["Next.ts", "SCSS", "Docker", "Node.js", "OpenAI", "SEO", "Nginx", "Vercel", "Google Maps API", "Responsive Design", "Figma"],
    liveUrl: "https://www.excelmycare.com/",
    githubUrl: null,
    featured: true,
  },
  {
    title: "Shopi",
    description:
      "E-commerce o Tienda Online con React.js y Node.js con PostgreSQL Conecta API REST con bases de datos relacionales. Domina Sequelize, el ORM más popular en JavaScript. Trabaja consultas, relaciones y migraciones - FullStack",
    image: "/shopi.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Postman", "PayPal API", "Jest", "PWA", "React Hook", "SEO", "Figma"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/fullstack-postgres",
    featured: false,
  },
  {
    title: "Petgram",
    description:
      "Crea una aplicación para subir y compartir fotos de mascotas usando Webpack, GraphQL, React Hooks, React Router, SEO y PWAs.",
    image: "/Petgram.gif",
    category: "Frontend",
    technologies: ["React", "GraphQL", "React Hook", "Router", "SEO", "PWA", "localStorage"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/Petgram",
    featured: false,
  },
  {
    title: "React Native: Pokemon",
    description:
      "Aplicacion movil de banca con autenticacion biometrica, transferencias y historial de transacciones.",
    image: "/Pokemon.jpg",
    category: "Frontend",
    technologies: ["React Native", "Expo", "React Navigation", "Async Storage", "Axios"],
    liveUrl: "https://react-avanzado-blond.vercel.app/",
    githubUrl: null,
    featured: false,
  },
  {
    title: "Coffee Shop",
    description:
      "Realice Django, la herramienta todo en uno para construcción de sitios web #1 en el ecosistema de Python y AWS",
    image: "/coffee-shop.png",
    category: "Backend",
    technologies: ["Django", "AWS", "AWS RDS", "AWS S3", "AWS EC2", "AWS VPC", "Gunicorn", "Nginx"],
    liveUrl: null,
    githubUrl: "https://gitlab.com/Ivan6801/coffee_shop",
    featured: false,
  },
  {
    title: "El paciente administra",
    description:
      "Proyecto MERN Stack con TailwindCSS Headless UI, Context API, Socket IO, MongoDB - FullStack",
    image: "/uptask.png",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express js", "Tailwind CSS", "Headless UI", "Context API", "Socket IO"],
    liveUrl: null,
    githubUrl: "https://github.com/Ivan6801/MERN",
    featured: false,
  },
  {
    title: "Página web de matemáticas",
    description:
      "Practica todo lo que has aprendido de JavaScript para crear una página web con diferentes ejercicios básicos de matemáticas.",
    image: "/Math.png",
    category: "Frontend",
    technologies: ["JS Vanilla", "HTML", "CSS"],
    liveUrl: "https://ivan6801.github.io/Math/",
    githubUrl: null,
    featured: false,
  },
  {
    title: "Cientifico JavaScript Vanilla",
    description:
      "Crea una aplicación web de página única y cárgala con información usando JavaScript Vanilla. Diseña una experiencia fluida para tus usuarios llamando a una API para mostrar la información y navegar entre los detalles de cada personaje.",
    image: "/cientifico.png",
    category: "Frontend",
    technologies: ["JS Vanilla", "HTML", "CSS", "Vite", "API"],
    liveUrl: "https://cientifico-vanilla-js.vercel.app/",
    githubUrl: null,
    featured: false,
  },
  {
    title: "LangChain (Python)",
    description:
      "LangChain es un framework diseñado para construir aplicaciones basadas en modelos de lenguaje (LLM) como Qwen, Llama, GPT y Mistral. Permite conectar modelos de inteligencia artificial con documentos, bases de datos, APIs y herramientas externas para crear asistentes inteligentes, chatbots y sistemas de preguntas y respuestas (RAG).",
    image: "/LangChain.png",
    category: "IA",
    technologies: ["Python", "LangChain", "Docker", "API", "Ollama", "PDF"],
    liveUrl: null,
    githubUrl: "https://gitlab.com/Ivan6801/langchain/-/tree/fix-main?ref_type=heads",
    featured: false,
  },
]

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter(
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
              Proyectos
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Trabajo seleccionado
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
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
                {category}
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
                    alt={project.title}
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
                      Destacado
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
                      {project.title}
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
                    {project.description}
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
            alt="Preview"
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