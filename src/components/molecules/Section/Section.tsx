import * as React from 'react'
import { Inner } from '@/components/atoms'

import { Container, ChildrenBox, Head } from './styles'

type Props = {
  id?: string
  head: string
}

export const Section: React.FC<Props> = ({ id, head, children }) => {
  return (
    <Container id={id ?? ''}>
      <Inner>
        <ChildrenBox>
          <Head>{head}</Head>
          {children}
        </ChildrenBox>
      </Inner>
    </Container>
  )
}