import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/tag";
import { Global, css } from "@emotion/core";
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
        <Global
          styles={css`
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
              color: #1c9963;
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
          `}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Navigation />
        <div>
          <MDXProvider components={mdxComponents}>{children}</MDXProvider>
        </div>
      </>
    )}
  />
);

export default Layout;
