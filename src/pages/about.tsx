import React from "react";
import Image from "gatsby-image";
import { css } from "emotion";
import { StaticQuery, graphql } from "gatsby";
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
      }
    `}
    render={data => (
      <Layout>
        <SEO title="About Leigh Halliday" />

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
          <p>
            My name is Leigh Halliday! I'm currently based out of Toronto (well,
            Rockwood!), Canada, where I live with my wonderful wife Marian
            Serna. I am a developer at{" "}
            <a href="https://www.flipgive.com">FlipGive</a> and at{" "}
            <a href="https://www.abnormalstudio.com">ABNORMAL studio</a>. I
            produce React and JavaScript tutorials on{" "}
            <a href="https://www.youtube.com/leighhalliday">YouTube</a>.
          </p>

          <p>
            You can reach out to me via email at{" "}
            <a href="mailto:leighhalliday@gmail.com">leighhalliday@gmail.com</a>
            .
          </p>

          <p>
            I love back country camping, travelling, growing sprouts, making
            guacamole, brewing kombucha, hablando en espańol, doing exercise,
            and hiking.
          </p>

          <h2>Past Jobs</h2>
          <UnorderedList>
            <ListItem>
              Senior Developer at Regalii{" "}
              <a href="https://www.arcusfi.com/">(now arcus)</a>
            </ListItem>
            <ListItem>
              Developer at <a href="https://www.thescore.com/">theScore</a>
            </ListItem>
            <ListItem>
              Instructor at{" "}
              <a href="https://lighthouselabs.ca/">Lighthouse Labs</a>
            </ListItem>
            <ListItem>
              Lead Developer at <a href="https://www.flipgive.com/">FlipGive</a>
            </ListItem>
            <ListItem>
              Web Developer at{" "}
              <a href="https://www.carlton.ca/">Carlton Group</a>
            </ListItem>
            <ListItem>
              Programmer at{" "}
              <a href="https://www.ctg.queensu.ca/">
                National Cancer Institute of Canada, Clinical Trials Group
              </a>
            </ListItem>
          </UnorderedList>

          <h2>Writing</h2>
          <UnorderedList>
            <ListItem>
              React &amp; JavaScript on{" "}
              <a href="https://www.telerik.com/blogs/author/leigh-halliday">
                Telerik
              </a>
            </ListItem>
            <ListItem>
              Ruby on Rails &amp; Elixir on{" "}
              <a href="https://blog.codeship.com/author/leighhalliday/">
                Codeship
              </a>
            </ListItem>
          </UnorderedList>

          <h2>Technical Experience</h2>
          <UnorderedList>
            <ListItem>7+ years Ruby on Rails</ListItem>
            <ListItem>3+ years with React, Gatsby, Next.js</ListItem>
            <ListItem>~1 year Elixir &amp; Phoenix</ListItem>
            <ListItem>~1 year Python</ListItem>
            <ListItem>10+ years PHP (CakePHP, Symfony, Wordpress)</ListItem>
            <ListItem>Databases: Postgres, MySQL, Redis, MongoDB</ListItem>
          </UnorderedList>
        </Single>
      </Layout>
    )}
  />
);

export default About;
