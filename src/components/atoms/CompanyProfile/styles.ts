import styled from 'styled-components'

export const Container = styled.div``

export const Record = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 20px;
  }
`

export const Key = styled.p`
  width: 40%;
  padding-right: 80px;
  font-weight: bold;
  text-align: right;
  box-sizing: border-box;
`

export const ListValue = styled.ul`
  margin-left: 1.4em;
  list-style: disc;
  padding: 0;
  box-sizing: border-box;
`

export const Value = styled.p`
  width: 60%;
`

export const GoogleMapBox = styled.div`
  margin-top: 60px;
`
