module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: env('NETLIFY_ACCESS_TOKEN'),
        sites: [
          {
            name: env('NETLIFY_NAME'),
            id: env('NETLIFY_ID'),
            buildHook: "https://api.netlify.com/build_hooks/" + env('NETLIFY_HOOK_ID'),
            branch: 'main' // optional
          }
        ]
      }
    },
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    menus: {
      config: {
        layouts: {
          menuItem: {
            link: [
              {
                input: {
                  label: 'Page',
                  name: 'Page',
                  type: 'relation'
                }
              },
            ],
          },
        },
      },
    },
  });
