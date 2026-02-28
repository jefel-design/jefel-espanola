export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div className="flex justify-center">
          <p className="text-white/50 text-sm text-center">
            © {new Date().getFullYear()} Jefel John Española
          </p>
        </div>
      </div>
    </footer>
  );
}