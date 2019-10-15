import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-json";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";

const Code = ({ codeString, language }: any) => {
  return (
    <Highlight
      {...defaultProps}
      Prism={Prism}
      code={codeString}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }: any) => (
        <pre className={className} style={style}>
          {tokens.map((line: any, i: string) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token: any, key: string) => {
                if (token.empty) {
                  return <br key={key} />;
                }
                return <span {...getTokenProps({ token, key })} />;
              })}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
