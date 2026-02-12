import type { Metadata } from "next";
import { projects } from "@/content/projects";
import ProjectCard from "@/components/ui/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Published mobile applications built end-to-end.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <p className="mt-2 text-muted">
        Published mobile applications — designed, developed, and shipped
        end-to-end as a solo developer.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
