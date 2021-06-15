import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    line-height: 1.5;
    font-family: 'YuGothic', '游ゴシック体';
    background-color: #f1ebde;
  }
  
  img {
    width: 100%;
    vertical-align: bottom;
  }

  a {
    text-decoration: none;
  }

  input,
  button,
  select,
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
    border: none;
    border-radius: 0;
    font: inherit;
    outline: none;
  }

  textarea {
    height: 200px;
    resize: vertical;
  }

  input[type='checkbox'],
  input[type='radio'] {
    display: none;
  }

  input[type='submit'],
  input[type='button'],
  label,
  button,
  select {
    cursor: pointer;
  }

  select::-ms-expand {
    display: none;
  }
`