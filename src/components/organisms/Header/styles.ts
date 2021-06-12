import styled from 'styled-components'
import { Link as ScrollLink } from 'react-scroll'

import { colors } from '@/lib/constants'

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
`

export const Logo = styled.img`
  width: 150px;
`

export const LogoLink = styled.a``

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
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