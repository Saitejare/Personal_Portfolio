import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { journeyStages } from "@/data/site";
import { cn } from "@/lib/utils";

export function JourneySection() {
  const [openStep, setOpenStep] = useState<string | null>("09");

  return (
    <section id="journey" className="border-b border-border py-16 sm:py-20">
      <div className="section-shell reveal">
        <SectionHeading
          eyebrow="Journey"
          title="My Engineering Journey"
          copy="From programming fundamentals to SAP ABAP backend development and AI."
        />

        <ol className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch">
          {journeyStages.map((stage, index) => {
            const open = openStep === stage.step;
            return (
              <li key={stage.step} className="sm:min-w-[13rem] sm:flex-1">
                <div className="flex h-full items-stretch gap-3">
                  <div
                    className={cn(
                      "card-lift h-full w-full rounded-xl border p-4",
                      stage.current ? "border-primary/45 bg-primary/[0.07]" : "surface",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenStep(open ? null : stage.step)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-2 text-left"
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={cn(
                            "grid size-7 shrink-0 place-items-center rounded-full border font-mono text-[10px]",
                            stage.current
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-background text-muted-foreground",
                          )}
                        >
                          {stage.step}
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                          {stage.label}
                        </span>
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-4 shrink-0 text-muted-foreground transition-transform",
                          open && "rotate-180",
                        )}
                      />
                    </button>

                    <h3 className="mt-3 font-display text-sm font-semibold leading-snug">
                      {stage.title}
                    </h3>

                    {open && (
                      <div className="mt-3 space-y-3">
                        <p className="text-xs leading-6 text-muted-foreground">
                          {stage.description}
                        </p>
                        <ul className="flex flex-wrap gap-1.5">
                          {stage.technologies.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                        {stage.featuredProject && (
                          <p className="text-xs text-muted-foreground">
                            <span className="text-primary">Featured project:</span>{" "}
                            {stage.featuredProject}
                          </p>
                        )}
                        {stage.interests && (
                          <ul className="space-y-1.5 text-xs text-muted-foreground">
                            {stage.interests.map((interest) => (
                              <li key={interest} className="flex gap-2">
                                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary" />
                                {interest}
                              </li>
                            ))}
                          </ul>
                        )}
                        {stage.badge && (
                          <p
                            className={cn(
                              "inline-flex rounded-full border px-2.5 py-1 font-mono text-[10px]",
                              stage.current
                                ? "border-primary/40 bg-primary/10 text-primary"
                                : "border-border bg-muted/50 text-muted-foreground",
                            )}
                          >
                            {stage.badge}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                  {index < journeyStages.length - 1 && (
                    <ArrowRight
                      aria-hidden
                      className="hidden size-4 shrink-0 self-center text-primary/60 sm:block"
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
