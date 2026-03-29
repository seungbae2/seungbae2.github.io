import Link from "next/link";
import type { Project } from "@/lib/types";
import Badge from "./Badge";
import StoreLinks from "./StoreLinks";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card-hover group relative flex h-full flex-col rounded-xl border border-border bg-card p-6 hover:border-accent/40 hover:bg-card-hover">
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-0"
        aria-label={`View ${project.name} details`}
      />

      {/* Thumbnail or gradient placeholder */}
      <div className="mb-4 flex h-40 items-center justify-center overflow-hidden rounded-lg bg-background">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 to-accent/5">
            <span className="text-4xl font-bold text-accent/30">
              {project.name.charAt(0)}
            </span>
          </div>
        )}
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
