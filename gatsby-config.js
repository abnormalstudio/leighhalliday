require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
});

const articlesQuery = `{
  allMdx {
    edges {
      node {
        id
        timeToRead
        excerpt(pruneLength: 200)
        frontmatter {
          slug
          title
          date
          tags
        }
      }
    }
  }
}`;

const tagsQuery = `{
  allMdx {
    edges {
      node {
        id
        frontmatter {
          tags
        }
      }
    }
  }
}`;

const splitTags = tags => tags.split(",").map(tag => tag.trim());

const queries = [
  {
    query: articlesQuery,
    indexName: "articles",
    transformer: ({ data }) =>
      data.allMdx.edges.map(({ node }) => ({
        objectID: node.id,
        title: node.frontmatter.title,
        tags: splitTags(node.frontmatter.tags),
        date: node.frontmatter.date,
        slug: node.frontmatter.slug,
        timeToRead: node.timeToRead,
        excerpt: node.excerpt
      }))
  },
  {
    query: tagsQuery,
    indexName: "tags",
    transformer: ({ data }) => {
      /*
      Produce: {tag1: 5, tag2: 1}
      */
      const tagHash = data.allMdx.edges.reduce((acc, { node }) => {
        return splitTags(node.frontmatter.tags).reduce((nodeAcc, tag) => {
          if (!nodeAcc[tag]) {
            nodeAcc[tag] = 0;
          }
          nodeAcc[tag] += 1;
          return nodeAcc;
        }, acc);
      }, {});

      /*
      Produce: [{tag: 'tag1', numArticles: 5}, {tag: 'tag2', numArticles: 1}]
      */
      return Object.keys(tagHash).map(tag => ({
        tag,
        objectID: tag,
        numArticles: tagHash[tag]
      }));
    }
  }
];

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.leighhalliday.com",
    title: "Leigh Halliday",
    description:
      "Leigh is a developer at FlipGive. He writes about Ruby, Rails, React and JavaScript.",
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
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "leighhalliday",
        short_name: "leigh",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/icon-512x512.png"
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-56612129-2",
        anonymize: false,
        respectDNT: false,
        cookieDomain: "leighhalliday.com"
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
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              author
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return {
                  author: site.siteMetadata.author,
                  title: node.frontmatter.title,
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: `${site.siteMetadata.siteUrl}/${node.frontmatter.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${node.frontmatter.slug}`,
                  categories: splitTags(node.frontmatter.tags)
                };
              });
            },
            query: `
            {
              allMdx(
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
              ) {
                edges {
                  node {
                    id
                    timeToRead
                    excerpt(pruneLength: 250)
                    frontmatter {
                      slug
                      title
                      date
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: "/rss.xml",
            title: "Leigh Halliday's RSS Feed"
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        queries
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
