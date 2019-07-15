import React from "react";

export default function image({ url, alt }) {
  return (
    <img
      style={{
        width: "350px",
        maxWidth: "100%",
        display: "block",
        margin: "0 auto"
      }}
      src={url}
      alt={alt}
    />
  );
}
