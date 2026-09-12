import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { contact } from "@/data/site";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="section-shell reveal">
        <SectionHeading eyebrow="Contact" title={contact.heading} copy={contact.description} />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div className="min-w-0 space-y-3">
            <Row href={`mailto:${contact.email}`} label="Email" value={contact.email}>
              <Mail />
            </Row>
            <Row href={`tel:${contact.phone.replace(/\s/g, "")}`} label="Phone" value={contact.phone}>
              <Phone />
            </Row>
            <Row href={contact.github} label="GitHub" value="github.com/Saitejare">
              <Github />
            </Row>
            <Row href={contact.linkedin} label="LinkedIn" value="kurapati-saiteja-reddy">
              <Linkedin />
            </Row>
          </div>
          <div className="surface min-w-0 rounded-2xl p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  href,
  label,
  value,
  children,
}: {
  href: string;
  label: string;
  value: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="surface card-lift flex items-center gap-4 rounded-xl p-4"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-primary/35 bg-primary/10 text-primary [&_svg]:size-4">
        {children}
      </span>
      <span className="min-w-0">
        <span className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="block truncate text-sm font-medium">{value}</span>
      </span>
    </a>
  );
}
