import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/projects";
import Badge from "@/components/ui/Badge";
import StoreLinks from "@/components/ui/StoreLinks";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm text-muted">
        <Link href="/projects" className="hover:text-foreground transition-colors">
          Projects
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{project.name}</span>
      </nav>

      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold">{project.name}</h1>
        <p className="mt-1 text-lg text-accent">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>{project.period}</span>
          <span>&middot;</span>
          <span>{project.role}</span>
        </div>
        <div className="mt-4">
          <StoreLinks
            playStore={project.storeLinks.playStore}
            appStore={project.storeLinks.appStore}
          />
        </div>
      </header>

      {/* Description */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Overview</h2>
        <p className="mt-3 leading-relaxed text-muted">{project.description}</p>
      </section>

      {/* Tech Stack */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Architecture</h2>
        <p className="mt-3 leading-relaxed text-muted">{project.architecture}</p>
      </section>

      {/* Key Features */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Key Features</h2>
        <ul className="mt-3 space-y-2">
          {project.features.map((feature, i) => (
            <li key={i} className="flex gap-3 text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Technical Challenges */}
      {project.challenges.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xl font-semibold">Technical Challenges</h2>
          <div className="mt-4 space-y-6">
            {project.challenges.map((challenge, i) => (
              <div key={i} className="rounded-lg border border-border p-5">
                <h3 className="font-medium">{challenge.title}</h3>
                <div className="mt-3 space-y-2 text-sm text-muted">
                  <div>
                    <span className="font-medium text-red-400">Problem: </span>
                    {challenge.problem}
                  </div>
                  <div>
                    <span className="font-medium text-green-400">Solution: </span>
                    {challenge.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Screenshot Placeholder */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Screenshots</h2>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="flex aspect-[9/16] items-center justify-center rounded-lg border border-border bg-card text-xs text-muted"
            >
              Coming Soon
            </div>
          ))}
        </div>
      </section>

      {/* Back link */}
      <div className="mt-12">
        <Link
          href="/projects"
          className="text-sm text-muted transition-colors hover:text-accent"
        >
          &larr; Back to projects
        </Link>
      </div>
    </div>
  );
}
