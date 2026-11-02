import { useState } from "react";
import { ArrowUpRight, Github, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SectionHeading } from "@/components/section-heading";
import { allProjects, featuredProjects, type Featured } from "@/data/site";

export function ProjectsSection() {
  const [detail, setDetail] = useState<Featured | null>(null);
  const [allOpen, setAllOpen] = useState(false);

  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24">
      <div className="section-shell reveal">
        <SectionHeading
          eyebrow="Projects"
          title="Featured projects"
          copy="Three projects that best represent how I build AI and machine learning systems."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
              className="surface card-lift group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="overflow-hidden border-b border-border">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold leading-snug">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md border border-border bg-muted/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  <Button size="sm" variant="quiet" onClick={() => setDetail(project)}>
                    View details
                  </Button>
                  {project.github && (
                    <Button asChild size="sm" variant="ghost">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github /> GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Button variant="quiet" onClick={() => setAllOpen(true)}>
            <LayoutGrid /> View All Projects
          </Button>
        </div>
      </div>

      <Dialog open={detail !== null} onOpenChange={(value) => !value && setDetail(null)}>
        <DialogContent className="max-h-[88vh] max-w-2xl overflow-y-auto">
          {detail && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-xl">{detail.title}</DialogTitle>
              </DialogHeader>
              <img
                src={detail.image}
                alt=""
                className="aspect-[16/9] w-full rounded-xl border border-border object-cover"
              />
              <p className="text-sm leading-7 text-muted-foreground">{detail.description}</p>
              <ul className="flex flex-wrap gap-1.5">
                {detail.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-border bg-muted/60 px-2 py-1 font-mono text-[10px] text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              {detail.details.map((block) => (
                <div key={block.heading}>
                  <p className="eyebrow">{block.heading}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {detail.github && (
                <Button asChild variant="quiet" size="sm" className="w-fit">
                  <a href={detail.github} target="_blank" rel="noreferrer">
                    <Github /> Open repository
                  </a>
                </Button>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={allOpen} onOpenChange={setAllOpen}>
        <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">All projects</DialogTitle>
          </DialogHeader>
          <ul className="grid gap-3 sm:grid-cols-2">
            {allProjects.map((project) => (
              <li key={project.slug} className="surface card-lift rounded-xl p-4">
                <p className="font-display text-sm font-semibold">{project.title}</p>
                <p className="mt-2 text-xs leading-6 text-muted-foreground">{project.summary}</p>
                <p className="mt-3 font-mono text-[10px] text-muted-foreground">
                  {project.technologies.slice(0, 4).join(" · ")}
                </p>
                <div className="mt-3 flex gap-3 text-xs">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary hover:underline"
                  >
                    GitHub <ArrowUpRight className="size-3" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      Live demo <ArrowUpRight className="size-3" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </section>
  );
}
