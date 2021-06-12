import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

import { Button } from '@/components/atoms'
import { colors } from '@/lib/constants'

export const Container = styled.div``

export const LinkList = styled.div`
  display: flex;
  justify-content: center;
`

export const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`

export const Ico = styled(FontAwesomeIcon)`
  margin-left: 10px;
`

export const Link = styled(Button)``

export const Head = styled.h3`
  margin-bottom: 20px;
  padding-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
`

export const Desc = styled.div`
  color: #8d8d8d;
  line-height: 2;
`

export const ThumbBox = styled.figure`
  width: 40%;
  margin-right: 40px;
`

export const Thumb = styled(Image)`
  border-radius: 20px;
`

export const Detail = styled.div`
  display: flex;
  align-items: flex-start;
`

export const Service = styled.div`
  padding: 60px 40px;
  background-color: #f6f6f6;
  border-radius: 20px;
`

export const TextBox = styled.div`
  flex: 1;
`