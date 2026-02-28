import type { Metadata } from "next";
import { experiences } from "@/content/experience";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Career",
  description: "Professional experience across US and Korean markets.",
};

export default function CareerPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <AnimateOnScroll>
        <h1 className="text-3xl font-bold">Career</h1>
        <p className="mt-2 text-muted">
          7+ years of professional software engineering experience across the US
          and South Korea.
        </p>
      </AnimateOnScroll>

      <div className="relative mt-10">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 h-[calc(100%-16px)] w-px bg-border" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={exp.company} delay={i * 120}>
              <div className="relative pl-8">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 h-[15px] w-[15px] rounded-full border-2 ${
                    i === 0
                      ? "border-accent bg-accent"
                      : "border-border bg-background"
                  }`}
                />

                <div>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-lg font-semibold">{exp.role}</h2>
                    <span className="text-sm text-muted">{exp.period}</span>
                  </div>
                  <p className="text-muted">
                    {exp.company}{" "}
                    <span className="text-sm">— {exp.location}</span>
                  </p>
                  <ul className="mt-3 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
