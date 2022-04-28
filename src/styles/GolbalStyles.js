import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    /* margin: 0; */
    /* padding: 0; */
    color:white;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  html, body{
    /* background-color:black; */
  }
  
  #root{
    position: fixed ;
    top:20px;
    right:20px;
    bottom:20px;
    left:20px;
  }
`;

export default GlobalStyle;
