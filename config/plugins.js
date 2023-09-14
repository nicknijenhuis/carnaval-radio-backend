const { isTrue } = require("../utils/isTrue");

module.exports = ({ env }) => {
  const useCloudinary = isTrue(env("USE_CLOUDINARY", false));

  return {
    upload: useCloudinary
      ? {
          config: {
            provider: "cloudinary",
            providerOptions: {
              cloud_name: env("CLOUDINARY_NAME"),
              api_key: env("CLOUDINARY_KEY"),
              api_secret: env("CLOUDINARY_SECRET"),
            },
            actionOptions: {
              upload: {},
              delete: {},
            },
          },
        }
      : null,
    navigation: {
      enabled: true,
      config: {
        additionalFields: [
          {
            name: "Icon",
            type: "string",
            label: "Icon",
            required: false,
          },
        ],
        contentTypes: ["api::page.page", "api::article.article"],
        contentTypesNameFields: {
          "api::page.page": ["Title"],
          "api::article.article": ["Title"],
        },
        pathDefaultFields: {
          "api::page.page": ["Slug"],
          "api::article.article": ["Slug"],
        },
        allowedLevels: 3,
      },
    },
    graphql: {
      enabled: true,
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: true,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };
};
