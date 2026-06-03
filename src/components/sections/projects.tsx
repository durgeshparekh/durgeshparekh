"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionHeader } from "@/components/layout/section-header";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Code2 } from "lucide-react";
import { useRef } from "react";

function ProjectCard({
  project,
  index,
  compact = false,
}: {
  project: (typeof projects)[number];
  index: number;
  compact?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card className="card-hover group overflow-hidden border-border/60 bg-card/60">
        <div
          className={cn(
            "relative overflow-hidden bg-gradient-to-br",
            compact ? "aspect-[21/7]" : "aspect-[16/10]",
            project.gradient,
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span
              className={cn(
                "font-semibold tracking-tighter text-foreground/10",
                compact ? "text-3xl" : "text-6xl",
              )}
            >
              {project.title.charAt(0)}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
        </div>
        <CardContent className={cn(compact ? "p-4" : "p-6")}>
          <div className="flex flex-wrap items-start justify-between gap-2">
            <h3
              className={cn(
                "font-semibold",
                compact ? "text-base leading-snug" : "text-xl",
              )}
            >
              {project.title}
            </h3>
            {project.featured && (
              <Badge variant="secondary" className="font-mono text-[10px]">
                Featured
              </Badge>
            )}
          </div>
          <p
            className={cn(
              "leading-relaxed text-muted-foreground",
              compact ? "mt-2 line-clamp-2 text-xs" : "mt-3 text-sm",
            )}
          >
            {project.description}
          </p>
          <div className={cn("flex flex-wrap gap-1.5", compact ? "mt-3" : "mt-4")}>
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className={cn("font-mono", compact ? "px-1.5 py-0 text-[10px]" : "text-xs")}
              >
                {tech}
              </Badge>
            ))}
          </div>
          {project.githubUrl && (
            <div className={cn(compact ? "mt-3" : "mt-6")}>
              <LinkButton
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                variant="outline"
                className="rounded-full"
              >
                GitHub
                <Code2 className="size-3.5" />
              </LinkButton>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Projects"
            title="Featured work"
            description="Products shipped across mobile, web, IoT, AI learning, hiring platforms, and e-commerce — from MVP to production scale."
          />
        </ScrollReveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              compact
            />
          ))}
        </div>

        {more.length > 0 && (
          <>
            <ScrollReveal className="mt-12">
              <h3 className="text-base font-semibold text-muted-foreground">More projects</h3>
            </ScrollReveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {more.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index + featured.length}
                  compact
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
