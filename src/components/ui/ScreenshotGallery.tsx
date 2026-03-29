"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export default function ScreenshotGallery({
  screenshots,
  projectName,
}: {
  screenshots: string[];
  projectName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i !== null ? (i - 1 + screenshots.length) % screenshots.length : null
      ),
    [screenshots.length]
  );
  const next = useCallback(
    () =>
      setOpenIndex((i) =>
        i !== null ? (i + 1) % screenshots.length : null
      ),
    [screenshots.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [openIndex, close, prev, next]);

  return (
    <>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="flex h-64 cursor-pointer items-center justify-center rounded-lg border border-border bg-card transition-colors hover:border-accent/40"
          >
            <Image
              src={src}
              alt={`${projectName} screenshot ${i + 1}`}
              width={400}
              height={600}
              className="h-full w-full rounded-lg object-contain"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} screenshot gallery`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={close}
        >
          {/* Close button */}
          <button
            aria-label="Close gallery"
            onClick={close}
            className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
          >
            &times;
          </button>

          {/* Previous */}
          <button
            aria-label="Previous screenshot"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
          >
            &#8249;
          </button>

          {/* Image */}
          <Image
            src={screenshots[openIndex]}
            alt={`${projectName} screenshot ${openIndex + 1}`}
            width={800}
            height={1200}
            className="max-h-[75vh] max-w-[75vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            aria-label="Next screenshot"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-colors hover:bg-white/20"
          >
            &#8250;
          </button>

          {/* Counter */}
          <span className="absolute bottom-6 text-sm text-white/50">
            {openIndex + 1} / {screenshots.length}
          </span>
        </div>,
        document.body
      )}
    </>
  );
}
