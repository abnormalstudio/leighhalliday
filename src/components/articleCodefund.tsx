import React from "react";
import Helmet from "react-helmet";

const ArticleCodefund: React.FunctionComponent = () => (
  <>
    <Helmet>
      <script src="https://codefund.app/properties/176/funder.js" async />
    </Helmet>
    <div id="codefund" />
  </>
);

export default ArticleCodefund;
