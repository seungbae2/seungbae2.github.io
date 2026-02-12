import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical articles and engineering insights.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">Blog</h1>
      <p className="mt-2 text-muted">
        Technical articles, engineering insights, and lessons learned from
        building mobile applications.
      </p>

      <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-dashed border-border py-20">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-muted"
        >
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
        </svg>
        <p className="mt-4 text-muted">Coming soon</p>
        <p className="mt-1 text-sm text-muted">
          Articles on Clean Architecture, Flutter, and mobile engineering.
        </p>
      </div>
    </div>
  );
}
