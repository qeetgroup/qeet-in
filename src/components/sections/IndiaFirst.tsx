import type { ReactNode } from "react";
import { Section } from "../layout/Section";
import { SectionHeader } from "../ui/SectionHeader";
import { FadeRise } from "../motion/FadeRise";

function Icon({ d }: { d: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const badges = ["GST e-invoice", "UPI / NACH", "DPDP", "TRAI DLT", "WhatsApp-native", "10 languages"];

const pillars: Array<{ icon: ReactNode; title: string; body: string }> = [
  {
    icon: <Icon d="M7 3h10v18l-2-1.5L13 21l-2-1.5L9 21l-2-1.5V3zM9 8h6M9 12h6" />,
    title: "Statutory, by default",
    body: "GST e-invoicing (IRN), TRAI DLT messaging, and PF/ESI/TDS payroll — handled as architecture, not add-ons.",
  },
  {
    icon: <Icon d="M3 7h18v10H3zM3 11h18M7 15h3" />,
    title: "India's payment rails",
    body: "UPI, NACH, and cards — built for how India actually pays and gets paid.",
  },
  {
    icon: <Icon d="M5 5h14v10H9l-4 3V5z M9 9h6M9 12h3" />,
    title: "WhatsApp-native",
    body: "Sign-in, billing, and notifications where your customers and teams already are.",
  },
  {
    icon: <Icon d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />,
    title: "Ten regional languages",
    body: "From the C-suite to the factory floor — with data that stays in India by design.",
  },
];

export function IndiaFirst() {
  return (
    <Section className="border-t border-rule">
      <FadeRise>
        <SectionHeader
          index="02"
          eyebrow="India-first"
          title="Built for India, from the ground up."
          description="Most platforms treat India as a localization afterthought. We start here — the compliance, rails, and languages others bolt on later are first-class for us."
        />
      </FadeRise>

      <FadeRise className="mt-8">
        <div className="flex flex-wrap gap-2.5">
          {badges.map((b) => (
            <span
              key={b}
              className="rounded-full border border-rule bg-surface px-3 py-1 font-sans text-caption font-medium text-ink-muted"
            >
              {b}
            </span>
          ))}
        </div>
      </FadeRise>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <FadeRise key={p.title} delay={(i % 4) * 0.06}>
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-rule bg-surface text-ink">
                {p.icon}
              </span>
              <h3 className="mt-4 font-sans font-medium tracking-[-0.01em] text-ink text-[1.0625rem]">
                {p.title}
              </h3>
              <p className="mt-1.5 text-body-s text-ink-muted">{p.body}</p>
            </div>
          </FadeRise>
        ))}
      </div>
    </Section>
  );
}
