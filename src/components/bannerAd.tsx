import React from "react";
import { css } from "@emotion/core";

export default function BannerAd() {
  return (
    <a
      css={css`
        margin: 1rem 0;
        padding: 1rem;
        text-align: center;
        background-color: rgba(195, 204, 215, 0.2);
        color: rgba(0, 0, 0, 0.75);
        display: block;
        border-radius: 5px;
      `}
      href="#"
    >
      <div
        css={css`
          font-size: 0.85rem;
        `}
      >
        This article is proudly sponsored by
      </div>
      <div
        css={css`
          font-size: 3rem;
          line-height: 3.5rem;
          margin: 0.5rem 0;
          color: #53d2fa;
          font-weight: 700;
          font-family: Metric, Helvetica, Arial, sans-serif;
        `}
      >
        KendoReact
      </div>
      <div>UI for React Developers</div>
    </a>
  );
}
