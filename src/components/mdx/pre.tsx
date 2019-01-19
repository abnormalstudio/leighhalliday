import React from "react";
import Code from "./code";

const preToCodeBlock = (preProps: any) => {
  if (
    // children is MDXTag
    preProps.children &&
    // MDXTag props
    preProps.children.props &&
    // if MDXTag is going to render a <code>
    preProps.children.props.name === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      props: { className, ...props }
    } = preProps.children.props;

    return {
      codeString: codeString.trim(),
      language: className && className.split("-")[1],
      ...props
    };
  }
  return undefined;
};

const Pre = (preProps: any) => {
  const props = preToCodeBlock(preProps);

  // if there's a codeString and some props, we passed the test
  if (props) {
    return <Code {...props} />;
  } else {
    // it's possible to have a pre without a code in it
    return <pre {...preProps} />;
  }
};

export default Pre;
