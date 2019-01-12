import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";
import YouTubeIcon from "../images/icons/youtube.svg";
import GitHubIcon from "../images/icons/github.svg";
import TwitterIcon from "../images/icons/twitter.svg";
import SearchIcon from "../images/icons/search.svg";

interface Props {
  siteTitle: string;
  onSearchClick: () => void;
}

const Header = ({ siteTitle, onSearchClick }: Props) => (
  <div
    css={css`
      max-width: 1200px;
      margin: 2rem auto;
      display: flex;
    `}
  >
    <div
      css={css`
        width: 20%;
        display: flex;
        justify-content: center;
      `}
    >
      <a href="https://www.youtube.com/leighhalliday" title="YouTube">
        <img src={YouTubeIcon} alt="YouTube" css={styles.icon} />
      </a>
      <a href="https://www.github.com/leighhalliday" title="GitHub">
        <img src={GitHubIcon} alt="GitHub" css={styles.icon} />
      </a>
    </div>
    <div
      css={css`
        width: 60%;
        text-align: center;
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 2.5rem;
          line-height: 2.5rem;
          color: rgba(0, 0, 0, 0.75);
          text-transform: uppercase;
          display: block;

          @media (max-width: 768px) {
            font-size: 1.75rem;
          }
        `}
      >
        {siteTitle}
      </Link>
    </div>
    <div
      css={css`
        width: 20%;
        display: flex;
        justify-content: center;
      `}
    >
      <a href="https://www.twitter.com/leighchalliday" title="Twitter">
        <img src={TwitterIcon} alt="Twitter" css={styles.icon} />
      </a>
      <button
        css={css`
          background: none;
          padding: 0px;
          border: none;
          cursor: pointer;
        `}
        onClick={onSearchClick}
        title="Buscar"
      >
        <img src={SearchIcon} alt="Search" css={styles.icon} />
      </button>
    </div>
  </div>
);

Header.defaultProps = {
  siteTitle: ""
};

const styles = {
  icon: css`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;
    display: inline-block;
  `
};

export default Header;
