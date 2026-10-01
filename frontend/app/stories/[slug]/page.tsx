import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import StoryCard from '@/components/StoryCard';
import { getStory, getStories, type StoryBlock } from '@/lib/content';
import Link from 'next/link';

function renderBlock(block: StoryBlock, index: number) {
  if (block.type === 'text') {
    let text: React.ReactNode = block.text || '';
    if (block.bold) text = <strong>{text}</strong>;
    if (block.italic) text = <em>{text}</em>;
    return <span key={index}>{text}</span>;
  }

  const children = block.children?.map((child, childIndex) => renderBlock(child, childIndex));

  switch (block.type) {
    case 'heading':
      return block.level === 2
        ? <h2 key={index}>{children}</h2>
        : <h3 key={index}>{children}</h3>;
    case 'quote':
      return <blockquote key={index}>{children}</blockquote>;
    case 'list':
      return block.format === 'ordered'
        ? <ol key={index}>{children}</ol>
        : <ul key={index}>{children}</ul>;
    case 'list-item':
      return <li key={index}>{children}</li>;
    case 'link':
      return <a key={index} href={block.url}>{children}</a>;
    case 'code':
      return <pre key={index}><code>{children}</code></pre>;
    case 'paragraph':
      return <p key={index}>{children}</p>;
    default:
      return <p key={index}>{children}</p>;
  }
}

function authorInitials(author: string) {
  return author
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((name) => name[0])
    .join('')
    .toUpperCase();
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStory(slug);
  const allStories = await getStories();
  return (
    <main className="story-page">
      <div className="story-header-wrap"><Header /></div>

      <section className="story-hero">
        <Link href="/" className="back">← Back to Stories</Link>
        <div className="chips"><span>{story.topic}</span><span>{story.secondaryTopic || 'Investigation'}</span></div>
        <h1>{story.title}</h1>
        <p>{story.excerpt}</p>
        <div className="author-meta"><span className="avatar">{authorInitials(story.author)}</span><strong>{story.author}</strong>{story.publishedAt && <><span>•</span><span>{story.publishedAt}</span></>}{story.readTime && <><span>•</span><span>{story.readTime}</span></>}</div>
      </section>

      <section className="story-hero-image">
        <div className="hero-photo" style={{ backgroundImage: `url(${story.image})` }}/>
        <p>Featured image</p>
      </section>

      <section className="article-layout">
        <aside className="toc"><h4>Story details</h4><p>{story.topic}</p>{story.secondaryTopic && <p>{story.secondaryTopic}</p>}{story.publishedAt && <p>{story.publishedAt}</p>}</aside>
        <article className="article-body">
          <div className="chapter" id="chapter"><span>Story</span><h2>{story.title}</h2></div>
          {story.body?.length
            ? story.body.map((block, index) => renderBlock(block, index))
            : <p className="lead">{story.excerpt}</p>}
          <div className="author-card"><div className="avatar large">{authorInitials(story.author)}</div><div><span className="eyebrow">Story by</span><h3>{story.author}</h3></div></div>
        </article>
        <aside className="chapters"><h4>Related stories</h4>{allStories.filter((item) => item.slug !== story.slug).slice(0, 4).map((item, index) => <Link key={item.id} href={`/stories/${item.slug}`}><span>{index + 1}</span><div><strong>{item.title}</strong><small>{item.topic}</small></div></Link>)}</aside>
      </section>

      <section className="related"><div className="topics-intro"><div><span className="eyebrow accent">Related stories</span><h2>Continue the investigation.</h2></div></div><div className="card-grid four">{allStories.slice(0,4).map(s=><StoryCard key={s.id} story={s}/>)}</div></section>
      <Newsletter />
      <Footer />
    </main>
  );
}
