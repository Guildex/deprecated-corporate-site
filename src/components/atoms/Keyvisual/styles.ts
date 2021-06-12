import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  color: #fff;
  height: 100vh;
  background-size: cover;
  background-position: right;
  background-image: url('/images/keyvisual.jpg');

  &::before,
  &::after {
    display: block;
    content: '';
    position: absolute;
  }

  &::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    left: calc(50% - (30px / 2));
    bottom: 40px;
    width: 30px;
    height: 30px;
    border-left: 4px solid #fff;
    border-bottom: 4px solid #fff;
    transform: rotate(-45deg);
  }
`

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: bold;
`

export const TextBox = styled.div`
  position: relative;
`

export const Text = styled.p`
  margin-top: 32px;
  font-size: 18px;;
  line-height: 2;
`