import { navLinks, siteConfig, socialLinks } from "@/lib/data/site";
import { BookOpen, Code2, Globe, X } from "lucide-react";
import Link from "next/link";

const iconMap = {
  linkedin: Globe,
  github: Code2,
  twitter: X,
  medium: BookOpen,
} as const;

const socialAriaLabels: Record<keyof typeof socialLinks, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  twitter: "X",
  medium: "Medium",
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>
          <div className="flex items-center gap-3">
            {(Object.entries(socialLinks) as [keyof typeof socialLinks, string][]).map(
              ([key, href]) => {
                const Icon = iconMap[key];
                return (
                  <Link
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full border border-border/80 bg-card text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    aria-label={socialAriaLabels[key]}
                  >
                    <Icon className="size-4" />
                  </Link>
                );
              },
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
