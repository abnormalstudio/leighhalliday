import React from "react";
import { Layout, SEO, H1Line, Single } from "$components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Missing" />
    <Single>
      <H1Line>Missing 🦉</H1Line>
      <p>The page you were trying to reach does not exist.</p>
    </Single>
  </Layout>
);

export default NotFoundPage;
