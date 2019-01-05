import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <div
    css={css`
      max-width: 1200px;
      margin: 2rem auto;
      display: flex;
    `}
  >
    <div
      css={css`
        width: 100%;
        text-align: center;
      `}
    >
      <Link
        to="/"
        css={css`
          font-size: 2.5rem;
          color: rgba(0, 0, 0, 0.75);
          text-transform: uppercase;
        `}
      >
        {siteTitle}
      </Link>
    </div>
  </div>
);

Header.defaultProps = {
  siteTitle: ""
};

export default Header;
