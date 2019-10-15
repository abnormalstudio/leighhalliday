import React from "react";
import Image from "gatsby-image";
import { css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  Layout,
  SEO,
  H1Line,
  Single,
  UnorderedList,
  ListItem
} from "$components";

const About = () => (
  <StaticQuery
    query={graphql`
      query AboutQuery {
        file(relativePath: { eq: "leigh.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        about: mdx(fields: { name: { eq: "about" } }) {
          body
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="About me" />

        <Single>
          <H1Line>About Me</H1Line>
          <div
            css={css`
              margin: 0 auto;
              max-width: 500px;
            `}
          >
            <Image fluid={data.file.childImageSharp.fluid} />
          </div>

          <MDXRenderer>{data.about.body}</MDXRenderer>
        </Single>
      </Layout>
    )}
  />
);

export default About;
