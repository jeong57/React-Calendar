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