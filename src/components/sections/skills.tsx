"use client";

import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/effects/scroll-reveal";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillCategories } from "@/lib/data/site";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkillBar({ name, level }: { name: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-accent"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Skills"
            title="Product thinking meets engineering depth"
            description="From MVP strategy to production Flutter, cloud infrastructure, and AI integrations."
          />
        </ScrollReveal>

        <ScrollReveal className="mt-12">
          <Tabs defaultValue={skillCategories[0].id} className="w-full">
            <TabsList className="mb-8 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0">
              {skillCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-full border border-border/60 bg-card/60 px-4 py-2 data-active:border-accent/50 data-active:bg-accent/10 data-active:text-accent"
                >
                  {cat.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <StaggerContainer className="grid gap-4 md:grid-cols-2">
                  {cat.skills.map((skill) => (
                    <StaggerItem key={skill.name}>
                      <Card className="card-hover border-border/60 bg-card/70">
                        <CardContent className="p-5">
                          <SkillBar name={skill.name} level={skill.level} />
                        </CardContent>
                      </Card>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollReveal>

        <StaggerContainer className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.id}>
              <Card className="border-border/40 bg-transparent shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{cat.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {cat.skills.map((s) => (
                    <span
                      key={s.name}
                      className="rounded-md bg-muted px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {s.name}
                    </span>
                  ))}
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
