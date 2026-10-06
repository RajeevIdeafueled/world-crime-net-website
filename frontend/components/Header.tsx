import Link from 'next/link';
import Image from 'next/image';
import type { SiteContent } from '@/lib/content';

export default function Header({ site }: { site: SiteContent }) {
  return (
    <header className="site-header">
      <nav className="nav-left">
        {site.headerNavigation.map((item) => <Link key={item.key} href={item.href}>{item.label}</Link>)}
      </nav>
      <Link href="/" className="brand" aria-label={site.copy['brand.homeLabel']}>
        <Image
          src={site.designSystem.logoUrl || '/world-crime-net-logo.png'}
          alt={site.copy['brand.name']}
          width={64}
          height={64}
          unoptimized
          priority
        />
      </Link>
      <div className="nav-actions">
        <button className="icon-button" aria-label={site.copy['nav.searchLabel']}>⌕</button>
        <Link className="button button-small" href="/#newsletter">{site.copy['nav.subscribe']}</Link>
        <button className="lang" aria-label={site.copy['nav.language']}>◎ {site.copy['nav.language']}⌄</button>
      </div>
    </header>
  );
}
