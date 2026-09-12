import { BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/data/site";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell reveal">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          copy="The languages, libraries, platforms, and SAP technologies I use to build and ship projects."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className={cn(
                "card-lift rounded-xl border p-5",
                group.highlight ? "border-primary/45 bg-primary/[0.06]" : "surface",
              )}
            >
              <h3 className="font-display text-sm font-semibold">{group.title}</h3>
              {group.badge && (
                <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary">
                  <BadgeCheck className="size-3" /> {group.badge}
                </p>
              )}
              <span aria-hidden className="hairline mt-3 block" />
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-muted/50 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {group.note && <p className="mt-4 text-xs leading-5 text-muted-foreground">{group.note}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
