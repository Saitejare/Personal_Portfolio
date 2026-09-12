import { useMemo, useState } from "react";
import { Award, ChevronLeft, ChevronRight, ImageOff, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/section-heading";
import {
  achievementList,
  certificationCategories,
  certificationList,
  type Certification,
} from "@/data/site";

export function AchievementsSection() {
  const [filter, setFilter] = useState<(typeof certificationCategories)[number]>("All");
  const [selected, setSelected] = useState<Certification | null>(null);
  const visible = useMemo(
    () => certificationList.filter((item) => filter === "All" || item.category === filter),
    [filter],
  );

  function move(direction: -1 | 1) {
    if (!selected) return;
    const index = certificationList.findIndex((item) => item.name === selected.name);
    const next = (index + direction + certificationList.length) % certificationList.length;
    const nextCertificate = certificationList[next];
    if (nextCertificate) setSelected(nextCertificate);
  }

  return (
    <section id="achievements" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell reveal">
        <SectionHeading
          eyebrow="Recognition"
          title="Certifications and achievements"
          copy="Verified learning milestones across AI, programming, data, and competitive computing."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {achievementList.map((item, index) => (
            <article key={item} className="relative overflow-hidden rounded-xl border border-primary/35 bg-primary/[0.07] p-5">
              <div className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <Trophy className="size-5" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-primary">Achievement 0{index + 1}</p>
                  <p className="mt-2 text-sm font-semibold leading-6">{item}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2" aria-label="Filter certificates">
          {certificationCategories.map((category) => (
            <Button
              key={category}
              size="sm"
              variant={filter === category ? "default" : "quiet"}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((certificate) => (
            <article key={certificate.name} className="surface card-lift flex min-w-0 flex-col overflow-hidden rounded-xl">
              <button
                type="button"
                onClick={() => setSelected(certificate)}
                className="group relative grid aspect-[16/10] w-full cursor-pointer place-items-center overflow-hidden border-b border-border bg-muted/35"
                aria-label={`View ${certificate.name}`}
              >
                {certificate.image ? (
                  <img src={certificate.image} alt={`${certificate.name} certificate`} className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" loading="lazy" />
                ) : (
                  <CertificatePlaceholder />
                )}
              </button>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-primary">{certificate.issuer}</p>
                <h3 className="mt-2 text-sm font-semibold leading-6">{certificate.name}</h3>
                {certificate.date && <p className="mt-2 text-xs text-muted-foreground">{certificate.date}</p>}
                {certificate.description && <p className="mt-3 line-clamp-3 text-xs leading-5 text-muted-foreground">{certificate.description}</p>}
                {certificate.credential && <p className="mt-2 font-mono text-[10px] text-muted-foreground">{certificate.credential}</p>}
                <Button size="sm" variant="quiet" className="mt-5 w-fit" onClick={() => setSelected(certificate)}>
                  <Award /> View Certificate
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto p-4 sm:p-6">
          {selected && (
            <>
              <DialogHeader className="pr-8">
                <DialogTitle className="font-display text-lg leading-snug sm:text-xl">{selected.name}</DialogTitle>
                <DialogDescription>
                  {selected.issuer}{selected.date ? ` · ${selected.date}` : ""}
                </DialogDescription>
              </DialogHeader>
              <div className="grid min-h-72 place-items-center overflow-hidden rounded-lg border border-border bg-muted/30 sm:min-h-96">
                {selected.image ? (
                  <img src={selected.image} alt={`${selected.name} certificate`} className="max-h-[62vh] w-full object-contain" />
                ) : (
                  <CertificatePlaceholder large />
                )}
              </div>
              <div className="flex items-center justify-between gap-3">
                <Button variant="quiet" size="sm" onClick={() => move(-1)} aria-label="Previous certificate">
                  <ChevronLeft /> Previous
                </Button>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {certificationList.findIndex((item) => item.name === selected.name) + 1} / {certificationList.length}
                </span>
                <Button variant="quiet" size="sm" onClick={() => move(1)} aria-label="Next certificate">
                  Next <ChevronRight />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function CertificatePlaceholder({ large = false }: { large?: boolean }) {
  return (
    <div className="flex max-w-xs flex-col items-center px-6 text-center text-muted-foreground">
      <span className={`grid place-items-center rounded-xl border border-border bg-background/60 ${large ? "size-16" : "size-12"}`}>
        <ImageOff className={large ? "size-7" : "size-5"} />
      </span>
      <p className="mt-3 text-xs font-medium">Certificate image not uploaded</p>
    </div>
  );
}
