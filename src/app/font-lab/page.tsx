import type { Metadata } from "next";
import {
  Geist,
  Space_Grotesk,
  Plus_Jakarta_Sans,
  Sora,
  Schibsted_Grotesk,
  Fraunces,
  Inter,
  IBM_Plex_Sans,
  Manrope,
  Outfit,
  Archivo,
  Familjen_Grotesk,
  Newsreader,
  IBM_Plex_Serif,
  Instrument_Serif,
  Playfair_Display,
  Cormorant_Garamond,
  DM_Serif_Display,
  Young_Serif,
  Piazzolla,
} from "next/font/google";
import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

/*
 * Internal font-pairing lab. Each specimen is a real two-font system — a
 * display/heading face + a body face — rendered in the actual hero statement,
 * body copy, weights, and UI. Choose by eye, in light and dark. Mono stays Geist
 * Mono throughout. Delete this route once the pairing is locked. Not indexed.
 */

export const metadata: Metadata = {
  title: "Font lab",
  robots: { index: false, follow: false },
};

const geist = Geist({ subsets: ["latin"], variable: "--fl-geist", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--fl-space", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--fl-jakarta", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--fl-sora", display: "swap" });
const schibsted = Schibsted_Grotesk({ subsets: ["latin"], variable: "--fl-schibsted", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--fl-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--fl-inter", display: "swap" });
const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fl-plex",
  display: "swap",
});
const manrope = Manrope({ subsets: ["latin"], variable: "--fl-manrope", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--fl-outfit", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], variable: "--fl-archivo", display: "swap" });
const familjen = Familjen_Grotesk({ subsets: ["latin"], variable: "--fl-familjen", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--fl-newsreader", display: "swap" });
const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fl-plexserif",
  display: "swap",
});
// Serifs in the Fraunces family — characterful / high-contrast display faces.
const instrument = Instrument_Serif({ subsets: ["latin"], weight: ["400"], variable: "--fl-instrument", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--fl-playfair", display: "swap" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--fl-cormorant",
  display: "swap",
});
const dmSerif = DM_Serif_Display({ subsets: ["latin"], weight: ["400"], variable: "--fl-dmserif", display: "swap" });
const youngSerif = Young_Serif({ subsets: ["latin"], weight: ["400"], variable: "--fl-young", display: "swap" });
const piazzolla = Piazzolla({ subsets: ["latin"], variable: "--fl-piazzolla", display: "swap" });

type Pairing = {
  rank: string;
  display: string;
  body: string;
  displayVar: string;
  bodyVar: string;
  kind: string;
  take: string;
  recommended?: boolean;
};

const pairings: Pairing[] = [
  {
    rank: "A",
    display: "Geist",
    body: "Inter",
    displayVar: "var(--fl-geist)",
    bodyVar: "var(--fl-inter)",
    kind: "Neo-grotesk display · neutral body",
    take: "Clean, modern, confident — the safest premium read. Geist gives headlines presence; Inter is the most legible body face going.",
  },
  {
    rank: "A",
    display: "Space Grotesk",
    body: "Inter",
    displayVar: "var(--fl-space)",
    bodyVar: "var(--fl-inter)",
    kind: "Geometric display · neutral body",
    take: "Distinctive headline character (monospace DNA) without losing professionalism. Reads technical-premium; bridges creative and engineering.",
  },
  {
    rank: "A",
    display: "Sora",
    body: "IBM Plex Sans",
    displayVar: "var(--fl-sora)",
    bodyVar: "var(--fl-plex)",
    kind: "Geometric display · engineered body",
    take: "Reads as “serious tech company.” Sora’s precise geometry up top, IBM Plex’s institutional readability below. The most enterprise-grounded pair.",
  },
  {
    rank: "B",
    display: "Plus Jakarta Sans",
    body: "Inter",
    displayVar: "var(--fl-jakarta)",
    bodyVar: "var(--fl-inter)",
    kind: "Geometric-warm display · neutral body",
    take: "Geometric warmth — modern without feeling cold. The “established Series-A/B” look; sophisticated and approachable.",
  },
  {
    rank: "B",
    display: "Schibsted Grotesk",
    body: "Inter",
    displayVar: "var(--fl-schibsted)",
    bodyVar: "var(--fl-inter)",
    kind: "Editorial grotesk display · neutral body",
    take: "Confident with a touch of editorial character in the display weights. A refined middle ground between Geist and something showier.",
  },
  {
    rank: "C",
    display: "Fraunces",
    body: "Inter",
    displayVar: "var(--fl-fraunces)",
    bodyVar: "var(--fl-inter)",
    kind: "Expressive serif display · sans body",
    take: "The editorial-premium flavor: an expressive high-contrast serif headline over a clean sans. Signals trust and storytelling — a different direction if you want serif headlines.",
  },
  {
    rank: "A",
    display: "Fraunces",
    body: "Cal Sans",
    displayVar: "var(--fl-fraunces)",
    bodyVar: "var(--font-body)",
    kind: "Expressive serif display · product body",
    take: "Fraunces headlines over Cal Sans — the products' own body face. Premium editorial type up top, brand-consistent body below. This is what's live on the site now.",
    recommended: true,
  },
  {
    rank: "A",
    display: "Instrument Serif",
    body: "Cal Sans",
    displayVar: "var(--fl-instrument)",
    bodyVar: "var(--font-body)",
    kind: "Fraunces-family serif · product body",
    take: "Elegant high-contrast display serif — cleaner and more restrained than Fraunces, less quirk. Very premium-editorial. (One weight, so headlines only.)",
  },
  {
    rank: "A",
    display: "Young Serif",
    body: "Cal Sans",
    displayVar: "var(--fl-young)",
    bodyVar: "var(--font-body)",
    kind: "Fraunces-family serif · product body",
    take: "Chunky, warm Old-Style character — closest to Fraunces's personality, but sturdier and more grounded. Distinctive. (One weight.)",
  },
  {
    rank: "B",
    display: "Playfair Display",
    body: "Cal Sans",
    displayVar: "var(--fl-playfair)",
    bodyVar: "var(--font-body)",
    kind: "Fraunces-family serif · product body",
    take: "Classic high-contrast editorial / fashion serif — more formal and Didone than Fraunces. Reads luxe and traditional.",
  },
  {
    rank: "B",
    display: "Cormorant Garamond",
    body: "Cal Sans",
    displayVar: "var(--fl-cormorant)",
    bodyVar: "var(--font-body)",
    kind: "Fraunces-family serif · product body",
    take: "Extreme-contrast Garamond — refined and airy, stunning at large sizes. Feels expensive; lighter and more delicate than Fraunces.",
  },
  {
    rank: "B",
    display: "Piazzolla",
    body: "Cal Sans",
    displayVar: "var(--fl-piazzolla)",
    bodyVar: "var(--font-body)",
    kind: "Fraunces-family serif · product body",
    take: "An optical-size literary serif — a Fraunces sibling in spirit, but calmer and more even. Great range of weights.",
  },
  {
    rank: "C",
    display: "DM Serif Display",
    body: "Cal Sans",
    displayVar: "var(--fl-dmserif)",
    bodyVar: "var(--font-body)",
    kind: "Fraunces-family serif · product body",
    take: "Decorative high-contrast display serif — a touch more ornamental and theatrical. (One weight.)",
  },
  {
    rank: "B",
    display: "Archivo",
    body: "Inter",
    displayVar: "var(--fl-archivo)",
    bodyVar: "var(--fl-inter)",
    kind: "Sturdy grotesque display · neutral body",
    take: "Industrial, slightly wide grotesque — commands big headlines with a confident, corporate weight. The most “institutional sans” of the grotesks here.",
  },
  {
    rank: "B",
    display: "Outfit",
    body: "Inter",
    displayVar: "var(--fl-outfit)",
    bodyVar: "var(--fl-inter)",
    kind: "Minimal geometric display · neutral body",
    take: "Even, geometric, quietly elegant — minimal and precise. Reads premium through restraint rather than character.",
  },
  {
    rank: "B",
    display: "Manrope",
    body: "Inter",
    displayVar: "var(--fl-manrope)",
    bodyVar: "var(--fl-inter)",
    kind: "Warm geometric display · neutral body",
    take: "Geometric with rounded warmth — modern and approachable without feeling cold. A friendlier alternative to Geist.",
  },
  {
    rank: "B",
    display: "Familjen Grotesk",
    body: "Inter",
    displayVar: "var(--fl-familjen)",
    bodyVar: "var(--fl-inter)",
    kind: "Scandinavian grotesk display · neutral body",
    take: "Subtle Nordic character in the letterforms — refined but not plain. A distinctive-yet-restrained middle ground.",
  },
  {
    rank: "B",
    display: "IBM Plex Sans",
    body: "IBM Plex Serif",
    displayVar: "var(--fl-plex)",
    bodyVar: "var(--fl-plexserif)",
    kind: "One super-family: sans head · serif body",
    take: "A single family in two voices — institutional sans headlines over a serif body. Cohesive and very “corporate of record”; the serif body leans editorial.",
  },
  {
    rank: "C",
    display: "Newsreader",
    body: "Geist",
    displayVar: "var(--fl-newsreader)",
    bodyVar: "var(--fl-geist)",
    kind: "Editorial serif display · grotesk body",
    take: "Modern editorial: a refined, readable serif headline over a clean grotesk body. Trust and storytelling, but more contemporary than Fraunces.",
  },
];

const HEADLINE = "We question, we explore, we envision, we transform.";
const DECLARATIVE = "Six platforms. One identity graph.";
const BODY =
  "Qeet Group is a multi-company holding built on a single philosophy: that meaningful progress begins with the right question. Each platform is built for what it is, and every one runs on the same identity graph.";

function Specimen({ p, n }: { p: Pairing; n: number }) {
  return (
    <article className="glass-panel rounded-3xl p-7 md:p-9">
      {/* Meta row in the BODY face. */}
      <header
        className="mb-7 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-b border-rule pb-5"
        style={{ fontFamily: p.bodyVar }}
      >
        <span
          className="font-mono text-[1.25rem] font-medium tabular-nums text-brand"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {String(n).padStart(2, "0")}
        </span>
        <h2 className="text-[1.5rem] font-semibold tracking-tight text-ink" style={{ fontFamily: p.displayVar }}>
          {p.display} <span className="text-ink-subtle">×</span> {p.body}
        </h2>
        {p.recommended && (
          <span className="rounded-full bg-brand px-2.5 py-0.5 font-mono text-[0.6875rem] uppercase tracking-widest text-canvas">
            Selected · live
          </span>
        )}
        <span className="font-mono text-caption uppercase tracking-widest text-ink-subtle" style={{ fontFamily: "var(--font-mono)" }}>
          {p.kind}
        </span>
        <span className="ml-auto font-mono text-caption uppercase tracking-widest text-ink-subtle" style={{ fontFamily: "var(--font-mono)" }}>
          Rank {p.rank} · free · self-host
        </span>
      </header>

      <p className="mb-8 max-w-2xl text-body-s text-ink-muted" style={{ fontFamily: p.bodyVar }}>
        {p.take}
      </p>

      {/* Hero statement — DISPLAY face. */}
      <p
        className="text-balance font-semibold tracking-tight text-ink text-[2rem] leading-[1.05] sm:text-[2.75rem] md:text-[3.25rem]"
        style={{ fontFamily: p.displayVar }}
      >
        {HEADLINE}
      </p>

      {/* Declarative line — DISPLAY face. */}
      <p className="mt-7 font-semibold tracking-tight text-ink text-[1.5rem] md:text-[2rem]" style={{ fontFamily: p.displayVar }}>
        {DECLARATIVE}
      </p>

      {/* Body — BODY face. */}
      <p className="mt-5 max-w-2xl text-ink-muted text-[1.0625rem] leading-[1.7]" style={{ fontFamily: p.bodyVar }}>
        {BODY}
      </p>

      {/* Numerals in the DISPLAY face — figure style matters for stats/counts. */}
      <p className="mt-6 text-[1.5rem] tracking-tight text-ink" style={{ fontFamily: p.displayVar }}>
        0123456789 — 6 platforms · 99.9% uptime · $1,250 · est. 2026
      </p>

      {/* Display weights. */}
      <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-3 border-t border-rule pt-6" style={{ fontFamily: p.displayVar }}>
        {[
          { w: 400, l: "Regular" },
          { w: 500, l: "Medium" },
          { w: 600, l: "Semibold" },
          { w: 700, l: "Bold" },
        ].map((x) => (
          <span key={x.w} className="flex items-baseline gap-2">
            <span className="text-[1.75rem] text-ink" style={{ fontWeight: x.w }}>
              Qeet Group
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-widest text-ink-subtle" style={{ fontFamily: "var(--font-mono)" }}>
              {x.w}
            </span>
          </span>
        ))}
      </div>

      {/* UI row: buttons in the BODY (UI) face + a constant mono line. */}
      <div className="mt-8 flex flex-wrap items-center gap-4" style={{ fontFamily: p.bodyVar }}>
        <span className="inline-flex h-11 items-center rounded-full bg-ink px-5 text-[0.9375rem] font-medium text-canvas">
          Explore products
        </span>
        <span className="inline-flex h-11 items-center rounded-full border border-rule-strong px-5 text-[0.9375rem] font-medium text-ink">
          Read our philosophy
        </span>
        <span className="font-mono text-body-s text-ink-subtle" style={{ fontFamily: "var(--font-mono)" }}>
          qeet-id · v1.0 · 200 OK · identity
        </span>
      </div>
    </article>
  );
}

export default function FontLabPage() {
  return (
    <div
      className={`${geist.variable} ${space.variable} ${jakarta.variable} ${sora.variable} ${schibsted.variable} ${fraunces.variable} ${inter.variable} ${plex.variable} ${manrope.variable} ${outfit.variable} ${archivo.variable} ${familjen.variable} ${newsreader.variable} ${plexSerif.variable} ${instrument.variable} ${playfair.variable} ${cormorant.variable} ${dmSerif.variable} ${youngSerif.variable} ${piazzolla.variable}`}
    >
      <Container>
        <div className="py-24 md:py-32">
          <Eyebrow className="mb-5">Internal · Font lab</Eyebrow>
          <h1 className="max-w-3xl text-balance font-display font-semibold tracking-tight text-ink text-[2.5rem] leading-[1.05] md:text-[3.25rem]">
            Choosing the type system
          </h1>
          <p className="mt-6 max-w-2xl text-body-l text-ink-muted">
            Two fonts per system — a display/heading face and a body face — each free and
            self-hostable, rendered in the real hero statement, body copy, weights, and UI. Toggle
            light/dark in the top bar. Mono stays Geist Mono throughout. The live site currently
            uses Fraunces × Cal Sans (marked “Selected · live”).
          </p>
          <p className="mt-4 font-mono text-caption uppercase tracking-widest text-ink-subtle">
            Rank A = top fit · B = strong · C = different direction (serif display)
          </p>

          <div className="mt-14 flex flex-col gap-7">
            {pairings.map((p, i) => (
              <Specimen key={`${p.display}-${p.body}`} p={p} n={i + 1} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
