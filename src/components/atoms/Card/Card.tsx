import * as React from "react";
import styled from "styled-components";

const Container = styled.div<{ color: string }>`
  padding: 30px;
  border-radius: 10px;

  ${({ color }) => `
    background-color: ${color};
  `}
`;

type Props = {
  color?: string;
};

export const Card: React.FC<Props> = ({ color, children }) => {
  return <Container color={color ?? "#efefef"}>{children}</Container>;
};
