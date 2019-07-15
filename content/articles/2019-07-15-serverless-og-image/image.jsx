import React from "react";

export default function image({ url, alt }) {
  return (
    <img
      style={{ maxWidth: "350px", display: "block", margin: "0 auto" }}
      src={url}
      alt={alt}
    />
  );
}
