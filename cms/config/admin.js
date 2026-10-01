module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },

  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },

  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },

  preview: {
    enabled: true,

    config: {
      allowedOrigins: [
        env('CLIENT_URL', 'http://localhost:3000'),
      ],

      async handler(uid, { documentId, locale, status }) {
        // Only enable preview for Story
        if (uid !== 'api::story.story') {
          return undefined;
        }

        const document = await strapi.documents(uid).findOne({
          documentId,
          fields: ['slug'],
        });

        if (!document?.slug) {
          return undefined;
        }

        const params = new URLSearchParams({
          secret: env('PREVIEW_SECRET'),
          slug: document.slug,
          uid,
          status: status || 'draft',
        });

        if (locale) {
          params.set('locale', locale);
        }

        return `${env(
          'CLIENT_URL',
          'http://localhost:3000'
        )}/api/preview?${params.toString()}`;
      },
    },
  },
});