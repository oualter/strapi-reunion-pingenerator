module.exports = ({ env }) => ({
  pingenerator: {
    enabled: true,
    resolve: "./src/plugins/pingenerator",
  },
  upload: {
    config: {
      provider: "cloudinary",
      sizeLimit: 250 * 1024 * 1024,
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
  },
});

