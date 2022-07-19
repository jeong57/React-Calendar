import Week from './components/Week';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
import { useState } from 'react';

import styled from 'styled-components';

const GridBox = styled.div`
  display: grid;
  grid-template-rows: 100vh; //높이
  grid-template-columns: 400px 3fr;
  background-image: ${props => props.theme.bgColor};
  @media ${props => props.theme.mobile} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`

function App() {
  const [timeList, setTimeList] = useState([]);
  
  return (
    <div>
      <h1>Hi my Calendar</h1>
      <GridBox>
        <Week setTimeList={setTimeList} />
        <ToDoList timeList={timeList} />
      </GridBox>
      <Footer />
    </div>
  );
}

export default App;
