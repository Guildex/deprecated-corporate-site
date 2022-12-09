import styled from "styled-components";

import { media } from "@/styles/media";

export const Container = styled.div``;

export const Record = styled.div`
  display: flex;

  ${media.phone`
    display: block;
  `}

  &:not(:first-child) {
    margin-top: 20px;
  }
`;

export const Key = styled.p`
  width: 40%;
  padding-right: 80px;
  font-weight: bold;
  text-align: right;
  box-sizing: border-box;

  ${media.phone`
    width: 100%;
    padding-right: 0;
    text-align: left;
  `}
`;

export const ListValue = styled.ul`
  margin-left: 1.4em;
  list-style: disc;
  padding: 0;
  box-sizing: border-box;
`;

export const Value = styled.p`
  width: 60%;

  ${media.phone`
    width: 100%;
  `}
`;

export const GoogleMapBox = styled.div`
  margin-top: 60px;

  ${media.phone`
    margin-top: 20px;
  `}
`;
