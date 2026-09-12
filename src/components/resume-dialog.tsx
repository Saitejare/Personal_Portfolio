import { Printer, Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { profile, education } from "@/data/portfolio";
import { certificationList } from "@/data/site";

const headline = "AI/ML Engineer | Python Developer | SAP ABAP Backend Developer";

const summary =
  "B.Tech student specializing in Artificial Intelligence and Machine Learning. I enjoy building practical AI applications, machine learning models, and backend systems. My current focus is integrating SAP ABAP backend development with Artificial Intelligence to build intelligent enterprise applications.";

const resumeSkills: { title: string; items: string[] }[] = [
  { title: "Programming", items: ["Python", "C", "SQL", "Java (Basic)"] },
  {
    title: "AI & Machine Learning",
    items: ["Machine Learning", "Deep Learning", "Neural Networks", "NLP", "Scikit-learn", "TensorFlow", "OpenCV"],
  },
  {
    title: "Generative AI",
    items: ["Generative AI", "LLMs", "RAG", "LangChain", "FAISS", "Embeddings", "Vector Search", "Prompt Engineering", "MCP"],
  },
  { title: "Backend Development", items: ["Python Backend Development", "Flask", "REST APIs"] },
  { title: "SAP", items: ["SAP ABAP", "SAP HANA", "SAP S/4HANA", "ABAP Development Tools (ADT)", "Open SQL", "CDS Views"] },
  { title: "Databases", items: ["MySQL", "MongoDB", "Firebase"] },
  { title: "AI Tools & Automation", items: ["n8n", "Groq", "Kokoro TTS", "Speech Recognition", "LLM API Integration"] },
  {
    title: "Tools & Deployment",
    items: ["Git", "GitHub", "Google Cloud Platform", "Google Colab", "VS Code", "Jupyter Notebook", "Render", "Netlify", "Vercel"],
  },
];

const resumeProjects = [
  {
    name: "RAG-Based Question Answering System",
    description: "Answers questions from uploaded documents using embeddings, vector search, and a language model.",
    technologies: ["Python", "LangChain", "Hugging Face", "FAISS"],
    github: "https://github.com/Saitejare/RAG-Based-Question-Answering-System.git",
  },
  {
    name: "Zora — Smart AI Desktop Assistant",
    description: "Voice-controlled desktop AI assistant that responds and automates desktop and web tasks.",
    technologies: ["Python", "Speech Recognition", "Groq", "Kokoro TTS"],
    github: "https://github.com/Saitejare/ZORA_AI_ASSISTENT.",
  },
  {
    name: "Boston House Price Prediction",
    description: "Machine learning model that predicts house prices from engineered features.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/Saitejare/Boston_house_price_prediction",
  },
];

const resumeAchievements = [
  "Secured Global Rank 3479 in TCS CodeVita Season 13.",
  "Secured 4th rank in India in NVIDIA's 10-Day GPU Accelerated Computing Codeathon.",
  "Achieved 97th global rank in IEEE Xtreme 18.0.",
  "Selected for the internal Smart India Hackathon and served as Team Lead.",
];

const resumeCertifications = [
  ...certificationList.map((c) => ({ name: c.name, issuer: c.issuer, date: c.date, image: c.image })),
  { name: "SAP ABAP Backend Developer Certification", issuer: "", date: undefined as string | undefined, image: undefined as string | undefined },
];

export function ResumeDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (value: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto p-0">
        <div className="space-y-6 p-6 sm:p-8">
          {/* Header */}
          <header className="space-y-3">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">{profile.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{headline}</p>
              </div>
              <Button variant="quiet" size="sm" className="no-print" onClick={() => window.print()}>
                <Printer />
                Download PDF
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Mail className="size-3.5" />{profile.email}</span>
              <span className="inline-flex items-center gap-1.5"><Phone className="size-3.5" />{profile.phone}</span>
              <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{profile.location}</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Linkedin className="size-3.5" />LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                <Github className="size-3.5" />GitHub
              </a>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>
          </header>

          {/* Education */}
          <Section title="Education">
            <ol className="relative space-y-4 border-l border-border pl-5">
              {education.map((item) => (
                <li key={item.degree} className="relative">
                  <span className="absolute -left-[1.42rem] top-1.5 size-2 rounded-full bg-primary" />
                  <p className="text-sm font-medium">{item.degree}</p>
                  <p className="text-xs text-muted-foreground">{item.institution}</p>
                  <p className="text-xs text-muted-foreground">{item.dates} · {item.details}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* Skills */}
          <Section title="Technical Skills">
            <div className="space-y-3">
              {resumeSkills.map((group) => (
                <div key={group.title}>
                  <p className="mb-1.5 text-xs font-semibold text-foreground">{group.title}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 text-[11px] text-muted-foreground">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Projects">
            <ul className="space-y-3">
              {resumeProjects.map((project) => (
                <li key={project.name}>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{project.name}</p>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="no-print inline-flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        GitHub <ExternalLink className="size-3" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">{project.description}</p>
                  <p className="text-xs text-muted-foreground/80">{project.technologies.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Achievements */}
          <Section title="Achievements">
            <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              {resumeAchievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            <div className="grid gap-2 sm:grid-cols-2">
              {resumeCertifications.map((cert) => (
                <div key={cert.name} className="rounded-lg border border-border bg-secondary/20 p-3">
                  <p className="text-xs font-medium leading-snug">{cert.name}</p>
                  {cert.issuer && <p className="mt-0.5 text-[11px] text-muted-foreground">{cert.issuer}</p>}
                  {cert.date && <p className="text-[11px] text-muted-foreground/70">{cert.date}</p>}
                  {cert.image && (
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noreferrer"
                      className="no-print mt-1.5 inline-flex items-center gap-1 text-[11px] text-primary hover:underline"
                    >
                      View Certificate <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-4">
      <h3 className="eyebrow mb-3">{title}</h3>
      {children}
    </section>
  );
}
