export function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border)] py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex justify-center">
          <p className="text-[var(--text-muted)] font-light text-sm text-center">
            © {new Date().getFullYear()} Jefel Española
          </p>
        </div>
      </div>
    </footer>
  );
}