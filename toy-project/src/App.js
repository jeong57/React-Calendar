import Week from './components/Week';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
import { useState } from 'react';
import { RecoilRoot } from "recoil";

import styled from 'styled-components';

const GridBox = styled.div`
  min-height: 800px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 16px;
  background-image: ${props => props.theme.bgColor};
  @media ${props => props.theme.mobile} {
    grid-template-rows: 1fr 4fr;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const Container = styled.div`
  height : 100vh;
  margin: 1rem 0;
  .title {
    font-family: ${props => props.theme.titleFont};
    text-align: center;
    font-size: 45px;
    margin: 3rem 1rem 1.5rem;
    color: #DE1B1B;
    @media ${props => props.theme.mobile} {
      font-size: 35px;
    }
  }
`

function App() {
  const [timeList, setTimeList] = useState([]);
  
  return (
    <RecoilRoot>
      <Container>
        <div className='title'>Hi, My Calendar</div>
        <GridBox>
          <Week setTimeList={setTimeList} />
          <ToDoList timeList={timeList} />
        </GridBox>
        <Footer />
      </Container>
    </RecoilRoot>
  );
}

export default App;
