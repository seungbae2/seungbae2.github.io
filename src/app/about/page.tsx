import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "About",
  description: "About Sungbae Lee — Mobile Software Engineer.",
};

const techStack = {
  "Mobile": ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Swift/iOS"],
  "Architecture": [
    "Clean Architecture",
    "MVVM",
    "Multi-Module",
    "Riverpod",
    "Hilt/Dagger",
  ],
  "Data & Backend": [
    "SQLite/Drift/Room",
    "Firebase",
    "Supabase",
    "REST API",
    "Retrofit",
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub Actions",
    "Jenkins",
    "Fastlane",
    "Play Console",
    "App Store Connect",
  ],
  "Languages": ["Kotlin", "Dart", "TypeScript", "Java", "PHP", "C++"],
};

const certifications = [
  {
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2021",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">About Me</h1>

      <section className="mt-8 space-y-4 leading-relaxed text-muted">
        <p>
          I&apos;m a mobile software engineer with 7+ years of experience
          shipping products across the United States and South Korea. I
          specialize in building offline-first mobile applications with Clean
          Architecture, ensuring reliability and performance even without network
          connectivity.
        </p>
        <p>
          My professional journey spans surveillance systems, e-commerce
          platforms, ed-tech products, and AR collaboration tools. Most recently,
          I&apos;ve been independently building and publishing Flutter apps on
          both Google Play and the App Store — handling everything from
          architecture design and database optimization to store deployment and
          analytics integration.
        </p>
        <p>
          I care deeply about code quality, maintainable architecture, and
          delivering real value to users. Every project I build follows strict
          Clean Architecture principles with clear layer separation, type-safe
          patterns, and comprehensive error handling.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Tech Stack</h2>
        <div className="mt-4 space-y-4">
          {Object.entries(techStack).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-muted">{category}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {techs.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Certifications</h2>
        <div className="mt-4 space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="rounded-lg border border-border p-4"
            >
              <h3 className="font-medium">{cert.name}</h3>
              <p className="text-sm text-muted">
                {cert.issuer} — {cert.date}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p className="mt-3 text-muted">
          I&apos;m open to senior mobile engineering roles, especially
          positions focused on Android/Flutter development with clean
          architecture practices.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.links.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Email Me
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
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-foreground"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
