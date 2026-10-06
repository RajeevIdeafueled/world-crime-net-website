import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import Newsletter from '@/components/Newsletter';
import AdSlot from '@/components/AdSlot';
import { getSiteContent, getStories, getTopics } from '@/lib/content';
import Link from 'next/link';

export default async function Home() {
  const [stories, topics, site] = await Promise.all([getStories(), getTopics(), getSiteContent()]);
  const featured = stories.find((s) => s.featured) || stories[0];
  return (
    <main id="top">
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.50), rgba(0,0,0,.2)), linear-gradient(180deg, transparent 65%, #0f0f0f), url(${featured.image})` }}>
        <Header site={site} />
        <div className="hero-content">
          <div className="eyebrow-row"><span className="eyebrow">{site.copy['home.hero.eyebrow']}</span><span>•</span><span className="eyebrow accent">{featured.topic}</span></div>
          <h1>{featured.title}</h1>
          <p>{featured.excerpt}</p>
          <Link className="button" href={`/stories/${featured.slug}`}>{site.copy['home.hero.cta']} →</Link>
        </div>
      </section>

      <section className="trending" id="stories">
        <div className="section-label-row"><span className="eyebrow">{site.copy['home.trending.title']}</span><span className="rule" /></div>
        <div className="card-grid four">{stories.slice(0, 4).map((s) => <StoryCard key={s.id} story={s} />)}</div>
      </section>

      <section className="topics" id="topics">
        <div className="topics-intro"><div><span className="eyebrow accent">{site.copy['home.topics.eyebrow']}</span><h2>{site.copy['home.topics.title']}</h2></div>
        <p>{site.copy['home.topics.description']}</p></div>
        <div className="topic-list">{topics.map((topic, i) => <Link key={topic.slug} href={`/topics/${topic.slug}`}><span>0{i + 1}</span><div className="folder-card"></div>
        <div className="category-content"><strong>{topic.name}</strong><p>{topic.description}</p></div></Link>)}</div>
      </section>

      <AdSlot site={site} />

      <section className="feature-split" id="documentaries">
        <div className="feature-image" style={{ backgroundImage: `url(${stories[1]?.image || featured.image})` }}><span className="play">▶</span></div>
        <div className="feature-copy"><span className="eyebrow accent">{site.copy['home.feature.eyebrow']}</span><h2>{site.copy['home.feature.title']}</h2><p>{site.copy['home.feature.description']}</p><Link className="button" href={`/stories/${stories[1]?.slug || featured.slug}`}>{site.copy['home.feature.cta']} →</Link></div>
      </section>

      <section className="documentary-band">
        <div className="documentary-overlay"><span className="eyebrow">{site.copy['home.documentary.eyebrow']}</span><h2>{site.copy['home.documentary.title']}</h2><p>{site.copy['home.documentary.description']}</p><a href="#" className="button">{site.copy['home.documentary.cta']} →</a></div>
      </section>

      <section className="editors" id="editors">
        <div className="topics-intro"><div><span className="eyebrow accent">{site.copy['home.editors.eyebrow']}</span><h2>{site.copy['home.editors.title']}</h2></div><p>{site.copy['home.editors.description']}</p></div>
        <div className="card-grid four">{stories.slice(0, 4).map((s) => <StoryCard key={`e-${s.id}`} story={s} />)}</div>
        <div className="center"><a className="button ghost" href="#stories">{site.copy['home.editors.cta']} →</a></div> 
      </section>

      <AdSlot site={site} />
      <Newsletter site={site} />
      <Footer site={site} />
    </main>
  );
}
