const path = require("path");

module.exports = {
  future: {
    webpack5: true,
  },
  pageExtensions: ["tsx"],
  images: {
    loader: "imgix",
    path: "",
  },
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.yml$/,
          type: "json",
          use: "yaml-loader",
        },
        {
          test: /\.svg$/,
          use: "@svgr/webpack",
        },
      ],
    },
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ["@"]: path.join(__dirname, "src"),
      },
    },
  }),
};
