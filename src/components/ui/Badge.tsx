export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-card px-3 py-1 text-xs text-muted">
      {children}
    </span>
  );
}
