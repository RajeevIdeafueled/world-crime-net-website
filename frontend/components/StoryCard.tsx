import Link from 'next/link';
import type { Story } from '@/lib/content';

export default function StoryCard({ story, large = false }: { story: Story; large?: boolean }) {
  return (
    <Link href={`/stories/${story.slug}`} className={`story-card ${large ? 'story-card-large' : ''}`}>
      <div className="story-card-image" style={{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(0,0,0,.82)), url(${story.image})` }}>
        <div className="story-card-copy">
          <span className="eyebrow accent">{story.topic}</span>
          <h3>{story.title}</h3>
          <span className="meta">{story.readTime}</span>
        </div>
      </div>
    </Link>
  );
}
