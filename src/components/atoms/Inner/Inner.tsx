import * as React from 'react' 
import styled from 'styled-components'

import { media } from '@/styles/media'

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;

  ${media.phone`
    padding: 12px;
  `}
`

export const Inner: React.FC = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}