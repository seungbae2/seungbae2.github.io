export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-border/50 bg-card px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
