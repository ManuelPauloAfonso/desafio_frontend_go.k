import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    font-family: 'Mulish', sans-serif;
  }

  a{
    text-decoration: none;
  }

  button, input, textarea{
    outline: 0;
    -webkit-appearance: none;
    border: none;
    background: none;
  }

  ul, li, ol{
    list-style: none;
  }
`;
