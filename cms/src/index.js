const defaultTopics = [
  {
    name: 'True Crime',
    slug: 'true-crime',
    description: 'Investigations into real criminal cases and their lasting impact.',
  },
  {
    name: 'Organized Crime',
    slug: 'organized-crime',
    description: 'Reporting on criminal networks, their finances, and influence.',
  },
  {
    name: 'War Crime',
    slug: 'war-crime',
    description: 'Evidence-led coverage of alleged and documented war crimes.',
  },
  {
    name: 'Unsolved Crime',
    slug: 'unsolved-crime',
    description: 'Open cases, missing evidence, and the search for answers.',
  },
  {
    name: 'Historical Crime',
    slug: 'historical-crime',
    description: 'Criminal cases revisited through historical records and archives.',
  },
];

const defaultSiteCopy = [
  ['global', 'brand.name', 'World Crime Net'],
  ['global', 'brand.homeLabel', 'World Crime Net home'],
  ['global', 'seo.title', 'World Crime Net'],
  ['global', 'seo.description', 'Investigations, documentaries and stories from around the world.'],
  ['global', 'notFound.title', 'Page not found'],
  ['global', 'notFound.description', 'The page you requested could not be found.'],
  ['global', 'notFound.cta', 'Return home'],
  ['global', 'nav.searchLabel', 'Search'],
  ['global', 'nav.subscribe', 'Subscribe'],
  ['global', 'nav.language', 'EN'],
  ['home', 'home.hero.eyebrow', 'Featured Documentary'],
  ['home', 'home.hero.cta', 'Watch Story'],
  ['home', 'home.trending.title', 'Trending now'],
  ['home', 'home.topics.eyebrow', 'Explore by topic'],
  ['home', 'home.topics.title', 'Explore by Topic, One Documentary Publication'],
  ['home', 'home.topics.description', 'Topics, curated by the editorial team. One documentary publication. Explore investigations by the subject matter that connects them.'],
  ['home', 'home.feature.eyebrow', 'Featured investigation'],
  ['home', 'home.feature.title', 'Crime is rarely one story. We connect the system behind it.'],
  ['home', 'home.feature.description', 'Our documentaries combine field reporting, archival research, interviews and data to show how individual cases fit into a wider pattern.'],
  ['home', 'home.feature.cta', 'Explore Documentary'],
  ['home', 'home.documentary.eyebrow', 'Original Documentary'],
  ['home', 'home.documentary.title', 'THE FILES THEY NEVER EXPECTED TO SURFACE'],
  ['home', 'home.documentary.description', 'A multi-part investigation into the paper trail left behind by a network built to disappear.'],
  ['home', 'home.documentary.cta', 'Watch Trailer'],
  ['home', 'home.editors.eyebrow', "Editors' picks"],
  ['home', 'home.editors.title', 'Essential reporting, selected by our editors.'],
  ['home', 'home.editors.description', 'Stories that add context, expose patterns or move an investigation forward.'],
  ['home', 'home.editors.cta', 'View all stories'],
  ['story', 'story.back', 'Back to Stories'],
  ['story', 'story.fallbackSecondaryTopic', 'Investigation'],
  ['story', 'story.imageCaption', 'Featured image'],
  ['story', 'story.details', 'Story details'],
  ['story', 'story.label', 'Story'],
  ['story', 'story.byline', 'Story by'],
  ['story', 'story.related', 'Related stories'],
  ['story', 'story.continue', 'Continue the investigation.'],
  ['topic', 'topic.all', 'All topics'],
  ['topic', 'topic.eyebrow', 'Stories by topic'],
  ['topic', 'topic.empty', 'No published stories in this topic yet.'],
  ['newsletter', 'newsletter.eyebrow', 'Newsletter'],
  ['newsletter', 'newsletter.title', 'Never miss a story worth telling.'],
  ['newsletter', 'newsletter.description', 'Stay connected with World Crime Net. Receive new investigations, documentaries and stories when they are published.'],
  ['newsletter', 'newsletter.emailLabel', 'Email address'],
  ['newsletter', 'newsletter.emailPlaceholder', 'Your email address'],
  ['newsletter', 'newsletter.submit', 'Subscribe'],
  ['newsletter', 'newsletter.privacy', 'No spam. Unsubscribe anytime. See our Privacy Policy.'],
  ['advertisement', 'advertisement.title', 'Advertisement'],
  ['advertisement', 'advertisement.description', 'Sponsored placement — clearly separated from editorial content'],
  ['advertisement', 'advertisement.dimensions', '300 × 100 ad unit'],
  ['footer', 'footer.description', 'Independent visual journalism, documentary reporting and long-form investigations.'],
  ['footer', 'footer.copyright', '© {year} World Crime Net'],
  ['footer', 'footer.tagline', 'Truth. Context. Accountability.'],
];

