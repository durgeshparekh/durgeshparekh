import { LinkButton } from "@/components/ui/link-button";
import { socialLinkMeta } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { BookOpen, Code2, Globe, X } from "lucide-react";
import type { ComponentProps } from "react";

const iconMap = {
  github: Code2,
  linkedin: Globe,
  twitter: X,
  medium: BookOpen,
} as const;

type SocialLinkButtonsProps = {
  className?: string;
  size?: ComponentProps<typeof LinkButton>["size"];
  variant?: ComponentProps<typeof LinkButton>["variant"];
};

export function SocialLinkButtons({
  className,
  size = "sm",
  variant = "outline",
}: SocialLinkButtonsProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {socialLinkMeta.map(({ key, label, href }) => {
        const Icon = iconMap[key];
        return (
          <LinkButton
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            variant={variant}
            size={size}
            className="rounded-full"
          >
            <Icon className="size-4" />
            {label}
          </LinkButton>
        );
      })}
    </div>
  );
}
