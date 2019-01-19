import React from "react";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import { Highlight } from "react-instantsearch-dom";
import { parseISO, format } from "date-fns";
import { Tags } from "$components";

interface ArticleHitProps {
  hit: any;
}

const ArticleHit: React.FunctionComponent<ArticleHitProps> = ({ hit }) => (
  <div>
    <Link to={`/${hit.slug}`}>
      <h4
        css={css`
          margin-bottom: 0.5rem;
        `}
      >
        <span className="hit-title">
          <Highlight attribute="title" hit={hit} />
        </span>
      </h4>
    </Link>
    <div
      css={css`
        font-size: 0.75rem;
        margin-bottom: 0.75rem;
      `}
    >
      {format(parseISO(hit.date), "MMM d, YYYY", {
        awareOfUnicodeTokens: true
      })}
    </div>
    <Tags tags={hit.tags.join(", ")} />
    <p>
      <span className="hit-excerpt">
        <Highlight attribute="excerpt" hit={hit} />
      </span>
    </p>
  </div>
);

export default ArticleHit;
