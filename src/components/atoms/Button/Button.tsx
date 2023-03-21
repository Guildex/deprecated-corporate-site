import Link from "next/link";
import styled from "styled-components";

import { colors } from "@/styles/constants";

export const Button = styled(Link)<{ isDisabled: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 24px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 30px;
  transition: all 0.3s;

  ${({ isDisabled }) => `
    border: 2px solid ${isDisabled ? "#a4a4a7" : colors.blue};
    background-color: ${isDisabled ? "#a4a4a7" : colors.blue};
  `}

  ${({ isDisabled }) =>
    !isDisabled &&
    `
    &:hover {
      color: ${colors.blue};
      background-color: #fff;
      border-color: ${colors.blue};
    }
  `}
`;
