import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    outline: 0;
    padding: 0;

    color: #f0eeeb;
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: #030303;
  }

  input {
    color: #030303;
  }

  a:enabled, button:enabled {
    cursor: pointer;
  }
`
