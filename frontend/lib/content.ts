import { draftMode } from 'next/headers';

export type Story = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  topic: string;
  topicSlug: string;
  secondaryTopic?: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
  body?: StoryBlock[];
};

export type StoryBlock = {
  type: string;
  level?: number;
  format?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  url?: string;
  children?: StoryBlock[];
};

export type Topic = {
  id: number | string;
  name: string;
  slug: string;
  description?: string;
};

export const fallbackStories: Story[] = [
  {
    id: 1,
    title: 'The Vanishing at Cold Harbor: Twelve Years, One Unsolved Case',
    slug: 'the-vanishing-at-cold-harbor',
    excerpt:
      "A coastal town, missing detective's files, and a cold-case unit reopening an investigation everyone was told to forget.",
    topic: 'True Crime',
    topicSlug: 'true-crime',
    secondaryTopic: 'Unsolved',
    author: 'Mara Bennett',
    publishedAt: 'Sep 18, 2026',
    readTime: '18 min read',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85',
    featured: true,
  },
  {
    id: 2,
    title: 'Inside the Syndicate That Moved Millions Through Empty Companies',
    slug: 'inside-the-syndicate',
    excerpt:
      'A paper trail across three jurisdictions reveals how shell companies hid a sprawling criminal network.',
    topic: 'Organized Crime',
    topicSlug: 'organized-crime',
    author: 'Jon Hale',
    publishedAt: 'Sep 12, 2026',
    readTime: '12 min read',
    image:
      'https://images.unsplash.com/photo-1453873531674-2151bcd01707?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 3,
    title: 'The Archive Room: Files That Changed a War-Crimes Investigation',
    slug: 'the-archive-room',
    excerpt:
      'Documents preserved for decades became the missing link in a cross-border investigation.',
    topic: 'War Crime',
    topicSlug: 'war-crime',
    author: 'Nadia Cole',
    publishedAt: 'Sep 6, 2026',
    readTime: '15 min read',
    image:
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 4,
    title: 'A City Without Answers',
    slug: 'a-city-without-answers',
    excerpt:
      'Twenty years later, one disappearance still shapes a city and the families who refused to stop asking questions.',
    topic: 'Unsolved Crime',
    topicSlug: 'unsolved-crime',
    author: 'Elena Park',
    publishedAt: 'Aug 30, 2026',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85',
  },
];

export const fallbackTopics: Topic[] = [
  { id: 'true-crime', name: 'True Crime', slug: 'true-crime' },
  { id: 'organized-crime', name: 'Organized Crime', slug: 'organized-crime' },
  { id: 'war-crime', name: 'War Crime', slug: 'war-crime' },
  { id: 'unsolved-crime', name: 'Unsolved Crime', slug: 'unsolved-crime' },
  { id: 'historical-crime', name: 'Historical Crime', slug: 'historical-crime' },
];

const STRAPI =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

function slugifyTopic(name: string) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function apiHeaders(): Record<string, string> {
  return STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {};
}


/**
 * Convert Strapi response into our frontend Story format
 */
function mapStory(item: any): Story {
  const a = item.attributes ?? item;
  const topicRelation = a.topicRef?.data?.attributes ?? a.topicRef?.data ?? a.topicRef;

  const imageUrl =
    a.heroImage?.url ||
    a.heroImage?.data?.attributes?.url;

  const image = imageUrl
    ? imageUrl.startsWith('http')
      ? imageUrl
      : `${STRAPI}${imageUrl}`
    : fallbackStories[0].image;

  return {
    id: item.id,
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt,
    topic: topicRelation?.name || a.topic,
    topicSlug: topicRelation?.slug || slugifyTopic(a.topic || ''),
    secondaryTopic: a.secondaryTopic,
    author: a.author,

    publishedAt: a.publicationDate
      ? new Date(a.publicationDate).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })
      : '',

    readTime: a.readTime || '',
    image,
    featured: a.featured,
    body: Array.isArray(a.body) ? a.body : [],
  };
}


/**
 * Homepage / story listing
 *
 * Normally returns published stories.
 */
export async function getStories(): Promise<Story[]> {
  try {
    const res = await fetch(
      `${STRAPI}/api/stories?populate=*&sort=publicationDate:desc&status=published`,
      {
        headers: apiHeaders(),
        next: {
          revalidate: 60,
        },
      }
    );

    if (!res.ok) {
      console.error(
        'Strapi stories request failed:',
        res.status,
        await res.text()
      );

      return fallbackStories;
    }

    const json = await res.json();

    if (!json?.data?.length) {
      return fallbackStories;
    }

    return json.data.map(mapStory);
  } catch (error) {
    console.error('Strapi stories error:', error);

    return fallbackStories;
  }
}

export async function getTopics(): Promise<Topic[]> {
  try {
    const res = await fetch(`${STRAPI}/api/topics?sort=name:asc`, {
      headers: apiHeaders(),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Strapi topics request failed:', res.status, await res.text());
      return fallbackTopics;
    }

    const json = await res.json();
    if (!json?.data?.length) return fallbackTopics;

    return json.data.map((item: any) => {
      const data = item.attributes ?? item;
      return {
        id: item.id ?? item.documentId,
        name: data.name,
        slug: data.slug,
        description: data.description || '',
      };
    });
  } catch (error) {
    console.error('Strapi topics error:', error);
    return fallbackTopics;
  }
}

export async function getTopicBySlug(slug: string): Promise<Topic | null> {
  const topics = await getTopics();
  return topics.find((topic) => topic.slug === slug) ?? null;
}

export async function getStoriesByTopic(slug: string, topicName: string): Promise<Story[]> {
  try {
    const params = new URLSearchParams({
      populate: '*',
      sort: 'publicationDate:desc',
      status: 'published',
      'filters[$or][0][topicRef][slug][$eq]': slug,
      'filters[$or][1][topic][$eq]': topicName,
    });
    const res = await fetch(`${STRAPI}/api/stories?${params}`, {
      headers: apiHeaders(),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error('Strapi topic stories request failed:', res.status, await res.text());
      return fallbackStories.filter((story) => story.topicSlug === slug);
    }

    const json = await res.json();
    return json?.data?.length ? json.data.map(mapStory) : [];
  } catch (error) {
    console.error('Strapi topic stories error:', error);
    return fallbackStories.filter((story) => story.topicSlug === slug);
  }
}


/**
 * Individual Story
 *
 * Published normally.
 * Draft version when Next.js Draft Mode is enabled.
 */
export async function getStory(
  slug: string
): Promise<Story> {
  try {
    const draft = await draftMode();

    const status = draft.isEnabled
      ? 'draft'
      : 'published';

    const url =
      `${STRAPI}/api/stories` +
      `?filters[slug][$eq]=${encodeURIComponent(slug)}` +
      `&populate=*` +
      `&status=${status}`;

    const res = await fetch(url, {
      headers: STRAPI_TOKEN
        ? {
            Authorization: `Bearer ${STRAPI_TOKEN}`,
          }
        : {},

      ...(draft.isEnabled
        ? {
            cache: 'no-store' as const,
          }
        : {
            next: {
              revalidate: 60,
            },
          }),
    });

    if (!res.ok) {
      console.error(
        'Strapi story request failed:',
        res.status,
        await res.text()
      );

      return fallbackStories[0];
    }

    const json = await res.json();

    if (!json?.data?.length) {
      return fallbackStories[0];
    }

    return mapStory(json.data[0]);
  } catch (error) {
    console.error('Strapi story error:', error);

    return fallbackStories[0];
  }
}