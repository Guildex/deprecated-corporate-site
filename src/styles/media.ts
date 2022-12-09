// @ts-nocheck

import { css } from "styled-components";
import { sizes } from "@/styles/constants";

export const media = {
  desktop: (...args: Array<any>) => css`
    @media (min-width: ${sizes.media.desktop}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args: Array<any>) => css`
    @media (min-width: ${sizes.media.tablet}px) and (max-width: ${sizes.media.desktop}px) {
      ${css(...args)};
    }
  `,
  phone: (...args: Array<any>) => css`
    @media (min-width: ${sizes.media.phone}px) and (max-width: ${sizes.media.tablet}px) {
      ${css(...args)};
    }
  `,
};
