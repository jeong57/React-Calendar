import styled from "styled-components";

const Text = styled.div`
  text-align: center;
  margin: 1rem;
  font-size: 12px;
  position: relative;
  bottom: 0%;
`

function Footer() {
  return (
    <Text>Copyright 2022 MinJeong Kim, HyeJin Bae, GeonNyung Heo</Text>
  )
};

export default Footer;