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
    `gatsby-plugin-sharp`,
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
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/favicon.ico'
      }
    }
  ]
}
