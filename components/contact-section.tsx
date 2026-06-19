"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export function ContactSection() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_9rjkxxf",
        "template_k5bqdyl",
        form,
        "q54oWY1t7YQHce_eq",
      );

      setSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      alert(t("contact.error"));
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <p className="text-primary text-sm font-medium tracking-wide uppercase">
              {t("contact.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t("contact.description")}
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
                    <p className="font-medium">{t("contact.email")}</p>
                    <a
                      href="mailto:hal308366@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hal308366@gmail.com
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
                    <p className="font-medium">{t("contact.locationLabel")}</p>
                    <p className="text-muted-foreground">
                      {t("contact.location")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="p-6 rounded-lg bg-muted/50 border border-border/50">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("contact.note")}
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
                      {t("contact.sentTitle")}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t("contact.sentDescription")}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Field>
                      <FieldLabel htmlFor="name">{t("contact.name")}</FieldLabel>
                      <Input
                        id="name"
                        name="name"
                        placeholder={t("contact.namePlaceholder")}
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
                      <FieldLabel htmlFor="message">{t("contact.message")}</FieldLabel>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder={t("contact.messagePlaceholder")}
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
                          {t("contact.sending")}
                        </>
                      ) : (
                        <>
                          {t("contact.send")}
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
  );
}
