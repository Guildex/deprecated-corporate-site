import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '@/lib/constants'

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 24px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid ${colors.blue};
  background-color: ${colors.blue};
  border-radius: 30px;
  transition: all 0.3s;

  &:hover {
    color: ${colors.blue};
    background-color: #fff;
    border-color: ${colors.blue};
  }
`