import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/portfolio";
import { hero } from "@/data/site";
import profileAsset from "@/assets/saiteja-profile-new.png.asset.json";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
      <div className="section-shell grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16 lg:py-28">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 font-mono text-[11px] text-primary">
            <span className="size-1.5 rounded-full bg-primary" />
            {hero.badge}
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {hero.greeting}
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[13px] text-muted-foreground">
            {hero.roles.map((role, index) => (
              <span key={role} className="flex items-center gap-3">
                {index > 0 && <span className="text-border">|</span>}
                <span className={index === 0 ? "text-primary" : undefined}>{role}</span>
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {hero.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="signal" size="lg">
              <a href="#projects">
                View My Work <ArrowRight />
              </a>
            </Button>
            <Button asChild variant="quiet" size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
            <div className="flex items-center gap-2">
              <Social href={profile.github} label="GitHub">
                <Github />
              </Social>
              <Social href={profile.linkedin} label="LinkedIn">
                <Linkedin />
              </Social>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="surface overflow-hidden rounded-2xl">
              <img
                src={profileAsset.url}
                alt="Portrait of Kurapati Sai Teja"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
          </div>
          <div className="surface absolute -bottom-5 left-5 rounded-xl px-4 py-3 backdrop-blur-md">
            <p className="text-sm font-semibold text-primary">AI + SAP</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid size-10 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary [&_svg]:size-4"
    >
      {children}
    </a>
  );
}
