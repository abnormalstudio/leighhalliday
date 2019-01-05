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
        padding: 15px;

        li {
          padding: 0px 1rem;
        }

        a {
          color: rgba(0, 0, 0, 0.75);
          text-transform: uppercase;
        }
      `}
    >
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/articulos">Artículos</Link>
      </li>
      <li>
        <Link to="/acerca">Acerca De</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
