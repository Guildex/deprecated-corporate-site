import * as React from 'react'
import styled from 'styled-components'
import NextImage from 'next/image'
import type { ImageProps } from 'next/image'

const Component: React.FC<ImageProps> = (props) => {
  return (
    <NextImage {...props} />
  )
}

export const Image = styled(Component)``