import React, { useState, useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Global, css } from "@emotion/core";
import { Helmet } from "react-helmet";
import "prismjs/themes/prism-okaidia.css";

import Header from "./header";
import Navigation from "./navigation";
import Reset from "./reset";
import mdxComponents from "./mdx";
import Search from "./search";

interface Props {
  children: any;
}

const Layout = ({ children }: Props) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    document.body.addEventListener("keyup", e => {
      if (e.key === "Escape") {
        setShowSearch(false);
      }
    });
  }, []);

  return (
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Helmet>
          <Header
            siteTitle={data.site.siteMetadata.title}
            onSearchClick={() => {
              setShowSearch(!showSearch);
            }}
          />
          <Navigation />
          <Search
            showSearch={showSearch}
            onCloseClick={() => {
              setShowSearch(false);
            }}
          />
          <div>
            <MDXProvider components={mdxComponents}>{children}</MDXProvider>
          </div>
        </>
      )}
    />
  );
};

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

    pre {
      font-size: 1rem;
    }

    code {
      background-color: aliceblue;
      padding: 0 2px;
    }

    em {
      font-style: italic;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 3rem;
      margin: 1.25rem 0;
      text-align: center;
    }
    h2 {
      font-size: 2rem;
      line-height: 2.5rem;
      margin: 1.25rem 0 1.25rem 0;
    }
    h3 {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 0.75rem 0 1rem 0;
    }
    h4 {
      font-size: 1.25rem;
      line-height: 1.75rem;
      margin: 0.5rem 0 0.75rem 0;
    }

    blockquote {
      margin: 1rem 0;
      padding: 0.5rem 0 0.5rem 1.5rem;
      border-left: 2px solid rgba(0, 0, 0, 0.75);
      font-style: italic;
      font-size: 1.5rem;

      > p {
        margin: 0px;
      }
    }

    p,
    li {
      margin: 1rem 0px;
      font-size: 1rem;
      line-height: 1.75rem;
    }

    strong {
      font-weight: bold;
    }
    small {
      font-size: 0.8rem;
    }

    @media (max-width: 768px) {
      body {
        font-size: 16px;
      }

      h1 {
        font-size: 1.75rem;
        line-height: 2.25rem;
      }
      h2 {
        font-size: 1.5rem;
        line-height: 2rem;
      }
      h3 {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: bold;
      }
    }

    .token.comment {
      color: #879aae;
    }
  `
};

export default Layout;
