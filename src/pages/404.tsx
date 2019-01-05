import React from "react";
import { Layout, SEO, H1Line, Single } from "$components";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Extraviado" />
    <Single>
      <H1Line>Extraviado 🦉</H1Line>
      <p>Ups! La página a la que intentas llegar no existe.</p>
    </Single>
  </Layout>
);

export default NotFoundPage;
