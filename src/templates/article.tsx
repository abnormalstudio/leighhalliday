import { graphql } from "gatsby";
import Helmet from "react-helmet";
import React from "react";
import MDXRenderer from "gatsby-mdx/mdx-renderer";
import { css } from "emotion";
import Image from "gatsby-image";

import {
  Layout,
  Tags,
  SEO,
  ArticleAside,
  H1Line,
  ArticleAd
} from "$components";
import { splitTags } from "$lib";

interface IArticle {
  id: string;
  timeToRead: number;
  excerpt: string;
  code: any;
  frontmatter: {
    slug: string;
    title: string;
    tags: string;
    date: string;
    updated: string;
    banner: any;
  };
}

interface INode {
  node: IArticle;
}

interface Props {
  data: {
    mdx: IArticle;
    allMdx: {
      edges: INode[];
    };
  };
}

const Article = ({ data }: Props) => {
  const { excerpt, frontmatter, code } = data.mdx;
  const { title, tags, date, updated, banner } = frontmatter;

  return (
    <Layout>
      <SEO keywords={splitTags(tags)} title={title} description={excerpt} />
      <Helmet>
        <meta property="og:image" content={banner.childImageSharp.fluid.src} />
      </Helmet>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 2rem auto;
          padding: 15px;
        `}
      >
        <article
          css={css`
            width: 75%;
            padding-right: 2rem;

            @media (max-width: 768px) {
              width: 100%;
              padding: 0px 0.5rem;
            }

            img {
              max-width: 100%;
            }
          `}
        >
          <Image
            fluid={banner.childImageSharp.fluid}
            css={css`
              display: block;
              margin-bottom: 1rem;
            `}
          />
          <Tags tags={tags} />
          <H1Line>{title}</H1Line>

          <div
            css={css`
              text-transform: uppercase;
              font-size: 0.75rem;
            `}
          >
            {date}
            {updated && <span>, updated {updated}</span>}
          </div>

          <div
            css={css`
              margin-top: 2rem;
              margin-bottom: 2rem;
            `}
          >
            <MDXRenderer>{code.body}</MDXRenderer>
          </div>
          <div>
            <ArticleAd />
          </div>
        </article>

        <ArticleAside
          articles={data.allMdx ? data.allMdx.edges.map(edge => edge.node) : []}
        />
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($id: String!, $tagRegex: String!) {
    mdx(id: { eq: $id }) {
      id
      timeToRead
      excerpt
      frontmatter {
        slug
        title
        tags
        date(formatString: "MMM D, YYYY", locale: "en")
        updated(formatString: "MMM D, YYYY", locale: "en")
        banner {
          childImageSharp {
            fluid(maxWidth: 850) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      code {
        body
      }
    }
    allMdx(
      filter: { id: { ne: $id }, frontmatter: { tags: { regex: $tagRegex } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 4
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
            date(formatString: "MMM D, YYYY", locale: "en")
            updated(formatString: "MMM D, YYYY", locale: "en")
            banner {
              childImageSharp {
                fluid(maxWidth: 200) {
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

export default Article;
