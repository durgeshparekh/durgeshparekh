"use client";

import { ScrollReveal } from "@/components/effects/scroll-reveal";
import { SectionHeader } from "@/components/layout/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/lib/data/site";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="section-padding">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="Trusted by product teams"
            description="Feedback from startup founders, product leadership, and engineering teams I've partnered with."
            align="center"
            className="mx-auto"
          />
        </ScrollReveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="border-border/60 bg-card/70 shadow-xl shadow-black/5 dark:shadow-black/30">
                <CardContent className="p-8 sm:p-10">
                  <Quote className="size-8 text-accent/60" aria-hidden />
                  <blockquote className="mt-6 text-lg leading-relaxed text-foreground sm:text-xl">
                    &ldquo;{current.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-8 border-t border-border/60 pt-6">
                    <p className="font-semibold">{current.author}</p>
                    <p className="text-sm text-muted-foreground">{current.role}</p>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-center gap-4">
            <Button variant="outline" size="icon-sm" onClick={prev} aria-label="Previous">
              <ChevronLeft className="size-4" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-accent" : "w-2 bg-muted-foreground/40"
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon-sm" onClick={next} aria-label="Next">
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
