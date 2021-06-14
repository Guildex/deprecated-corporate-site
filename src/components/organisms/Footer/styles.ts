import styled from 'styled-components'

import { colors } from '@/styles/constants'
import { media } from '@/styles/media'

export const Container = styled.footer`
  padding: 40px;
  color: #fff;
  background-color: ${colors.navy};
  text-align: center;

  ${media.phone`
    padding: 24px;
  `}
`

export const CopyRightBox = styled.div`
  margin-top: 20px;
`

export const Logo = styled.img`
  width: 150px;

  ${media.phone`
    width: 120px;
  `}
`