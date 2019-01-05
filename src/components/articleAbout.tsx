import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Link from "gatsby-link";
import { H3Line } from "$components";

const ArticleAbout = () => (
  <StaticQuery
    query={graphql`
      query ArticleAboutQuery {
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
      <div>
        <H3Line>Sobre Mí</H3Line>
        <Image fluid={data.file.childImageSharp.fluid} />
        <p>Hola! Yo soy Marian Serna, la paisa de esta página.</p>
        <p>
          <Link to="/sobre">Leer más</Link>
        </p>
      </div>
    )}
  />
);

export default ArticleAbout;
