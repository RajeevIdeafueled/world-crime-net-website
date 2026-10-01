import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav-left">
        <Link href="#stories">Stories</Link>
        <Link href="#topics">Topics</Link>
        <Link href="#documentaries">Documentaries</Link>
        <Link href="#about">About</Link>
      </nav>
      <Link href="/" className="brand" aria-label="World Crime Net home">
        <span className="brand-mark">W</span>
        <span className="brand-text">WORLD CRIME NET</span>
      </Link>
      <div className="nav-actions">
        <button className="icon-button" aria-label="Search">⌕</button>
        <a className="button button-small" href="#newsletter">Subscribe</a>
        <button className="lang">◎ EN⌄</button>
      </div>
    </header>
  );
}
