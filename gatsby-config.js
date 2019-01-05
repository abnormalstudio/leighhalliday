module.exports = {
  siteMetadata: {
    title: "Paisa en Canadá",
    description: "Paisa en Canadá",
    author: "@leighchalliday"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content/articles`
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "paisa-en-canada",
        short_name: "leigh",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon-256x256.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-typescript",
    {
      resolve: "gatsby-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1024,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {}
            }
          }
        ]
      }
    },
    "gatsby-plugin-offline"
  ]
};
