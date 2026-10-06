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
  style?: string;
  color?: string;
  backgroundColor?: string;
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

export type NavigationItem = {
  key: string;
  label: string;
  href: string;
  placement: 'header' | 'footer-primary' | 'footer-secondary';
  order: number;
};

export type TypographyPreset = {
  label: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: number | string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: 'uppercase' | 'none' | 'capitalize' | 'lowercase';
  color?: string;
  backgroundColor?: string;
  italic?: boolean;
  bold?: boolean;
  underline?: boolean;
};

export type DesignSystem = {
  name: string;
  logoSource: 'upload' | 'google';
  logoUrl: string;
  fontPrimarySource: 'upload' | 'google';
  fontPrimary: string;
  fontPrimaryFileUrl: string;
  fontPrimaryGoogleFamily: string;
  fontPrimaryGoogleUrl: string;
  fontAccentSource: 'upload' | 'google';
  fontAccent: string;
  fontAccentFileUrl: string;
  fontAccentGoogleFamily: string;
  fontAccentGoogleUrl: string;
  palette: {
    background: string;
    text: string;
    muted: string;
    accent: string;
    link: string;
    quote: string;
    border: string;
    callout: string;
  };
  typography: Record<string, TypographyPreset>;
};

export type SiteContent = {
  copy: Record<string, string>;
  headerNavigation: NavigationItem[];
  footerPrimaryNavigation: NavigationItem[];
  footerSecondaryNavigation: NavigationItem[];
  designSystem: DesignSystem;
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

export const defaultDesignSystem: DesignSystem = {
  name: 'World Crime Net Design System',
  logoSource: 'upload',
  logoUrl: '',
  fontPrimarySource: 'upload',
  fontPrimary: 'Inter, Arial, sans-serif',
  fontPrimaryFileUrl: '',
  fontPrimaryGoogleFamily: 'Inter',
  fontPrimaryGoogleUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
  fontAccentSource: 'upload',
  fontAccent: 'Bebas Neue, Impact, sans-serif',
  fontAccentFileUrl: '',
  fontAccentGoogleFamily: 'Bebas Neue',
  fontAccentGoogleUrl: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap',
  palette: {
    background: '#090909',
    text: '#f5f5f0',
    muted: '#b3b1aa',
    accent: '#f6543f',
    link: '#f6543f',
    quote: '#e7d3c0',
    border: 'rgba(255,255,255,0.2)',
    callout: '#171414',
  },
  typography: {
    heading: {
      label: 'Heading',
      fontFamily: 'var(--font-bebas)',
      fontSize: 'clamp(2.75rem, 7vw, 9rem)',
      fontWeight: 700,
      lineHeight: '0.9',
      letterSpacing: '0.02em',
      textTransform: 'uppercase',
      color: '#f5f5f0',
      bold: true,
    },
    subheading: {
      label: 'Subheading',
      fontFamily: 'var(--font-bebas)',
      fontSize: 'clamp(1.6rem, 2.3vw, 2.9rem)',
      fontWeight: 700,
      lineHeight: '1.1',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#f5f5f0',
      bold: true,
    },
    body: {
      label: 'Body',
      fontFamily: 'var(--font-primary)',
      fontSize: '1.08rem',
      fontWeight: 400,
      lineHeight: '1.8',
      textTransform: 'none',
      color: '#f5f5f0',
      bold: false,
      italic: false,
    },
    'pull-quote': {
      label: 'Pull Quote',
      fontFamily: 'var(--font-primary)',
      fontSize: 'clamp(1.7rem, 2vw, 2.4rem)',
      fontWeight: 500,
      lineHeight: '1.3',
      letterSpacing: '-0.03em',
      textTransform: 'none',
      color: '#f5f5f0',
      italic: true,
    },
    'block-quote': {
      label: 'Block Quote',
      fontFamily: 'var(--font-primary)',
      fontSize: '1.2rem',
      fontWeight: 500,
      lineHeight: '1.7',
      letterSpacing: '0.02em',
      textTransform: 'none',
      color: '#e7d3c0',
      italic: true,
    },
    list: {
      label: 'List',
      fontFamily: 'var(--font-primary)',
      fontSize: '1.05rem',
      fontWeight: 400,
      lineHeight: '1.8',
      textTransform: 'none',
      color: '#f5f5f0',
    },
    caption: {
      label: 'Caption',
      fontFamily: 'var(--font-primary)',
      fontSize: '0.8rem',
      fontWeight: 400,
      lineHeight: '1.5',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#b3b1aa',
    },
    callout: {
      label: 'Callout',
      fontFamily: 'var(--font-primary)',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.7',
      letterSpacing: '0.02em',
      textTransform: 'none',
      color: '#f5f5f0',
      backgroundColor: '#171414',
    },
    link: {
      label: 'Link',
      fontFamily: 'var(--font-primary)',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '1.6',
      textTransform: 'none',
      color: '#f6543f',
      underline: true,
    },
    bold: {
      label: 'Bold',
      fontFamily: 'var(--font-primary)',
      fontSize: 'inherit',
      fontWeight: 700,
      lineHeight: 'inherit',
      textTransform: 'none',
      color: '#f5f5f0',
      bold: true,
    },
    italic: {
      label: 'Italic',
      fontFamily: 'var(--font-primary)',
      fontSize: 'inherit',
      fontWeight: 400,
      lineHeight: 'inherit',
      textTransform: 'none',
      color: '#f5f5f0',
      italic: true,
    },
  },
};

export const fallbackSiteContent: SiteContent = {
  copy: {
    'brand.name': 'World Crime Net',
    'brand.homeLabel': 'World Crime Net home',
    'seo.title': 'World Crime Net',
    'seo.description': 'Investigations, documentaries and stories from around the world.',
    'notFound.title': 'Page not found',
    'notFound.description': 'The page you requested could not be found.',
    'notFound.cta': 'Return home',
    'nav.searchLabel': 'Search',
    'nav.subscribe': 'Subscribe',
    'nav.language': 'EN',
    'home.hero.eyebrow': 'Featured Documentary',
    'home.hero.cta': 'Watch Story',
    'home.trending.title': 'Trending now',
    'home.topics.eyebrow': 'Explore by topic',
    'home.topics.title': 'Explore by Topic, One Documentary Publication',
    'home.topics.description': 'Topics, curated by the editorial team. One documentary publication. Explore investigations by the subject matter that connects them.',
    'home.feature.eyebrow': 'Featured investigation',
    'home.feature.title': 'Crime is rarely one story. We connect the system behind it.',
    'home.feature.description': 'Our documentaries combine field reporting, archival research, interviews and data to show how individual cases fit into a wider pattern.',
    'home.feature.cta': 'Explore Documentary',
    'home.documentary.eyebrow': 'Original Documentary',
    'home.documentary.title': 'THE FILES THEY NEVER EXPECTED TO SURFACE',
    'home.documentary.description': 'A multi-part investigation into the paper trail left behind by a network built to disappear.',
    'home.documentary.cta': 'Watch Trailer',
    'home.editors.eyebrow': "Editors' picks",
    'home.editors.title': 'Essential reporting, selected by our editors.',
    'home.editors.description': 'Stories that add context, expose patterns or move an investigation forward.',
    'home.editors.cta': 'View all stories',
    'story.back': 'Back to Stories',
    'story.fallbackSecondaryTopic': 'Investigation',
    'story.imageCaption': 'Featured image',
    'story.details': 'Story details',
    'story.label': 'Story',
    'story.byline': 'Story by',
    'story.related': 'Related stories',
    'story.continue': 'Continue the investigation.',
    'topic.all': 'All topics',
    'topic.eyebrow': 'Stories by topic',
    'topic.empty': 'No published stories in this topic yet.',
    'newsletter.eyebrow': 'Newsletter',
    'newsletter.title': 'Never miss a story worth telling.',
    'newsletter.description': 'Stay connected with World Crime Net. Receive new investigations, documentaries and stories when they are published.',
    'newsletter.emailLabel': 'Email address',
    'newsletter.emailPlaceholder': 'Your email address',
    'newsletter.submit': 'Subscribe',
    'newsletter.privacy': 'No spam. Unsubscribe anytime. See our Privacy Policy.',
    'advertisement.title': 'Advertisement',
    'advertisement.description': 'Sponsored placement — clearly separated from editorial content',
    'advertisement.dimensions': '300 × 100 ad unit',
    'footer.description': 'Independent visual journalism, documentary reporting and long-form investigations.',
    'footer.explore': 'Explore',
    'footer.about': 'About',
    'footer.social': 'Social',
    'footer.legal': 'Legal',
    'footer.backToTop': 'Go back to top',
    'footer.copyright': '© {year} World Crime Net. All rights reserved.',
    'footer.tagline': 'Truth. Context. Accountability.',
  },
  headerNavigation: [
    { key: 'header-stories', label: 'Stories', href: '/#stories', placement: 'header', order: 0 },
    { key: 'header-topics', label: 'Topics', href: '/#topics', placement: 'header', order: 1 },
    { key: 'header-documentaries', label: 'Documentaries', href: '/#documentaries', placement: 'header', order: 2 },
    { key: 'header-about', label: 'About', href: '/#about', placement: 'header', order: 3 },
  ],
  footerPrimaryNavigation: [
    { key: 'footer-stories', label: 'All Stories', href: '/#stories', placement: 'footer-primary', order: 0 },
    { key: 'footer-documentaries', label: 'Documentaries', href: '/#documentaries', placement: 'footer-primary', order: 1 },
    { key: 'footer-topics', label: 'Topics', href: '/#topics', placement: 'footer-primary', order: 2 },
    { key: 'footer-series', label: 'Series', href: '/#series', placement: 'footer-primary', order: 3 },
    { key: 'footer-glossary', label: 'Glossary', href: '/#glossary', placement: 'footer-primary', order: 4 },
  ],
  footerSecondaryNavigation: [
    { key: 'footer-standards', label: 'Editorial Standards', href: '#', placement: 'footer-secondary', order: 0 },
    { key: 'footer-corrections', label: 'Corrections', href: '#', placement: 'footer-secondary', order: 1 },
    { key: 'footer-privacy', label: 'Privacy', href: '#', placement: 'footer-secondary', order: 2 },
    { key: 'footer-contact', label: 'Contact', href: '#', placement: 'footer-secondary', order: 3 },
  ],
  designSystem: defaultDesignSystem,
};

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

function parseJsonValue<T>(value: unknown, fallback: T): T {
  if (!value) return fallback;
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  return value as T;
}

export async function getDesignSystem(): Promise<DesignSystem> {
  try {
    const res = await fetch(`${STRAPI}/api/design-system?populate=*`, {
      headers: apiHeaders(),
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return defaultDesignSystem;
    }

    const json = await res.json();
    const item = json?.data?.attributes ?? json?.data ?? null;
    if (!item) {
      return defaultDesignSystem;
    }

    const palette = {
      ...defaultDesignSystem.palette,
      ...(parseJsonValue(item.colorTokens, {}) || {}),
    };

    const typography = {
      ...defaultDesignSystem.typography,
      ...(parseJsonValue(item.typographyPresets, {}) || {}),
    };

    const mediaUrl = (media: any) => {
      const url = media?.url || media?.data?.attributes?.url || '';
      return url && !url.startsWith('http') ? `${STRAPI}${url}` : url;
    };
    const selectedLogo = item.logoSource === 'google'
      ? item.logoGoogleUrl
      : mediaUrl(item.logo) || defaultDesignSystem.logoUrl;
    const logoUrl = selectedLogo;

    return {
      name: item.name || defaultDesignSystem.name,
      logoSource: item.logoSource || defaultDesignSystem.logoSource,
      logoUrl: logoUrl || defaultDesignSystem.logoUrl,
      fontPrimarySource: item.fontPrimarySource || defaultDesignSystem.fontPrimarySource,
      fontPrimary: item.fontPrimary || defaultDesignSystem.fontPrimary,
      fontPrimaryFileUrl: mediaUrl(item.fontPrimaryFile),
      fontPrimaryGoogleFamily: item.fontPrimaryGoogleFamily || defaultDesignSystem.fontPrimaryGoogleFamily,
      fontPrimaryGoogleUrl: item.fontPrimaryGoogleUrl || defaultDesignSystem.fontPrimaryGoogleUrl,
      fontAccentSource: item.fontAccentSource || defaultDesignSystem.fontAccentSource,
      fontAccent: item.fontAccent || defaultDesignSystem.fontAccent,
      fontAccentFileUrl: mediaUrl(item.fontAccentFile),
      fontAccentGoogleFamily: item.fontAccentGoogleFamily || defaultDesignSystem.fontAccentGoogleFamily,
      fontAccentGoogleUrl: item.fontAccentGoogleUrl || defaultDesignSystem.fontAccentGoogleUrl,
      palette,
      typography,
    };
  } catch (error) {
    console.error('Strapi design system error:', error);
    return defaultDesignSystem;
  }
}

export async function getSiteContent(): Promise<SiteContent> {
  try {
    const query = new URLSearchParams({
      'pagination[pageSize]': '100',
      'sort': 'key:asc',
    });
    const navigationQuery = new URLSearchParams({
      'pagination[pageSize]': '100',
      'sort': 'order:asc',
      'filters[enabled][$eq]': 'true',
    });
    const [copyResponse, navigationResponse, designSystem] = await Promise.all([
      fetch(`${STRAPI}/api/site-copies?${query}`, {
        headers: apiHeaders(),
        next: { revalidate: 60 },
      }),
      fetch(`${STRAPI}/api/navigation-items?${navigationQuery}`, {
        headers: apiHeaders(),
        next: { revalidate: 60 },
      }),
      getDesignSystem(),
    ]);

    const [copyJson, navigationJson] = await Promise.all([
      copyResponse.ok ? copyResponse.json() : Promise.resolve({ data: [] }),
      navigationResponse.ok ? navigationResponse.json() : Promise.resolve({ data: [] }),
    ]);
    const copyEntries = (copyJson.data || []).map((item: any) => {
      const data = item.attributes ?? item;
      return [data.key, data.value] as const;
    });
    const navigation: NavigationItem[] = (navigationJson.data || []).map((item: any): NavigationItem => {
      const data = item.attributes ?? item;
      return {
        key: data.key,
        label: data.label,
        href: data.href,
        placement: data.placement,
        order: data.order ?? 0,
      };
    });
    const orderedNavigation = (placement: NavigationItem['placement'], fallback: NavigationItem[]) => {
      const items = navigation.filter((item) => item.placement === placement).sort((a, b) => a.order - b.order);
      return items.length ? items : fallback;
    };

    return {
      copy: { ...fallbackSiteContent.copy, ...Object.fromEntries(copyEntries) },
      headerNavigation: orderedNavigation('header', fallbackSiteContent.headerNavigation),
      footerPrimaryNavigation: orderedNavigation('footer-primary', fallbackSiteContent.footerPrimaryNavigation),
      footerSecondaryNavigation: orderedNavigation('footer-secondary', fallbackSiteContent.footerSecondaryNavigation),
      designSystem,
    };
  } catch (error) {
    console.error('Strapi site content error:', error);
    return fallbackSiteContent;
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
            Authorization: `Bearer ${STRAPI_TOKEN}`
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
