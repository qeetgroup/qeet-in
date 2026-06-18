import { Section } from "../layout/Section";
import { Eyebrow } from "../ui/Eyebrow";
import { FadeRise } from "../motion/FadeRise";

/**
 * A short, signed note from leadership — the holding-company pattern
 * (Berkshire's "Message from the Chairman", Alphabet's founders' letter).
 * Replaces the standalone pull-quote so the page has one founder voice.
 */
export function FoundersNote() {
  return (
    <Section className="border-t border-rule">
      <FadeRise>
        <div className="max-w-3xl">
          <Eyebrow>A note from the founders</Eyebrow>
          <div className="mt-8 space-y-6 font-serif font-normal text-balance tracking-[-0.01em] text-ink text-[1.5rem] leading-[1.38] md:mt-10 md:text-[1.875rem] md:leading-[1.36]">
            <p>
              The best companies begin from the right question, asked early — and chased for years,
              not quarters.
            </p>
            <p>
              We&rsquo;re building a family of products on one identity graph, in the open, for the
              long term. Vision is decoration until it ships; the point is to deliver the future we
              said we&rsquo;d build, on the timeline we said we&rsquo;d build it.
            </p>
          </div>
          <p className="mt-8 font-sans text-caption font-medium uppercase tracking-[0.14em] text-ink-subtle md:mt-10">
            — The founding team · Qeet Group
          </p>
        </div>
      </FadeRise>
    </Section>
  );
}
