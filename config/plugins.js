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
    graphql: {
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
