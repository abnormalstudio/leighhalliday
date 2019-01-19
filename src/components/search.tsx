import React from "react";
import Link from "gatsby-link";
import {
  InstantSearch,
  SearchBox,
  Highlight,
  PoweredBy,
  Index,
  connectHits
} from "react-instantsearch-dom";
import { css } from "emotion";
import { parseISO, format } from "date-fns";
import { Tags } from "./index";
import CloseIcon from "../images/icons/close.svg";

interface Props {
  showSearch: boolean;
  onCloseClick: () => void;
}

const Search: React.FunctionComponent<Props> = ({
  showSearch,
  onCloseClick
}) => {
  if (!showSearch) {
    return null;
  }

  return (
    <div
      css={css`
        position: relative;
        width: 100%;
      `}
    >
      <InstantSearch
        appId="586KGQDU4K"
        apiKey="b12bac4c5d83074ab66d634565d5ae29"
        indexName="articles"
      >
        <div
          css={css`
            position: absolute;
            z-index: 5;
            background-color: rgba(240, 240, 240, 0.95);
            border-bottom: 2px solid rgba(0, 0, 0, 0.25);
            padding-bottom: 1rem;
            width: 100%;

            .ais-SearchBox-input {
              width: 100%;
              font-size: 1.5rem;
              padding: 0.5rem;
              border-radius: 0px;
              border: none;
              border-bottom: 1px solid rgba(0, 0, 0, 0.25);
              border-top: 1px solid rgba(0, 0, 0, 0.25);
            }

            .ais-SearchBox-submit,
            .ais-SearchBox-reset {
              display: none;
            }

            .ais-PoweredBy {
              display: inline-block;
              transform: scale(0.6) translateX(-20%);
            }
            .ais-PoweredBy-text {
              transform: translateY(-7px);
              display: inline-block;
            }
          `}
        >
          <div
            css={css`
              position: relative;
            `}
          >
            <button
              onClick={onCloseClick}
              css={css`
                position: absolute;
                right: 0.7rem;
                top: 0.7rem;
                background: none;
                color: inherit;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                outline: inherit;
              `}
            >
              <img
                src={CloseIcon}
                alt="close icon"
                css={css`
                  width: 1.5rem;
                `}
              />
            </button>
            <SearchBox autoFocus={true} />
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;

              .ais-MultiIndex__root {
                padding: 1rem 1rem;
                width: 80%;

                @media (max-width: 768px) {
                  padding: 0.5rem 1rem;
                  width: 100% !important;
                }
              }
              .ais-MultiIndex__root:first-of-type {
                width: 20%;
              }

              .ais-Highlight-highlighted {
                background-color: pink;
              }
            `}
          >
            <Index indexName="tags">
              <ConnectedTagHits />
            </Index>
            <Index indexName="articles">
              <ConnectedArticleHits />
            </Index>
          </div>
          <PoweredBy />
        </div>
      </InstantSearch>
    </div>
  );
};

const TagHits = ({ hits }: any) => (
  <>
    <h4>Tags</h4>
    {hits.length > 0 ? (
      <ul>
        {hits.slice(0, 9).map((hit: any) => (
          <li
            key={hit.objectID}
            css={css`
              margin-bottom: 0.5rem;
            `}
          >
            <TagHit hit={hit} />
          </li>
        ))}
      </ul>
    ) : (
      <small>
        <em>No hay resultados</em>
      </small>
    )}
  </>
);

const ConnectedTagHits = connectHits(TagHits);

interface TagHitProps {
  hit: any;
}

const TagHit: React.FunctionComponent<TagHitProps> = ({ hit }) => (
  <div>
    <Link to={`/tags/${hit.tag}`}>
      #<Highlight attribute="tag" hit={hit} />
    </Link>{" "}
    ({hit.numArticles})
  </div>
);

const ArticleHits = ({ hits }: any) => (
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
);

const ConnectedArticleHits = connectHits(ArticleHits);

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

export default Search;
