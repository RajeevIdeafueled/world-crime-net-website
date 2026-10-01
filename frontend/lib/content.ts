import { draftMode } from 'next/headers';

export type Story = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  topic: string;
  secondaryTopic?: string;
  author: string;
  publishedAt: string;
  readTime: string;
  image: string;
  featured?: boolean;
};

export const fallbackStories: Story[] = [
  {
    id: 1,
    title: 'The Vanishing at Cold Harbor: Twelve Years, One Unsolved Case',
    slug: 'the-vanishing-at-cold-harbor',
    excerpt:
      "A coastal town, missing detective's files, and a cold-case unit reopening an investigation everyone was told to forget.",
    topic: 'True Crime',
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
    author: 'Elena Park',
    publishedAt: 'Aug 30, 2026',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85',
  },
];

const STRAPI =
  process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;


/**
 * Convert Strapi response into our frontend Story format
 */
function mapStory(item: any): Story {
  const a = item.attributes ?? item;

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
    topic: a.topic,
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