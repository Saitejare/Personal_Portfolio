import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ResumeDialog } from "@/components/resume-dialog";
import { navSections } from "@/data/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [active, setActive] = useState<string>("home");
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const next = saved ? saved === "dark" : true;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    navSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="no-print sticky top-0 z-50 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <div className="section-shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-3 lg:flex">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-primary/40 bg-primary/10 font-mono text-[11px] font-semibold tracking-tight text-primary">
            KST
          </span>
          <span className="truncate font-display text-sm font-semibold">Sai Teja</span>
        </a>

        <nav
          className="ml-auto hidden items-center gap-0.5 lg:flex"
          aria-label="Section navigation"
        >
          {navSections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "true" : undefined}
              className={`rounded-md px-3 py-2 text-[13px] transition-colors ${
                active === id ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:ml-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle color theme">
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button
            variant="quiet"
            size="sm"
            className="hidden sm:inline-flex"
            onClick={() => setResumeOpen(true)}
          >
            <FileText />
            Resume
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav
          className="section-shell grid gap-1 border-t border-border py-3 lg:hidden"
          aria-label="Mobile navigation"
        >
          {navSections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <button
            type="button"
            className="rounded-md px-3 py-2.5 text-left text-sm text-primary"
            onClick={() => {
              setOpen(false);
              setResumeOpen(true);
            }}
          >
            Resume
          </button>
        </nav>
      )}

      <ResumeDialog open={resumeOpen} onOpenChange={setResumeOpen} />
    </header>
  );
}
