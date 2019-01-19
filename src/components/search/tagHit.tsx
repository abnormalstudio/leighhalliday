import React from "react";
import Link from "gatsby-link";
import { Highlight } from "react-instantsearch-dom";

interface TagHitProps {
  hit: any;
}

const TagHit: React.FunctionComponent<TagHitProps> = ({ hit }) => (
  <div>
    <Link to={`/tags/${hit.tag}`}>
      #<Highlight attribute="tag" hit={hit} />
    </Link>{" "}
    ({hit.numArticles})
  </div>
);

export default TagHit;
