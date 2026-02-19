import Link from "next/link";
import type { Project } from "@/lib/types";
import Badge from "./Badge";
import StoreLinks from "./StoreLinks";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:bg-card-hover">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`View ${project.name} details`}
      />

      {/* Placeholder for screenshot */}
      <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-background text-muted">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
          {project.stack.length > 5 && (
            <Badge>+{project.stack.length - 5}</Badge>
          )}
        </div>
        <div className="relative z-10 mt-auto pt-4">
          <StoreLinks
            playStore={project.storeLinks.playStore}
            appStore={project.storeLinks.appStore}
            github={project.storeLinks.github}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}
