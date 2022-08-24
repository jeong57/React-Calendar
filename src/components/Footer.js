import styled from "styled-components";

const Text = styled.div`
  text-align: center;
  margin: 3rem 0 1rem;
  font-size: 12px;
  position: relative;
  bottom: 0%;
  @media ${props => props.theme.mobile} {
    font-size: 10px;
  }
`

function Footer() {
  return (
    <Text>Copyright 2022 MinJeong Kim, HyeJin Bae, GeonNyung Heo</Text>
  )
};

export default Footer;