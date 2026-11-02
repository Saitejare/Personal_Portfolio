import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { navSections } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="no-print border-t border-border bg-card/30">
      <div className="section-shell grid gap-8 py-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <div className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-[11px] font-semibold text-primary">
              KST
            </span>
            <span className="font-display text-sm font-semibold">{profile.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
            AI/ML engineer and Python developer, currently exploring SAP backend development and
            SAP-integrated AI.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <IconLink href={profile.github} label="GitHub">
              <Github />
            </IconLink>
            <IconLink href={profile.linkedin} label="LinkedIn">
              <Linkedin />
            </IconLink>
            <IconLink href={`mailto:${profile.email}`} label="Email">
              <Mail />
            </IconLink>
          </div>
        </div>

        <nav aria-label="Footer navigation" className="min-w-0">
          <p className="eyebrow">Sections</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {navSections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="section-shell flex flex-col gap-2 border-t border-border py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono">Built with React, TanStack Start and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      aria-label={label}
      className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary [&_svg]:size-4"
    >
      {children}
    </a>
  );
}
