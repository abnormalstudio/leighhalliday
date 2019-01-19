import React from "react";
import { css } from "@emotion/core";
import { connectHits } from "react-instantsearch-dom";
import ArticleHit from "./articleHit";

const ArticleHits = ({ hits }: any) => (
  <>
    <h3>Articles</h3>
    <ul
      css={css`
        display: flex;
        flex-wrap: wrap;

        > li {
          padding: 0px 1rem 0px 0px;
          width: 33%;

          @media (max-width: 1024px) {
            width: 50%;
          }
          @media (max-width: 768px) {
            width: 100%;
          }
        }
      `}
    >
      {hits.slice(0, 6).map((hit: any) => (
        <li key={hit.objectID}>
          <ArticleHit hit={hit} />
        </li>
      ))}
    </ul>
  </>
);

const ConnectedArticleHits = connectHits(ArticleHits);

export default ConnectedArticleHits;
