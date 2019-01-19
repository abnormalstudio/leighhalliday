import React from "react";
import { css } from "@emotion/core";

const ArticleAd: React.FunctionComponent = () => (
  <div
    css={css`
      #carbonads {
        max-width: 400px;
        padding: 15px 15px 15px 15px;
        margin: 1.5rem 0;
        overflow: hidden;
        font-size: 13px;
        line-height: 1.4;
        text-align: left;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        float: right;
        margin-left: 15px;
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
