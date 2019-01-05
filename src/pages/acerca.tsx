import React from "react";
import Image from "gatsby-image";
import { css } from "emotion";
import { StaticQuery, graphql } from "gatsby";
import { Layout, SEO, H1Line, Single } from "$components";

const Acerca = () => (
  <StaticQuery
    query={graphql`
      query AcercaDeQuery {
        file(relativePath: { eq: "marian.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Acerca de Paisa en Canadá" />

        <Single>
          <H1Line>Acerca de Paisa en Canadá</H1Line>
          <div
            css={css`
              margin: 0 auto;
              max-width: 250px;
            `}
          >
            <Image fluid={data.file.childImageSharp.fluid} />
          </div>
          <p>Hola! Yo soy Marian Serna, la paisa de esta página.</p>
        </Single>
      </Layout>
    )}
  />
);

export default Acerca;
