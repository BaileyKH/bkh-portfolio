export default function Footer() {
  return (
    <footer className="border-t border-bone/10 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <p className="font-mono text-xs text-mist">
          <span className="text-brew">Bailey Henderson</span> © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
