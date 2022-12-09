import styled from "styled-components";

import { media } from "@/styles/media";

export const Container = styled.section`
  padding: 100px 0;

  ${media.phone`
    padding: 40px 0;
  `}
`;

export const ChildrenBox = styled.div`
  padding: 100px 60px;
  background-color: #fff;
  border-radius: 20px;

  ${media.phone`
    padding: 40px 12px;
  `}
`;

export const Head = styled.h3`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;

  ${media.phone`
    margin-bottom: 16px;
    font-size: 24px;
  `}
`;
