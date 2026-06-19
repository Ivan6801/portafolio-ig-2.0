"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Laptop, Accessibility, Zap } from "lucide-react"
import { useTranslation } from "react-i18next"

const highlights = [
  {
    icon: Code2,
  },
  {
    icon: Laptop,
  },
  {
    icon: Accessibility,
  },
  {
    icon: Zap,
  },
]

type HighlightText = {
  title: string
  description: string
}

export function AboutSection() {
  const { t } = useTranslation()
  const highlightText = t("about.highlights", {
    returnObjects: true,
  }) as HighlightText[]
  const paragraphs = t("about.paragraphs", {
    returnObjects: true,
  }) as string[]

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - About text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary text-sm font-medium tracking-wide uppercase">
                {t("about.eyebrow")}
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {t("about.title")}
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p>
                {t("about.techStart")}{" "}
                <span className="text-foreground font-medium">React.js, React Native, JavaScript, Next.js, TypeScript, Material UI, CSS, SCSS, WordPress</span>,{" "}
                <span className="text-foreground font-medium">Node.js, Django, C#, desarrollo de APIs RESTful, PHP, Redis</span>,{" "}
                <span className="text-foreground font-medium">PostgreSQL, MySQL, MongoDB, MariaDB</span>,{" "}
                <span className="text-foreground font-medium">Docker, AWS, Vercel, Netlify, CI/CD, cPanel</span>, {t("about.techAnd")}{" "}
                {t("about.techEnd")}
              </p>
            </div>
          </div>

          {/* Right column - Stats */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={highlightText[index].title}
                className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{highlightText[index].title}</p>
                    <p className="text-sm text-muted-foreground">
                      {highlightText[index].description}
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
