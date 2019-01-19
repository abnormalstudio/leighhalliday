import React from "react";
import styled from "@emotion/styled";

interface Props {
  id: string;
}

const YouTube = ({ id }: Props) => (
  <EmbedContainer>
    <EmbedIFrame
      src={`https://www.youtube.com/embed/${id}`}
      allow="autoplay; encrypted-media"
      title="Embedded YouTube video"
    />
  </EmbedContainer>
);

const EmbedContainer = styled("div")`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
`;

const EmbedIFrame = styled("iframe")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default YouTube;
