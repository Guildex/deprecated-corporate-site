import styled from 'styled-components'

import { Button as AtomButton } from '@/components/atoms'

export const Container = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`

export const Button = styled(AtomButton)`
  width: 200px;
`