import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { projects } from "@/content/projects";
import { experiences } from "@/content/experience";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="pb-16 pt-20 sm:pt-28">
        <p className="text-sm font-medium text-accent">Hello, I&apos;m</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-2 text-xl text-muted">{siteConfig.title}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {siteConfig.description}
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Published Apps</h2>
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Career Summary */}
      <section className="pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Experience</h2>
          <Link
            href="/career"
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            Full history &rarr;
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="flex flex-col justify-between gap-1 rounded-lg border border-border p-4 sm:flex-row sm:items-center"
            >
              <div>
                <h3 className="font-medium">{exp.role}</h3>
                <p className="text-sm text-muted">{exp.company}</p>
              </div>
              <div className="text-sm text-muted">
                <span>{exp.period}</span>
                <span className="mx-2 hidden sm:inline">&middot;</span>
                <span className="block sm:inline">{exp.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
