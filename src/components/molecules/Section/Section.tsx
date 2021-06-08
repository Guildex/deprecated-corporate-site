import * as React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  padding: 50px 0;  
`

const Head = styled.h3`
  margin-bottom: 50px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

type Props = {
  head: string
}

export const Section: React.FC<Props> = ({ head, children }) => {
  return (
    <Container>
      <Head>{head}</Head>
      {children}
    </Container>
  )
}