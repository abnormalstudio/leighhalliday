import React from "react";
import styled from "@emotion/styled";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import { splitTags } from "$lib";

interface Props {
  tags: string;
}

const Tags = ({ tags }: Props) => (
  <TagList>
    {splitTags(tags).map(tag => (
      <TagItem key={tag}>
        <Link
          to={`/tags/${tag}`}
          css={css`
            font-size: 0.85rem;
          `}
        >
          #{tag}
        </Link>
      </TagItem>
    ))}
  </TagList>
);

const TagList = styled("ul")`
  display: flex;
  flex-wrap: wrap;
`;
const TagItem = styled("li")`
  padding-right: 5px;
`;

export default Tags;
