import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import StoryCard from '@/components/StoryCard';
import { getSiteContent, getStory, getStories, type StoryBlock, type DesignSystem } from '@/lib/content';
import Link from 'next/link';

function getPresetStyles(presetKey: string, designSystem: DesignSystem): React.CSSProperties {
  const preset = designSystem.typography[presetKey] || designSystem.typography.body;
  return {
    fontFamily: preset.fontFamily,
    fontSize: preset.fontSize,
    fontWeight: preset.fontWeight,
    lineHeight: preset.lineHeight,
    letterSpacing: preset.letterSpacing,
    textTransform: preset.textTransform,
    color: preset.color || designSystem.palette.text,
    backgroundColor: preset.backgroundColor || undefined,
    fontStyle: preset.italic ? 'italic' : undefined,
    textDecoration: preset.underline ? 'underline' : undefined,
  };
}

function renderBlock(block: StoryBlock, index: number, designSystem: DesignSystem) {
  const presetKey = block.style || (
    block.type === 'heading' ? 'heading' :
    block.type === 'quote' ? 'blockquote' :
    block.type === 'list' ? 'list' :
    block.type === 'paragraph' ? 'body' :
    'body'
  );

  if (block.type === 'text') {
    let text: React.ReactNode = block.text || '';
    const style = getPresetStyles(block.bold ? 'bold' : block.italic ? 'italic' : 'body', designSystem);
    if (block.bold) text = <strong style={style}>{text}</strong>;
    if (block.italic) text = <em style={style}>{text}</em>;
    if (!block.bold && !block.italic) text = <span style={getPresetStyles('body', designSystem)}>{text}</span>;
    return <span key={index}>{text}</span>;
  }

  const children = block.children?.map((child, childIndex) => renderBlock(child, childIndex, designSystem));

  switch (block.type) {
    case 'heading':
      return block.level === 2
        ? <h2 key={index} style={getPresetStyles('heading', designSystem)}>{children}</h2>
        : <h3 key={index} style={getPresetStyles('subheading', designSystem)}>{children}</h3>;
    case 'quote':
      return <blockquote key={index} style={getPresetStyles('blockquote', designSystem)}>{children}</blockquote>;
    case 'list':
      return block.format === 'ordered'
        ? <ol key={index} style={getPresetStyles('list', designSystem)}>{children}</ol>
        : <ul key={index} style={getPresetStyles('list', designSystem)}>{children}</ul>;
    case 'list-item':
      return <li key={index} style={getPresetStyles('list', designSystem)}>{children}</li>;
    case 'link':
      return <a key={index} href={block.url} style={getPresetStyles('link', designSystem)}>{children}</a>;
    case 'code':
      return <pre key={index} style={getPresetStyles('body', designSystem)}><code>{children}</code></pre>;
    case 'paragraph':
      return <p key={index} style={getPresetStyles('body', designSystem)}>{children}</p>;
    case 'caption':
      return <figcaption key={index} style={getPresetStyles('caption', designSystem)}>{children}</figcaption>;
    case 'callout':
      return <aside key={index} style={getPresetStyles('callout', designSystem)}>{children}</aside>;
    default:
      return <p key={index} style={getPresetStyles(presetKey, designSystem)}>{children}</p>;
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
  const [story, allStories, site] = await Promise.all([getStory(slug), getStories(), getSiteContent()]);
  return (
    <main className="story-page">
      <div className="story-header-wrap"><Header site={site} /></div>

      <section className="story-hero">
        <Link href="/" className="back">← {site.copy['story.back']}</Link>
        <div className="chips"><span>{story.topic}</span><span>{story.secondaryTopic || site.copy['story.fallbackSecondaryTopic']}</span></div>
        <h1>{story.title}</h1>
        <p>{story.excerpt}</p>
        <div className="author-meta"><span className="avatar">{authorInitials(story.author)}</span><strong>{story.author}</strong>{story.publishedAt && <><span>•</span><span>{story.publishedAt}</span></>}{story.readTime && <><span>•</span><span>{story.readTime}</span></>}</div>
      </section>

      <section className="story-hero-image">
        <div className="hero-photo" style={{ backgroundImage: `url(${story.image})` }}/>
        <p>{site.copy['story.imageCaption']}</p>
      </section>

      <section className="article-layout">
        <aside className="toc"><h4>{site.copy['story.details']}</h4><p>{story.topic}</p>{story.secondaryTopic && <p>{story.secondaryTopic}</p>}{story.publishedAt && <p>{story.publishedAt}</p>}</aside>
        <article className="article-body">
          <div className="chapter" id="chapter"><span>{site.copy['story.label']}</span><h2>{story.title}</h2></div>
          {story.body?.length
            ? story.body.map((block, index) => renderBlock(block, index, site.designSystem))
            : <p className="lead" style={getPresetStyles('body', site.designSystem)}>{story.excerpt}</p>}
          <div className="author-card"><div className="avatar large">{authorInitials(story.author)}</div><div><span className="eyebrow">{site.copy['story.byline']}</span><h3>{story.author}</h3></div></div>
        </article>
        <aside className="chapters"><h4>{site.copy['story.related']}</h4>{allStories.filter((item) => item.slug !== story.slug).slice(0, 4).map((item, index) => <Link key={item.id} href={`/stories/${item.slug}`}><span>{index + 1}</span><div><strong>{item.title}</strong><small>{item.topic}</small></div></Link>)}</aside>
      </section>

      <section className="related"><div className="topics-intro"><div><span className="eyebrow accent">{site.copy['story.related']}</span><h2>{site.copy['story.continue']}</h2></div></div><div className="card-grid four">{allStories.filter((item) => item.slug !== story.slug).slice(0,4).map(s=><StoryCard key={s.id} story={s}/>)}</div></section>
      <Newsletter site={site} />
      <Footer site={site} />
    </main>
  );
}
