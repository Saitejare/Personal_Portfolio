import { SectionHeading } from "@/components/section-heading";
import { about } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell reveal">
        <SectionHeading eyebrow="About" title="A short introduction" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
          <div className="min-w-0 space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="surface h-fit rounded-2xl p-6">
            <p className="eyebrow">Profile</p>
            <dl className="mt-5 divide-y divide-border">
              {about.card.map(([label, value]) => (
                <div key={label} className="grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] gap-4 py-3">
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
                  <dd className="text-right text-sm font-medium">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
