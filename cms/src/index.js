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

module.exports = {
  async bootstrap({ strapi }) {
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