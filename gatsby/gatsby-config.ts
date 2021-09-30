module.exports = {
  siteMetadata: {
    title: "gatsby4-dsg-test",
    siteUrl: `https://gatsby4-dsg-test.gatsbyjs.io/`, // 임의 url
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