const defaultNavigation = [
  ['header-stories', 'Stories', '/#stories', 'header', 0],
  ['header-topics', 'Topics', '/#topics', 'header', 1],
  ['header-documentaries', 'Documentaries', '/#documentaries', 'header', 2],
  ['header-about', 'About', '/#about', 'header', 3],
  ['footer-stories', 'All Stories', '/#stories', 'footer-primary', 0],
  ['footer-documentaries', 'Documentaries', '/#documentaries', 'footer-primary', 1],
  ['footer-topics', 'Topics', '/#topics', 'footer-primary', 2],
  ['footer-series', 'Series', '/#series', 'footer-primary', 3],
  ['footer-glossary', 'Glossary', '/#glossary', 'footer-primary', 4],
  ['footer-standards', 'Editorial Standards', '#', 'footer-secondary', 0],
  ['footer-corrections', 'Corrections', '#', 'footer-secondary', 1],
  ['footer-privacy', 'Privacy', '#', 'footer-secondary', 2],
  ['footer-contact', 'Contact', '#', 'footer-secondary', 3],
];

const defaultDesignSystem = {
  name: 'World Crime Net Design System',
  fontPrimary: 'Inter, Arial, sans-serif',
  fontAccent: 'Bebas Neue, Impact, sans-serif',
  backgroundColor: '#090909',
  textColor: '#f5f5f0',
  mutedColor: '#b3b1aa',
  accentColor: '#f6543f',
  linkColor: '#f6543f',
  quoteColor: '#e7d3c0',
  borderColor: 'rgba(255,255,255,0.2)',
  calloutBackground: '#171414',
  colorTokens: {
    background: '#090909',
    text: '#f5f5f0',
    muted: '#b3b1aa',
    accent: '#f6543f',
    link: '#f6543f',
    quote: '#e7d3c0',
    border: 'rgba(255,255,255,0.2)',
    callout: '#171414',
  },
  typographyPresets: {
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
      letterSpacing: '0em',
      textTransform: 'none',
      color: '#f5f5f0',
      bold: false,
      italic: false,
    },
    pullQuote: {
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
    blockquote: {
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
      letterSpacing: '0em',
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
      letterSpacing: '0em',
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
      letterSpacing: '0em',
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
      letterSpacing: '0em',
      textTransform: 'none',
      color: '#f5f5f0',
      italic: true,
    },
  },
};

async function seedMissing(strapi, uid, key, records) {
  const documents = strapi.documents(uid);
  for (const record of records) {
    const existing = await documents.findMany({ filters: { [key]: { $eq: record[key] } } });
    if (!existing.length) await documents.create({ data: record });
  }
}

async function seedNavigation(strapi) {
  const documents = strapi.documents('api::navigation-item.navigation-item');
  const previousDefaults = {
    'footer-stories': ['Stories', '/#stories', 0],
    'footer-topics': ['Topics', '/#topics', 1],
    'footer-documentaries': ['Documentaries', '/#documentaries', 2],
  };

  for (const [key, label, href, placement, order] of defaultNavigation) {
    const record = { key, label, href, placement, order, enabled: true };
    const existing = await documents.findMany({ filters: { key: { $eq: key } } });
    if (!existing.length) {
      await documents.create({ data: record });
      continue;
    }

    const previous = previousDefaults[key];
    const current = existing[0];
    if (previous && current.label === previous[0] && current.href === previous[1] && current.order === previous[2]) {
      await documents.update({ documentId: current.documentId, data: record });
    }
  }

  const newsletter = await documents.findMany({ filters: { key: { $eq: 'footer-newsletter' } } });
  const oldNewsletter = newsletter[0];
  if (oldNewsletter?.label === 'Newsletter' && oldNewsletter.href === '/#newsletter' && oldNewsletter.enabled) {
    await documents.update({
      documentId: oldNewsletter.documentId,
      data: { enabled: false },
    });
  }
}

module.exports = {
  async bootstrap({ strapi }) {
    await seedMissing(strapi, 'api::site-copy.site-copy', 'key', defaultSiteCopy.map(([section, key, value]) => ({ section, key, value })));
    await seedNavigation(strapi);

    const designSystemDocuments = strapi.documents('api::design-system.design-system');
    const designSystems = await designSystemDocuments.findMany({ pagination: { pageSize: 1 } });
    if (!designSystems.length) {
      await designSystemDocuments.create({ data: defaultDesignSystem });
    }

    const topicDocuments = strapi.documents('api::topic.topic');
    const topicsByName = new Map();

    for (const topic of defaultTopics) {
      const existing = await topicDocuments.findMany({
        filters: { slug: { $eq: topic.slug } },
      });
      const document = existing[0] || await topicDocuments.create({ data: topic });
      topicsByName.set(topic.name, document);
    }

    const stories = await strapi.entityService.findMany('api::story.story', {
      fields: ['id', 'topic'],
      populate: { topicRef: { fields: ['id'] } },
    });

    for (const story of stories) {
      const topic = topicsByName.get(story.topic);
      if (!topic || story.topicRef) continue;

      try {
        await strapi.entityService.update('api::story.story', story.id, {
          data: { topicRef: topic.id },
        });
      } catch (error) {
        strapi.log.error(`Could not associate story ${story.id} with topic ${topic.slug}`, error);
      }
    }
  },
};