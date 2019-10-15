import { graphql } from "gatsby";
import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import { Layout, SEO, ArticleGrid, H1Line, Single } from "$components";

interface ArticleNode {
  node: {
    id: string;
    timeToRead: number;
    excerpt: string;
    frontmatter: {
      slug: string;
      title: string;
      tags: string;
      date: string;
      updated: string;
      banner: any;
    };
  };
}

interface Props {
  data: {
    allMdx: {
      edges: ArticleNode[];
    };
  };
  pageContext: {
    page: number;
    tag: string;
    prevUrl: null | string;
    nextUrl: null | string;
  };
}

const Tag = ({ data, pageContext: { page, tag, prevUrl, nextUrl } }: Props) => {
  return (
    <Layout>
      <SEO title={`#${tag} page ${page}`} />
      <Single>
        <H1Line>
          #{tag} {page > 1 && <span>page {page}</span>}
        </H1Line>

        <ArticleGrid articles={data.allMdx.edges.map(edge => edge.node)} />

        {prevUrl || nextUrl ? (
          <div
            css={css`
              text-align: center;
            `}
          >
            {prevUrl && <Link to={prevUrl}>Prev</Link>}
            {prevUrl && nextUrl && " "}
            {nextUrl && <Link to={nextUrl}>Next</Link>}
          </div>
        ) : null}
      </Single>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($tagRegex: String!, $limit: Int!, $skip: Int!) {
    allMdx(
      filter: {
        frontmatter: { tags: { regex: $tagRegex } }
        fields: { sourceInstanceName: { eq: "articles" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          timeToRead
          excerpt
          frontmatter {
            slug
            title
            tags
            date(formatString: "MMMM D, YYYY", locale: "en")
            updated(formatString: "MMMM D, YYYY", locale: "en")
            banner {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Tag;
