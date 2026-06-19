import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type HeadingSize =
  | "display-xl"
  | "display-l"
  | "display-m"
  | "heading-xl"
  | "heading-l"
  | "heading-m"
  | "heading-s";

/**
 * `display` is the confident headline face (Cal Sans Display) — the default for
 * the Confident-Enterprise look. `sans` is the body face for softer headings.
 * `serif` is a retained alias → display, so call sites from the previous
 * serif-led design keep rendering correctly while they migrate.
 */
type Variant = "display" | "sans" | "serif";

/**
 * Responsive size map. Desktop sizes match the brief's type scale; smaller
 * viewports step down so display type doesn't overflow on phones.
 */
const sizeMap: Record<HeadingSize, string> = {
  "display-xl":
    "text-[3.25rem] leading-[1.05] sm:text-[4rem] md:text-[5rem] md:leading-[1.05] lg:text-[6rem] lg:leading-[1.04]",
  "display-l":
    "text-[2.75rem] leading-[1.08] sm:text-[3.25rem] md:text-[4rem] md:leading-[1.1] lg:text-[4.5rem] lg:leading-[1.11]",
  "display-m":
    "text-[2.25rem] leading-[1.1] md:text-[2.75rem] md:leading-[1.12] lg:text-[3.5rem] lg:leading-[1.14]",
  "heading-xl":
    "text-[1.875rem] leading-[1.15] md:text-[2.25rem] lg:text-[2.5rem] lg:leading-[1.2]",
  "heading-l":
    "text-[1.5rem] leading-[1.2] md:text-[1.75rem] lg:text-[2rem] lg:leading-[1.25]",
  "heading-m": "text-[1.25rem] leading-[1.3] md:text-[1.5rem] md:leading-[1.33]",
  "heading-s": "text-[1.125rem] leading-[1.55]",
};

const variantMap: Record<Variant, string> = {
  display: "font-display font-semibold tracking-tight",
  sans: "font-sans font-medium tracking-[-0.02em]",
  // Legacy: previous serif headlines now render in the display face.
  serif: "font-display font-medium tracking-[-0.02em]",
};

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  variant?: Variant;
  size?: HeadingSize;
  className?: string;
  children: ReactNode;
  as?: ElementType;
};

export function Heading({
  level = 2,
  variant = "display",
  size = "heading-l",
  className,
  children,
  as,
}: HeadingProps) {
  const Tag = (as ?? (`h${level}` as ElementType)) as ElementType;
  return (
    <Tag className={cn("text-balance", variantMap[variant], sizeMap[size], className)}>
      {children}
    </Tag>
  );
}
