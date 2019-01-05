import React from "react";
import { css } from "emotion";
import Link from "gatsby-link";
import Image from "gatsby-image";
import { Tags, H3Line } from "$components";

interface Article {
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

interface Props {
  articles: Article[];
}

const ArticleGrid = ({ articles }: Props) => (
  <div
    css={css`
      max-width: 1200px;
      margin: 0 auto;
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 5px;
      padding: 0px 5px;

      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0px;
      }
      @media (max-width: 470px) {
        grid-template-columns: repeat(1, 1fr);
        padding: 0px;
      }
    `}
  >
    {articles.map(article => (
      <article
        key={article.id}
        css={css`
          display: inline-block;
          padding: 1rem;
          width: 100%;

          img {
            width: 100%;
          }

          a {
            color: rgba(0, 0, 0, 0.75);
          }
        `}
      >
        <Link
          to={`/${article.frontmatter.slug}`}
          css={css`
            display: block;
            padding-bottom: 0.5rem;
          `}
        >
          <Image fluid={article.frontmatter.banner.childImageSharp.fluid} />
        </Link>
        <Tags tags={article.frontmatter.tags} />
        <Link to={`/${article.frontmatter.slug}`}>
          <H3Line>{article.frontmatter.title}</H3Line>
        </Link>

        <p>{article.excerpt}</p>

        <Link
          to={`/${article.frontmatter.slug}`}
          css={css`
            display: block;
            text-align: center;
            font-size: 0.75rem;
          `}
        >
          LEER MÁS
        </Link>
      </article>
    ))}
  </div>
);

export default ArticleGrid;
