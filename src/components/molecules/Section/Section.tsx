import * as React from 'react'
import styled from 'styled-components'

import { Inner } from '@/components/atoms'

const Container = styled.section`
  padding: 100px 0;
`

const ChildrenBox = styled.div`
  padding: 100px 60px;
  background-color: #fff;
  border-radius: 20px;
`

const Head = styled.h3`
  margin-bottom: 60px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`

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