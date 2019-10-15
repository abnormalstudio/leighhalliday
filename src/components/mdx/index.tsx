import React from "react";
import { css } from "@emotion/core";
import Pre from "./pre";
import { UnorderedList, OrderedList, ListItem } from "$components";

export default {
  ul: (props: any) => <UnorderedList {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  li: (props: any) => <ListItem {...props} />,
  pre: (props: any) => <Pre {...props} />
};
