import { LinkButton } from "@/components/ui/link-button";
import { siteConfig } from "@/lib/data/site";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import type { ComponentProps } from "react";

type ResumeDownloadButtonProps = {
  className?: string;
  size?: ComponentProps<typeof LinkButton>["size"];
  variant?: ComponentProps<typeof LinkButton>["variant"];
  label?: string;
};

export function ResumeDownloadButton({
  className,
  size = "sm",
  variant = "default",
  label = "Download Resume",
}: ResumeDownloadButtonProps) {
  return (
    <LinkButton
      href={siteConfig.resumePath}
      download={siteConfig.resumeFileName}
      size={size}
      variant={variant}
      className={cn("rounded-full", className)}
    >
      <Download className="size-4" />
      {label}
    </LinkButton>
  );
}
