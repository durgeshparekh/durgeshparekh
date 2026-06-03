"use client";

import { MagneticButton } from "@/components/effects/magnetic-button";
import { ParallaxMesh } from "@/components/effects/parallax-mesh";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LinkButton } from "@/components/ui/link-button";
import { ResumeDownloadButton } from "@/components/layout/resume-download-button";
import { SocialLinkButtons } from "@/components/layout/social-link-buttons";
import { siteConfig } from "@/lib/data/site";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16"
    >
      <ParallaxMesh />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-8 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            {siteConfig.tagline}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-semibold text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl"
          >
            {siteConfig.title}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton>
              <LinkButton href="#projects" size="lg" className="rounded-full px-6">
                View Projects
                <ArrowRight className="size-4" />
              </LinkButton>
            </MagneticButton>
            <MagneticButton>
              <LinkButton
                href="#contact"
                variant="outline"
                size="lg"
                className="rounded-full px-6"
              >
                Contact Me
              </LinkButton>
            </MagneticButton>
            <MagneticButton>
              <ResumeDownloadButton size="lg" variant="outline" className="px-6" />
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-6">
            <SocialLinkButtons />
          </motion.div>

          <motion.div
            variants={item}
            className="mt-14 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <ArrowDown className="size-4 animate-bounce" />
            <span>Scroll to explore</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative mx-auto aspect-square w-full max-w-[320px] lg:max-w-[380px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/30 via-accent/5 to-transparent blur-2xl" />
            <div className="glass-card relative flex h-full w-full items-center justify-center rounded-[2rem] border border-border/60 p-3">
              <Avatar className="size-full rounded-[1.6rem]">
                <AvatarImage
                  src="https://github.com/durgeshparekh.png"
                  alt={siteConfig.name}
                  className="object-cover"
                />
                <AvatarFallback className="rounded-[1.6rem] text-4xl">
                  DP
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-md">
              <p className="font-mono text-xs text-muted-foreground">Experience</p>
              <p className="text-lg font-semibold">7+ Years</p>
            </div>
            <div className="absolute -top-2 -right-2 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 backdrop-blur-md">
              <p className="font-mono text-xs text-muted-foreground">Focus</p>
              <p className="text-sm font-semibold">Product × Engineering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
