import React from "react";
import { css } from "@emotion/core";
import ArticleRelated from "./articleRelated";
import ArticleAbout from "./articleAbout";

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

const ArticleAside = ({ articles }: Props) => (
  <aside css={styles.aside}>
    {articles.length > 0 && <ArticleRelated articles={articles} />}
    <ArticleAbout />
  </aside>
);

const styles = {
  aside: css`
    width: 25%;

    @media (max-width: 768px) {
      width: 100%;
      padding: 0px 0.5rem;
      margin-top: 2rem;
    }
  `
};

export default ArticleAside;
