import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import Newsletter from '@/components/Newsletter';
import AdSlot from '@/components/AdSlot';
import { getStories } from '@/lib/content';
import Link from 'next/link';

const topics = ['True Crime', 'Organized Crime', 'War Crime', 'Unsolved Crime', 'Historical Crime'];

export default async function Home() {
  const stories = await getStories();
  const featured = stories.find((s) => s.featured) || stories[0];
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.50), rgba(0,0,0,.2)), linear-gradient(180deg, transparent 65%, #0f0f0f), url(${featured.image})` }}>
        <Header />
        <div className="hero-content">
          <div className="eyebrow-row"><span className="eyebrow">Featured Documentary</span><span>•</span><span className="eyebrow accent">{featured.topic}</span></div>
          <h1>{featured.title}</h1>
          <p>{featured.excerpt}</p>
          <Link className="button" href={`/stories/${featured.slug}`}>Watch Story →</Link>
        </div>
      </section>

      <section className="trending" id="stories">
        <div className="section-label-row"><span className="eyebrow">Trending now</span><span className="rule"/></div>
        <div className="card-grid four">{stories.slice(0,4).map((s) => <StoryCard key={s.id} story={s}/>)}</div>
      </section>

      <section className="topics" id="topics">
        <div className="topics-intro"><div><span className="eyebrow accent">Explore by topic</span><h2>Stories that follow the evidence.</h2></div><p>Browse World Crime Net by the subjects that define our reporting — from individual cases to systems of power.</p></div>
        <div className="topic-list">{topics.map((topic, i)=><a key={topic} href="#editors"><span>0{i+1}</span><strong>{topic}</strong><span>↗</span></a>)}</div>
      </section>

      <AdSlot />

      <section className="feature-split" id="documentaries">
        <div className="feature-image" style={{ backgroundImage: `url(${stories[1]?.image || featured.image})` }}><span className="play">▶</span></div>
        <div className="feature-copy"><span className="eyebrow accent">Featured investigation</span><h2>Crime is rarely one story. We connect the system behind it.</h2><p>Our documentaries combine field reporting, archival research, interviews and data to show how individual cases fit into a wider pattern.</p><Link className="button" href={`/stories/${stories[1]?.slug || featured.slug}`}>Explore Documentary →</Link></div>
      </section>

      <section className="documentary-band">
        <div className="documentary-overlay"><span className="eyebrow">Original Documentary</span><h2>THE FILES THEY NEVER EXPECTED TO SURFACE</h2><p>A multi-part investigation into the paper trail left behind by a network built to disappear.</p><a href="#" className="button">Watch Trailer →</a></div>
      </section>

      <section className="editors" id="editors">
        <div className="topics-intro"><div><span className="eyebrow accent">Editors' picks</span><h2>Essential reporting, selected by our editors.</h2></div><p>Stories that add context, expose patterns or move an investigation forward.</p></div>
        <div className="card-grid four">{stories.slice(0,4).map((s) => <StoryCard key={`e-${s.id}`} story={s}/>)}</div>
        <div className="center"><a className="button ghost" href="#stories">View all stories →</a></div>
      </section>

      <AdSlot />
      <Newsletter />
      <Footer />
    </main>
  );
}
