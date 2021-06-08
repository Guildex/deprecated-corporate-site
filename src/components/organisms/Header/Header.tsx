import * as React from 'react'
import styled from 'styled-components'

import config from '@/lib/config'

const Container = styled.header`
  padding: 20px 40px;
`

const Logo = styled.img`
  width: 150px;
`

export const Header: React.FC = () => {
  return (
    <Container>
      <Logo src="/logo.png" />
    </Container>
  )
}