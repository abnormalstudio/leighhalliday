const path = require("path");

const splitTags = tags => tags.split(",").map(tag => tag.trim());

const tagCounts = articles => {
  const nestedTags = articles.map(({ node }) => {
    return splitTags(node.childMdx.frontmatter.tags);
  });
  const flattenedTags = nestedTags.reduce(
    (allTags, articleTags) => allTags.concat(articleTags),
    []
  );
  return flattenedTags.reduce((tagHash, tag) => {
    if (!tagHash[tag]) {
      tagHash[tag] = 0;
    }
    return { ...tagHash, [tag]: tagHash[tag] + 1 };
  }, {});
};

const createArticlePages = (graphql, createPage) =>
  new Promise((resolve, _) => {
    graphql(`
      {
        allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
          edges {
            node {
              childMdx {
                id
                frontmatter {
                  slug
                  tags
                }
                body
              }
            }
          }
        }
      }
    `).then(result => {
      const articles = result.data.allFile.edges.filter(
        article => article.node.childMdx
      );

      articles.forEach(({ node: { childMdx: { id, frontmatter, code } } }) => {
        const { slug, tags } = frontmatter;
        const tagRegex = `/${splitTags(tags).join("|")}/`;

        createPage({
          path: slug,
          component: path.resolve("./src/templates/article.tsx"),
          context: {
            id,
            tagRegex
          }
        });
      });

      resolve();
    });
  });

const createTagPages = (graphql, createPage) =>
  new Promise((resolve, _) => {
    graphql(`
      {
        allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
          edges {
            node {
              id
              childMdx {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      }
    `).then(result => {
      const articles = result.data.allFile.edges.filter(
        article => article.node.childMdx
      );
      const tagHash = tagCounts(articles);

      Object.keys(tagHash).forEach(tag => {
        const numArticles = tagHash[tag];
        let page = 1;
        const limit = 30;

        for (let i = 0; i < numArticles; i += limit) {
          let nextUrl = null;
          if (i + limit < numArticles) {
            nextUrl = `/tags/${tag}/${page + 1}`;
          }

          let prevUrl = null;
          if (page === 2) {
            prevUrl = `/tags/${tag}`;
          } else if (page > 2) {
            prevUrl = `/tags/${tag}/${page - 1}`;
          }

          createPage({
            path: page === 1 ? `tags/${tag}` : `tags/${tag}/${page}`,
            component: path.resolve("./src/templates/tag.tsx"),
            context: {
              tag,
              page,
              nextUrl,
              prevUrl,
              limit,
              skip: i,
              tagRegex: `/${tag}/`
            }
          });
          page++;
        }
      });

      resolve();
    });
  });

const createArticlesPages = (graphql, createPage) =>
  new Promise((resolve, _) => {
    graphql(`
      {
        allFile(filter: { sourceInstanceName: { eq: "articles" } }) {
          edges {
            node {
              id
              childMdx {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const articles = result.data.allFile.edges.filter(
        article => article.node.childMdx
      );
      const numArticles = articles.length;
      let page = 1;
      const limit = 30;

      for (let i = 0; i < numArticles; i += limit) {
        let nextUrl = null;
        if (i + limit < numArticles) {
          nextUrl = `/articles/${page + 1}`;
        }

        let prevUrl = null;
        if (page === 2) {
          prevUrl = `/articles`;
        } else if (page > 2) {
          prevUrl = `/articles/${page - 1}`;
        }

        createPage({
          path: page === 1 ? `articles` : `articles/${page}`,
          component: path.resolve("./src/templates/articles.tsx"),
          context: {
            page,
            nextUrl,
            prevUrl,
            limit,
            skip: i
          }
        });
        page++;
      }

      resolve();
    });
  });

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return Promise.all([
    createArticlePages(graphql, createPage),
    createArticlesPages(graphql, createPage),
    createTagPages(graphql, createPage)
  ]);
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        $components: path.resolve(__dirname, "src/components"),
        $articles: path.resolve(__dirname, "content/articles"),
        $lib: path.resolve(__dirname, "src/lib")
      }
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    createNodeField({
      name: `sourceInstanceName`,
      node,
      value: parent.sourceInstanceName
    });
    createNodeField({
      name: `name`,
      node,
      value: parent.name
    });
  }
};
