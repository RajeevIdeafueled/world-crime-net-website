import type { SiteContent } from '@/lib/content';

export default function Newsletter({ site }: { site: SiteContent }) {
  return (
    <section className="newsletter" id="newsletter">
      <div className="newsletter-inner">
      <div>
        <span className="eyebrow">{site.copy['newsletter.eyebrow']}</span>
        <h2>{site.copy['newsletter.title']}</h2>
        <p>{site.copy['newsletter.description']}</p>
        <form className="newsletter-form"><input aria-label={site.copy['newsletter.emailLabel']} type="email" placeholder={site.copy['newsletter.emailPlaceholder']}/><button type="submit">{site.copy['newsletter.submit']}</button></form>
        <small>{site.copy['newsletter.privacy']}</small>
      </div>
      <div className="megaphone" aria-hidden="true">
        <img src="/megaphone illustration.png" alt="Megaphone illustration" />
      </div>
    </div>
    </section>
  );
}
