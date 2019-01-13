import { Link } from "gatsby";
import React from "react";
import { css } from "@emotion/core";

const Navigation = () => (
  <nav>
    <ul
      css={css`
        display: flex;
        justify-content: center;
        margin: 0 auto;
        border-top: 1px solid rgba(0, 0, 0, 0.25);
        padding: 1rem;
        width: 100%;

        @media (max-width: 768px) {
          padding: 1rem 0.5rem;
        }

        li {
          padding: 0px 1rem;

          @media (max-width: 768px) {
            padding: 0px 0.25rem;
          }
        }

        a {
          color: rgba(0, 0, 0, 0.75);
          text-transform: uppercase;
        }
      `}
    >
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/articles">Articles</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
