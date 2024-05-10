import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { media } from "@/styles/media";
import { Button, Image } from "@/components/atoms";
import { colors } from "@/styles/constants";

export const Container = styled.div``;

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  ${media.phone`
    margin-top: 32px;
  `}
`;

export const Ico = styled(FontAwesomeIcon)`
  margin-left: 10px;
`;

export const Link = styled(Button)``;

export const Head = styled.h3`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;

  ${media.phone`
    font-size: 20px;
  `}
`;

export const ParDescription = styled.p`
  color: #8d8d8d;
  line-height: 2;
  white-space: pre-wrap;
`;

export const ThumbBox = styled.figure`
  width: 40%;
  margin-right: 40px;

  ${media.phone`
    width: 100%;
    margin-right: 0;
    margin-bottom: 40px;
  `}
`;

export const Thumb = styled(Image)`
  border-radius: 20px;
`;

export const Detail = styled.div`
  display: flex;
  align-items: flex-start;

  ${media.phone`
    display: block;
  `}
`;

export const Service = styled.div`
  padding: 60px 40px;
  background-color: #f6f6f6;
  border-radius: 20px;

  ${media.phone`
    padding: 20px;
  `}
`;

export const TextBox = styled.div`
  flex: 1;
`;

export const AnchorLink = styled.a`
  padding: 12px 24px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  transition: all 0.3s;

  border: 2px solid ${colors.blue};
  background-color: ${colors.blue};

  @media (any-hover: hover) {
    &:hover {
      cursor: pointer;
      color: ${colors.blue};
      background-color: #fff;
      border-color: ${colors.blue};
    }
  }
`;
