import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { getSiteContent, getStoriesByTopic, getTopicBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [topic, site] = await Promise.all([getTopicBySlug(slug), getSiteContent()]);
  if (!topic) notFound();

  const stories = await getStoriesByTopic(topic.slug, topic.name);

  return (
    <main>
      <div className="story-header-wrap"><Header site={site} /></div>
      <section className="trending">
        <div className="section-label-row">
          <Link className="eyebrow" href="/#topics">{site.copy['topic.all']}</Link>
          <span className="rule" />
        </div>
        <div className="topics-intro">
          <div><span className="eyebrow accent">{site.copy['topic.eyebrow']}</span><h2>{topic.name}</h2></div>
          {topic.description && <p>{topic.description}</p>}
        </div>
        {stories.length
          ? <div className="card-grid four">{stories.map((story) => <StoryCard key={story.id} story={story} />)}</div>
            : <p>{site.copy['topic.empty']}</p>}
      </section>
          <Footer site={site} />
    </main>
  );
}