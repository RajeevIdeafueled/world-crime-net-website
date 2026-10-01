import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import StoryCard from '@/components/StoryCard';
import { getStory, getStories } from '@/lib/content';
import Link from 'next/link';

const paragraphs = [
  ['The first call', 'At 5:43 on a wet October morning, a dispatcher logged a report that would spend more than a decade trapped between departments, jurisdictions and competing theories. The first officers arrived before sunrise. By noon, the harbor was sealed and the town already knew something was wrong.', 'What followed was not one investigation, but several overlapping ones — each leaving records, interviews and unanswered questions that would later become crucial.'],
  ['A file that should not exist', 'Years later, a retired investigator contacted a reporter with a reference to a duplicate evidence log. The document had never appeared in the public case file, yet its numbering matched records preserved in an off-site archive.', 'That discovery changed the direction of the reporting. It suggested that key material had been copied, moved or withheld at a critical point in the original investigation.'],
  ['Across three jurisdictions', 'The reporting expanded from the harbor to two other cities linked by phone records, property transfers and the movements of people named in witness statements.', 'No single document proved what happened. Together, however, the records established a timeline that had never been assembled in one place.'],
  ['What the evidence can — and cannot — show', 'The surviving record is incomplete. Some files are missing, some statements conflict, and several people central to the story are no longer alive. World Crime Net has therefore separated verified fact from allegation throughout this account.', 'Where the evidence ends, the story says so. The purpose of this investigation is not to substitute a narrative for proof, but to show precisely what the available material establishes.']
];

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = await getStory(slug);
  const allStories = await getStories();
  return (
    <main className="story-page">
      <div className="story-header-wrap"><Header /></div>
      <div className="content-warning">Content note: This story includes references to violence, disappearance and criminal activity.</div>
      <div className="progress-row"><div className="progress-bar"><span/></div><div className="progress-inner"><span>Chapter 2 — The Missing Files</span><span>‹ Prev&nbsp;&nbsp;&nbsp; Chapter 2 of 6 &nbsp;&nbsp;&nbsp;Next ›</span></div></div>

      <section className="story-hero">
        <Link href="/" className="back">← Back to Stories</Link>
        <div className="chips"><span>{story.topic}</span><span>{story.secondaryTopic || 'Investigation'}</span></div>
        <h1>{story.title}</h1>
        <p>{story.excerpt}</p>
        <div className="author-meta"><span className="avatar">MB</span><strong>{story.author}</strong><span>•</span><span>{story.publishedAt}</span><span>•</span><span>{story.readTime}</span><span>•</span><span>6 chapters</span></div>
        <button className="audio">▶ Listen to story <span>24:18</span></button>
      </section>

      <section className="story-hero-image">
        <div className="hero-photo" style={{ backgroundImage: `url(${story.image})` }}/>
        <p>Cold Harbor at first light. <span>Photo: World Crime Net archive</span></p>
      </section>

      <section className="article-layout">
        <aside className="toc"><h4>In this story</h4><a className="active" href="#chapter">The missing files</a><a href="#evidence">A second evidence log</a><a href="#jurisdictions">Three jurisdictions</a><a href="#record">The surviving record</a><div className="share">Share&nbsp;&nbsp;◉ ◉ ✉ ⛓</div></aside>
        <article className="article-body">
          <div className="chapter" id="chapter"><span>Chapter 2</span><h2>The missing files</h2></div>
          <p className="lead">For twelve years, the case appeared frozen. Then a forgotten reference in an archived evidence log reopened a question investigators had never fully answered: what happened to the missing case files?</p>
          {paragraphs.map(([title,p1,p2], i)=><section key={title} id={i===1?'evidence':i===2?'jurisdictions':i===3?'record':undefined}><h3>{title}</h3><p>{p1}</p><p>{p2}</p>{i===0 && <blockquote>“The absence of a record became evidence of its own.”</blockquote>}{i===1 && <div className="inline-photo" style={{ backgroundImage: `url(${allStories[2]?.image || story.image})` }}><span>Archive material reviewed during the investigation.</span></div>}</section>)}
          <div className="sources"><h3>Sources & citations</h3><p>Public records, court filings, archived dispatch logs, property records and on-record interviews were reviewed for this report.</p></div>
          <div className="editor-note"><strong>Editor's note</strong><p>This story has been edited for clarity and updated as new documentary evidence becomes available.</p></div>
          <div className="author-card"><div className="avatar large">MB</div><div><span className="eyebrow">About the author</span><h3>{story.author}</h3><p>Investigative reporter covering unsolved cases, organized crime and institutional accountability.</p></div></div>
        </article>
        <aside className="chapters"><h4>Story chapters</h4>{['The disappearance','The missing files','The witness list','The paper trail','What investigators missed','Where the case stands'].map((c,i)=><a className={i===1?'active':''} key={c}><span>{i+1}</span><div><strong>{c}</strong><small>{i===1?'You are here':'8–12 min read'}</small></div></a>)}</aside>
      </section>

      <section className="related"><div className="topics-intro"><div><span className="eyebrow accent">Related stories</span><h2>Continue the investigation.</h2></div></div><div className="card-grid four">{allStories.slice(0,4).map(s=><StoryCard key={s.id} story={s}/>)}</div></section>
      <Newsletter />
      <Footer />
    </main>
  );
}
