import { graphql, StaticQuery } from "gatsby";
import React from "react";
import styled from "@emotion/styled";
import { Layout, SEO, ArticleTile, ArticleGrid, Single } from "$components";

interface IArticle {
  id: string;
  timeToRead: number;
  excerpt: string;
  frontmatter: {
    title: string;
    slug: string;
    date: string;
    tags: string;
    banner: any;
  };
}

interface IArticleNode {
  node: IArticle;
}

interface IndexPageProps {
  allMdx: {
    edges: IArticleNode[];
  };
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexArticlesQuery {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 13) {
          edges {
            node {
              id
              timeToRead
              excerpt
              frontmatter {
                slug
                title
                tags
                date(formatString: "MMMM D, YYYY", locale: "es")
                updated(formatString: "MMMM D, YYYY", locale: "es")
                banner {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data: IndexPageProps) => {
      const articles = data.allMdx.edges.map(edge => edge.node);
      const topArticles = articles.slice(0, 4);
      const restArticles = articles.slice(4);

      return (
        <Layout>
          <SEO title="Home" keywords={["gatsby", "application", "react"]} />
          <ArticleRow articles={topArticles} />
          <Single>
            <ArticleGrid articles={restArticles} />
          </Single>
        </Layout>
      );
    }}
  />
);

interface ArticleRowProps {
  articles: IArticle[];
}

const ArticleRow = ({ articles }: ArticleRowProps) => (
  <ArticleRowDiv>
    {articles.map(({ id, timeToRead, frontmatter }) => (
      <ArticleTile
        key={id}
        timeToRead={timeToRead}
        title={frontmatter.title}
        slug={frontmatter.slug}
        tags={frontmatter.tags}
        date={frontmatter.date}
        banner={frontmatter.banner}
      />
    ))}
  </ArticleRowDiv>
);

const ArticleRowDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default IndexPage;
