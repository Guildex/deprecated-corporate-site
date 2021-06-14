import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

import { colors } from '@/styles/constants'
import { media } from '@/styles/media'

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  background-color: #000;
  box-sizing: border-box;
  z-index: 1;

  ${media.phone`
    justify-content: center;
    padding: 16px 20px;
  `}
`

export const Logo = styled.img`
  width: 150px;

  ${media.phone`
    width: 120px;
  `}
`

export const LogoLink = styled.a``

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  ${media.phone`
    display: none;
  `}
`

export const NavLink = styled(ScrollLink)`
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  
  transition: all 0.3s;

  &:not(:first-child) {
    margin-left: 50px;
  }

  &:hover {
    color: ${colors.blue};
  }
`