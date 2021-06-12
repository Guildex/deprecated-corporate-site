import * as React from 'react'

import { Copyright } from '@/components/atoms'
import { Container, CopyRightBox, Logo } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Logo src="/images/logo_white.png" />
      <CopyRightBox>
        <Copyright />
      </CopyRightBox>
    </Container>
  )
}