"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              Contacto
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Trabajemos juntos
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Estoy abierto a nuevas oportunidades y colaboraciones. Si tienes un
              proyecto en mente, no dudes en contactarme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:tu@email.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tu@email.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Ubicacion</p>
                    <p className="text-muted-foreground">
                      Tijuana, Baja California, Mexico
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prefiero la comunicacion escrita debido a mi discapacidad auditiva.
                  El email es mi canal preferido, pero tambien estoy disponible por
                  mensaje directo en LinkedIn.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Mensaje enviado
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Gracias por contactarme. Te respondere pronto.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Field>
                      <FieldLabel htmlFor="name">Nombre</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="tu@email.com"
                        required
                      />
                    </Field>

                    <Field>
                      <FieldLabel htmlFor="message">Mensaje</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Cuentame sobre tu proyecto..."
                        rows={4}
                        required
                      />
                    </Field>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar mensaje
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
