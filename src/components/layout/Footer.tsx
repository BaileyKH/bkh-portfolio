export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="font-mono text-xs text-mist">
          <span className="text-brew">Bailey Henderson</span> © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-mist">
          Built with Next.js &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
