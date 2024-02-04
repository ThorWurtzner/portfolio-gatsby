module.exports = {
  siteMetadata: {
    title: `Thor Wurtzner`,
    description: `My portfolio`,
    author: `Thor Würtzner`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "montserrat"
          },
          {
            family: "open sans"
          },
          {
            family: "indie flower"
          },
          {
            family: "maven pro"
          }
        ],
      }
    }
  ]
}
