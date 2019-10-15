import React from "react";
import { Helmet } from "react-helmet";

const ArticleCodefund: React.FunctionComponent = () => {
  if (process.env.NODE_ENV === "development") {
    return <div>Codefund Ad</div>;
  }

  return (
    <>
      <Helmet>
        <script src="https://codefund.io/properties/176/funder.js" async />
      </Helmet>
      <div id="codefund" />
    </>
  );
};

export default ArticleCodefund;
