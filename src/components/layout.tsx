import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import "prismjs/themes/prism-okaidia.css";

import Header from "./header";
import Navigation from "./navigation";
import Reset from "./reset";
import mdxComponents from "./mdx";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Reset />
        <Global styles={styles.global} />
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navigation />
        <div>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
      </>
    )}
  />
);

const styles = {
  global: css`
    html {
      box-sizing: border-box;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.75);
    }
    a {
      text-decoration: none;
      color: #1e8257;
    }
    h1 {
      font-size: 2.5rem;
      margin: 1.25rem 0;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      margin: 1rem 0;
    }
    h3 {
      font-size: 1.5rem;
      margin: 0.75rem 0;
    }
    h4 {
      font-size: 1.25rem;
      margin: 0.5rem 0;
    }
    p {
      margin: 18px 0px;
    }
  `
};

export default Layout;
