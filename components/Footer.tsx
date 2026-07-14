export default function Footer() {
  return (
    <footer className="py-8 border-t border-border1">
      <div className="container mx-auto max-w-[1160px] px-6">
        <p className="text-center text-sm text-text2">
          <span className="text-red">[</span>atlas<span className="text-red">.</span>dev
          <span className="text-red">]</span> &nbsp;·&nbsp; Victor William &nbsp;·&nbsp; Next.js ·
          TypeScript · Tailwind &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
