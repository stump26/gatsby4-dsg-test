module.exports = {
  siteMetadata: {
    title: "gatsby4-dsg-test",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
  ],
};
