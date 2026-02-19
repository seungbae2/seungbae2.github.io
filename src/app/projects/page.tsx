import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Published mobile apps and open-source projects built end-to-end.",
};

export default function ProjectsPage() {
  const published = projects.filter((p) => p.category === "published");
  const opensource = projects.filter((p) => p.category === "opensource");

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-muted">
        Mobile apps and open-source projects — designed, developed, and shipped
        end-to-end as a solo developer.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Published Apps</h2>
        <p className="mt-1 text-sm text-muted">
          Production apps available on the App Store and Google Play.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {published.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-xl font-semibold">Open Source</h2>
        <p className="mt-1 text-sm text-muted">
          Personal projects and experiments shared on GitHub.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {opensource.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
