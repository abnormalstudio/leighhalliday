import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import Link from "gatsby-link";
import { H3Line } from "$components";

const ArticleAbout = () => (
  <StaticQuery
    query={graphql`
      query ArticleAboutQuery {
        file(relativePath: { eq: "leigh.jpg" }) {
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
        <H3Line>About Me</H3Line>
        <Image fluid={data.file.childImageSharp.fluid} alt="Leigh Halliday" />
        <p>
          Engineering Manager at Wrapbook. Writing about Ruby, Rails, React, and JavaScript.
        </p>
        <p>
          <Link to="/about">Read more</Link>
        </p>
      </div>
    )}
  />
);

export default ArticleAbout;
