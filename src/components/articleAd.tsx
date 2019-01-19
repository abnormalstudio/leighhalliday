import React from "react";
import { css } from "@emotion/core";

const ArticleAd: React.FunctionComponent = () => (
  <div
    css={css`
      #carbonads {
        max-width: 400px;
        padding: 1rem;
        margin: 0px auto;
        margin-bottom: 1.5rem;
        overflow: hidden;
        font-size: 0.8rem;
        line-height: 1.2rem;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 5px;

        &:after {
          content: "";
          display: block;
          clear: both;
        }
      }
      #carbonads a {
        text-decoration: none;
        border-bottom: none;
      }
      .carbon-poweredby {
        display: block;
        color: #777 !important;
      }
      .carbon-img {
        float: left;
        margin-right: 15px;
      }
    `}
  >
    <script
      async
      type="text/javascript"
      src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=leighhallidaycom"
      id="_carbonads_js"
    />
  </div>
);

export default ArticleAd;
