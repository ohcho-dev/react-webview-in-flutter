module.exports = {
  // ...other webpack configuration
  devtool: "source-map",
  plugins: [
    new SentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: "example-org",
      project: "example-project",
      release: "0.1.0",
      include: ".",
      ignore: ["node_modules", "webpack.config.js"],
    }),
  ],
};
