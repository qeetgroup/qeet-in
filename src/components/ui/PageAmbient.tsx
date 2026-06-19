import { cn } from "@/lib/utils";

/**
 * Lightweight ambient backdrop for inner-page heroes — the Confident-Enterprise
 * structural vocabulary: a faded hairline grid, one restrained brand glow, and
 * film grain. No animated blobs, so it stays cheap on content pages. Purely
 * decorative (aria-hidden). Drop into a `relative overflow-hidden` hero section
 * as its first child.
 */
export function PageAmbient({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="bg-grid absolute inset-0 opacity-[0.5] mask-[radial-gradient(ellipse_75%_70%_at_50%_-10%,black,transparent_75%)] dark:opacity-[0.35]" />
      <div className="bg-mesh absolute inset-0 opacity-90 mask-[radial-gradient(ellipse_85%_75%_at_50%_-10%,black,transparent_80%)]" />
      <div className="bg-grain absolute inset-0" />
    </div>
  );
}
