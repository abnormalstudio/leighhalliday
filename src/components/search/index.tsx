import React from "react";
import {
  InstantSearch,
  SearchBox,
  PoweredBy,
  Index
} from "react-instantsearch-dom";
import { css } from "emotion";
import ArticleHits from "./articleHits";
import TagHits from "./tagHits";
import CloseIcon from "../../images/icons/close.svg";

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

        h4 {
          margin-top: 0px;
        }
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
            background-color: rgba(245, 245, 245, 1);
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
                right: 0.5rem;
                top: 0.7rem;
                background: #fff;
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
              <TagHits />
            </Index>
            <Index indexName="articles">
              <ArticleHits />
            </Index>
          </div>
          <PoweredBy />
        </div>
      </InstantSearch>
    </div>
  );
};

export default Search;
