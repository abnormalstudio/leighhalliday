import React from "react";
import { css } from "@emotion/core";

const ArticleCarbon: React.FunctionComponent = () => {
  if (process.env.NODE_ENV === "development") {
    return <div>Carbon Ad</div>;
  }

  const wrapperRef = React.useRef(null);

  React.useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      const script = document.createElement("script");
      script.src =
        "//cdn.carbonads.com/carbon.js?serve=CK7DT23E&placement=leighhallidaycom";
      script.async = true;
      script.id = "_carbonads_js";
      wrapperRef.current.appendChild(script);
    }
  }, []);

  return (
    <div
      ref={wrapperRef}
      css={css`
        #carbonads {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial,
            sans-serif;
        }

        #carbonads {
          display: flex;
          max-width: 330px;
          background-color: hsl(0, 0%, 98%);
          box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, 0.1);
          margin: 0 auto;
        }

        #carbonads a {
          color: inherit;
          text-decoration: none;
        }

        #carbonads a:hover {
          color: inherit;
        }

        #carbonads span {
          position: relative;
          display: block;
          overflow: hidden;
        }

        #carbonads .carbon-wrap {
          display: flex;
        }

        .carbon-img {
          display: block;
          margin: 0;
          line-height: 1;
        }

        .carbon-img img {
          display: block;
        }

        .carbon-text {
          font-size: 13px;
          padding: 10px;
          line-height: 1.5;
          text-align: left;
        }

        .carbon-poweredby {
          display: block;
          padding: 8px 10px;
          background: hsla(203, 11%, 95%, 0.4);
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
          font-size: 9px;
          line-height: 1;
        }
      `}
    ></div>
  );
};

export default ArticleCarbon;
