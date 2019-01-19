import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import { splitTags } from "$lib";

interface Props {
  title: string;
  slug: string;
  tags: string;
  date: string;
  timeToRead: number;
  banner: {
    childImageSharp: any;
  };
}

const ArticleTile = ({ title, slug, tags, banner }: Props) => {
  return (
    <div css={styles.outer}>
      <div
        css={styles.image}
        style={{
          backgroundImage: `url('${banner.childImageSharp.fluid.src}')`
        }}
      />
      <div css={styles.content}>
        <div
          css={css`
            font-size: 0.75rem;
          `}
        >
          {splitTags(tags)
            .slice(0, 3)
            .map(tag => (
              <span key={tag}>
                <Link to={`/tags/${tag}`}>#{tag}</Link>{" "}
              </span>
            ))}
        </div>
        <Link to={`/${slug}`}>
          <h3
            css={css`
              padding: 0px 1rem 0.75rem 1rem;

              @media (max-width: 1024px) {
                font-size: 1rem;
                line-height: 1.25rem;
                padding-bottom: 0.5rem;
                margin: 0.5rem 0px;
              }
            `}
          >
            {title}
          </h3>
        </Link>
        <Link
          to={`/${slug}`}
          css={css`
            font-size: 0.75rem;
            border: 2px solid rgba(255, 255, 255, 0.9);
            padding: 0.5rem;
          `}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
};

const styles = {
  outer: css`
    position: relative;
    width: calc(25vw - 2px);
    height: calc(25vw - 2px);
    color: rgba(255, 255, 255, 0.9);

    ::before {
      background-color: rgba(0, 0, 0, 0.25);
      content: "";
      display: inline-block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 1;
    }

    @media (max-width: 768px) {
      width: calc(50vw - 2px);
      height: calc(50vw - 2px);
      margin-bottom: 4px;
    }

    @media (max-width: 500px) {
      width: calc(100vw);
      height: calc(50vw);
      margin-bottom: 4px;
    }

    a {
      color: rgba(255, 255, 255, 0.9);
    }
  `,
  image: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-size: cover;
    background-position: center center;
  `,
  content: css`
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    z-index: 2;
    text-align: center;
  `
};

export default ArticleTile;
