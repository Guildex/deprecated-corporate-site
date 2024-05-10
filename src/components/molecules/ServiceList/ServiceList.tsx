import * as React from "react";

import { Bmake } from "./Bmake";
import { Frappy } from "./Frappy";
import * as Styled from "./styles";

export const ServiceList: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.LinkList>
        <Frappy />
        <Bmake />
      </Styled.LinkList>
    </Styled.Container>
  );
};
