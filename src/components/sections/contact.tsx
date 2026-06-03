"use client";

import { ResumeDownloadButton } from "@/components/layout/resume-download-button";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionHeader } from "@/components/layout/section-header";
import { Button } from "@/components/ui/button";
import { LinkButton } from "@/components/ui/link-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinkButtons } from "@/components/layout/social-link-buttons";
import { siteConfig } from "@/lib/data/site";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    reset();
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something meaningful"
            description="Open to freelance, contract, and product consulting — especially AI-enabled products, MVPs, and systems ready to scale."
          />
        </ScrollReveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ScrollReveal delay={0.05}>
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Reach out directly or send a message. I typically respond within 1–2 business
                days.
              </p>

              <ul className="space-y-4">
                <li>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                  >
                    <Mail className="size-4 text-accent" />
                    {siteConfig.email}
                  </Link>
                </li>
                <li>
                  <Link
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm transition-colors hover:text-accent"
                  >
                    <Phone className="size-4 text-accent" />
                    {siteConfig.phone}
                  </Link>
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="size-4" />
                  {siteConfig.location}
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <SocialLinkButtons />
                <ResumeDownloadButton size="default" className="w-fit" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card space-y-5 rounded-2xl border border-border/60 p-6 sm:p-8"
              noValidate
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" {...register("name")} />
                {errors.name && (
                  <p className="text-xs text-destructive">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your product, timeline, and goals..."
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  type="submit"
                  className="w-full rounded-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </MagneticButton>
              {isSubmitSuccessful && (
                <p className="text-sm text-muted-foreground">
                  Opening your email client — adjust the message if needed before sending.
                </p>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
