import React from "react";
import styled from "@emotion/styled";
import Pre from "./pre";
import { UnorderedList, OrderedList, ListItem } from "$components";

const Paragraph = styled.p``;

export default {
  p: (props: any) => <Paragraph {...props} />,
  ul: (props: any) => <UnorderedList {...props} />,
  ol: (props: any) => <OrderedList {...props} />,
  li: (props: any) => <ListItem {...props} />,
  pre: (props: any) => <Pre {...props} />
};
