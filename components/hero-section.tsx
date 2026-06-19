"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export function HeroSection() {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl">
            <div
              className={`space-y-6 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-muted-foreground text-sm md:text-base tracking-wide uppercase">
                {t("hero.role")}
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Ivan Alexander{" "}
                <span className="text-gradient">Gonzalez</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                {t("hero.descriptionStart")}{" "}
                <span className="text-foreground font-medium">{t("hero.performance")}</span>,{" "}
                <span className="text-foreground font-medium">{t("hero.accessibility")}</span> {t("hero.and")}{" "}
                <span className="text-foreground font-medium">{t("hero.cleanCode")}</span>.
                {" "}{t("hero.descriptionEnd")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="group">
                  <a href="#contact">
                    {t("hero.ctaContact")}
                    <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#projects">{t("hero.ctaProjects")}</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/Ivan_Gonzalez_CV.pdf" download="Ivan-Gonzalez-CV.pdf">
                    {t("hero.downloadCv")}
                    <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-8">
                <a
                  href="https://github.com/Ivan6801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ivan-gonzalez-9465411b1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:hal308366@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <span className="text-muted-foreground text-sm ml-4">
                  {t("hero.location")}
                </span>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`relative transition-all duration-700 delay-300 ${
              mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 via-primary/20 to-transparent blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-2xl">
                <Image
                  src="/Ivan-Gonzalez-2026.jpg"
                  alt={t("hero.imageAlt")}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Decorative ring */}
              <div className="absolute -inset-2 rounded-full border border-primary/10" />
              <div className="absolute -inset-4 rounded-full border border-primary/5" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  )
}
