import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/tu-usuario",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tu-usuario",
    icon: Linkedin,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/tu-usuario",
    icon: Twitter,
  },
  {
    label: "Email",
    href: "mailto:tu@email.com",
    icon: Mail,
  },
]

const navLinks = [
  { label: "Sobre Mi", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-lg font-semibold">
              Ivan Gonzalez
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Desarrollador Full Stack Senior. Construyendo experiencias digitales
              accesibles y de alto rendimiento.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-medium">Navegacion</p>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <p className="font-medium">Conecta conmigo</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Ivan Gonzalez. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Version 3
          </p>
        </div>
      </div>
    </footer>
  )
}
