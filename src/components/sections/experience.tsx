import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/effects/scroll-reveal";
import { ResumeDownloadButton } from "@/components/layout/resume-download-button";
import { SectionHeader } from "@/components/layout/section-header";
import { experience } from "@/lib/data/site";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="Experience"
              title="Career timeline"
              description="Seven years from founding mobile engineer to senior product engineer — shipping IoT, AI learning, hiring, and marketplace products for startups in India and the US."
              className="mb-0"
            />
            <ResumeDownloadButton size="default" className="shrink-0" />
          </div>
        </ScrollReveal>

        <div className="relative mt-12 max-w-4xl">
          <div
            aria-hidden
            className="absolute top-8 bottom-8 left-[calc(0.75rem+12px)] w-px -translate-x-1/2 bg-border"
          />
          <StaggerContainer className="space-y-0">
            {experience.map((role, index) => (
              <StaggerItem key={`${role.company}-${role.position}-${index}`}>
                <article className="flex gap-5 pb-10 last:pb-0 sm:gap-6">
                  <div className="flex w-6 shrink-0 justify-center pt-2">
                    <span
                      className="relative z-10 size-[11px] rounded-full border-[3px] border-background bg-accent shadow-[0_0_0_4px_color-mix(in_oklch,var(--accent),transparent_85%)]"
                      aria-hidden
                    />
                  </div>
                  <div className="min-w-0 flex-1 rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm transition-shadow hover:shadow-lg hover:shadow-accent/5 sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{role.position}</h3>
                        <p className="mt-0.5 font-medium text-accent">{role.company}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{role.location}</p>
                      </div>
                      <p className="shrink-0 font-mono text-xs text-muted-foreground sm:text-sm">
                        {role.duration}
                      </p>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                      {role.summary}
                    </p>
                    <ul className="mt-4 space-y-2.5">
                      {role.achievements.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <ScrollReveal className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p className="font-medium text-foreground">Full work history & skills</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Download a PDF resume with detailed experience, projects, and contact info.
            </p>
          </div>
          <ResumeDownloadButton size="default" />
        </ScrollReveal>
      </div>
    </section>
  );
}
