import Link from 'next/link';
import type { SiteContent } from '@/lib/content';

export default function Footer({ site }: { site: SiteContent }) {
  const copy = site?.copy ?? {};
  const brandName = copy['brand.name'] || 'World Crime Net';
  const copyright = copy['footer.copyright'] || '© {year} World Crime Net. All rights reserved.';

  const exploreLinks = site.footerPrimaryNavigation.length
    ? site.footerPrimaryNavigation
    : [
        { key: 'stories', label: 'All Stories', href: '/#stories' },
        { key: 'documentaries', label: 'Documentaries', href: '/#documentaries' },
        { key: 'topics', label: 'Topics', href: '/#topics' },
        { key: 'series', label: 'Series', href: '/#series' },
        { key: 'glossary', label: 'Glossary', href: '/#glossary' },
      ];

  const aboutLinks = site.footerSecondaryNavigation.length
    ? site.footerSecondaryNavigation
    : [
        { key: 'about-us', label: 'About Us', href: '#about' },
        { key: 'masthead', label: 'Masthead', href: '#about' },
        { key: 'contact', label: 'Contact', href: '#about' },
        { key: 'newsletter', label: 'Newsletter', href: '/#newsletter' },
      ];

  const socialLinks = [
    { key: 'instagram', label: 'Instagram', href: '#' },
    { key: 'x', label: 'X', href: '#' },
    { key: 'youtube', label: 'YouTube', href: '#' },
    { key: 'facebook', label: 'Facebook', href: '#' },
  ];

  const legalLinks = [
    { key: 'editorial-standards', label: 'Editorial Standards & Corrections', href: '#' },
    { key: 'privacy-policy', label: 'Privacy Policy', href: '#' },
    { key: 'terms', label: 'Terms of Use', href: '#' },
    { key: 'cookie-policy', label: 'Cookie Policy', href: '#' },
    { key: 'accessibility', label: 'Accessibility', href: '#' },
    { key: 'content-warnings', label: 'Content Warnings', href: '#' },
  ];

  return (
    <footer className="footer" id="about">
      <div className="footer-inner">
        <div className="footer-nav-grid">
          <div className="footer-column footer-explore-column">
            <h3>{copy['footer.explore'] || 'Explore'}</h3>
            <ul className="footer-list footer-explore-list">
              {exploreLinks.map((item) => (
                <li key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>{copy['footer.about'] || 'About'}</h3>
            <ul className="footer-list">
              {aboutLinks.map((item) => (
                <li key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>{copy['footer.social'] || 'Social'}</h3>
            <ul className="footer-list">
              {socialLinks.map((item) => (
                <li key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>{copy['footer.legal'] || 'Legal'}</h3>
            <ul className="footer-list">
              {legalLinks.map((item) => (
                <li key={item.key}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-rule" />

        <div className="footer-brand-lockup">{brandName}</div>

        <div className="footer-meta">
          <span>{copyright.replace('{year}', String(new Date().getFullYear()))}</span>
          <a href="#top" className="back-to-top">{copy['footer.backToTop'] || 'Go back to top'}</a>
        </div>
      </div>
    </footer>
  );
}
