"use client"

import { useState, useEffect, type MouseEvent } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Languages, Menu, Moon, Sun } from "lucide-react"

type NavItem = {
  label: string
  href: string
  type: "hash" | "page"
}

export function Navigation() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const navItems = t("navigation.items", { returnObjects: true }) as NavItem[]

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleHashLink = (
    e: MouseEvent<HTMLButtonElement>,
    href: string
  ) => {
    e.preventDefault()
    if (href.startsWith('#')) {
      if (pathname !== '/' && ['#about', '#experience', '#projects', '#contact'].includes(href)) {
        router.push('/')
        setTimeout(() => {
          const target = document.querySelector(href)
          target?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const target = document.querySelector(href)
        target?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setIsOpen(false)
  }

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
  }

  const languageButton = (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="gap-2 px-3"
      aria-label={t("language.switchTo")}
    >
      <Languages className="h-4 w-4" />
      <span className="text-xs font-semibold">{t("language.current")}</span>
    </Button>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
        >
          Ivan Gonzalez
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            item.type === 'page' ? (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.href}
                onClick={(e) => handleHashLink(e, item.href)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
              >
                {item.label}
              </button>
            )
          ))}
          {languageButton}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2"
            aria-label={t("navigation.toggleTheme")}
          >
            {mounted && (theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            ))}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          {languageButton}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t("navigation.toggleTheme")}
          >
            {mounted && (theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            ))}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t("navigation.openMenu")}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => (
                  item.type === 'page' ? (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      key={item.href}
                      onClick={(e) => handleHashLink(e, item.href)}
                      className="text-lg font-medium hover:text-primary transition-colors w-full text-left bg-transparent border-none cursor-pointer p-2"
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
