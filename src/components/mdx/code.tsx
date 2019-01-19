import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";

const Code = ({ codeString, language }: any) => {
  return (
    <Highlight
      {...defaultProps}
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
