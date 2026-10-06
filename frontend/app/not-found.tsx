import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getSiteContent } from '@/lib/content';

export default async function NotFound() {
  const site = await getSiteContent();

  return (
    <main>
      <div className="story-header-wrap"><Header site={site} /></div>
      <section className="trending">
        <div className="topics-intro">
          <div>
            <span className="eyebrow accent">404</span>
            <h1>{site.copy['notFound.title']}</h1>
          </div>
          <p>{site.copy['notFound.description']}</p>
        </div>
        <Link className="button" href="/">{site.copy['notFound.cta']}</Link>
      </section>
      <Footer site={site} />
    </main>
  );
}