import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 1px;
  }

  body {
    padding : 0px 15px;
    background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(254,235,235,1) 35%, rgba(255,252,252,1) 100%);
  }
  
  h1 {
    font-size : 40px;
    font-weight: 700;
    padding: 1rem 0rem;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    padding: 1rem 0rem;
  }
`

export default GlobalStyle