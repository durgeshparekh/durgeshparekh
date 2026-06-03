import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/scroll-reveal";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import {
  aboutHighlights,
  education,
  timelineMilestones,
} from "@/lib/data/site";
import {
  Brain,
  Cloud,
  Layers,
  Smartphone,
  Sparkles,
} from "lucide-react";

const iconMap = {
  "Product Development": Sparkles,
  "System Design": Layers,
  "Mobile Engineering": Smartphone,
  "Backend Development": Cloud,
  "AI-Powered Solutions": Brain,
} as const;

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="About"
            title="Building products from idea to scale"
            description="Product-focused engineer with 7+ years shipping mobile apps, admin platforms, and full-stack systems for high-growth startups — owning architecture, analytics, CI/CD, and end-to-end deployments."
          />
        </ScrollReveal>

        <StaggerContainer className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {aboutHighlights.map((item) => {
            const Icon = iconMap[item.title as keyof typeof iconMap];
            return (
              <StaggerItem key={item.title}>
                <Card className="card-hover h-full border-border/60 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <ScrollReveal className="mt-16" delay={0.1}>
          <h3 className="mb-8 text-xl font-semibold tracking-tight">Journey</h3>
          <div className="relative max-w-2xl rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm sm:p-8">
            <div
              aria-hidden
              className="absolute top-9 bottom-9 left-[calc(1.5rem+12px)] w-px -translate-x-1/2 bg-border sm:left-[calc(2rem+12px)]"
            />
            <ul className="relative space-y-0">
              {timelineMilestones.map((milestone, index) => (
                <li
                  key={`${milestone.year}-${index}`}
                  className="flex gap-5 pb-8 last:pb-0 sm:gap-6"
                >
                  <div className="flex w-6 shrink-0 justify-center pt-1.5">
                    <span
                      className="relative z-10 size-[11px] rounded-full border-[3px] border-background bg-accent shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent),transparent_85%)]"
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-mono text-sm font-medium tabular-nums tracking-wide text-accent">
                      {milestone.year}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {milestone.label}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12" delay={0.15}>
          <Card className="border-border/60 bg-muted/30">
            <CardContent className="flex flex-col gap-2 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{education.degree}</p>
                <p className="text-sm text-muted-foreground">
                  {education.school} · {education.location}
                </p>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-mono text-accent">{education.year}</span>
                <span className="mx-2">·</span>
                {education.detail}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
