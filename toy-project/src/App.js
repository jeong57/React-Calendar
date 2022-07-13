import Week from './components/Week';
import ToDoList from './components/ToDoList';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [timeList, setTimeList] = useState([]);
  
  return (
    <div>
      <h1>Hi my Calender</h1>
      <Week setTimeList={setTimeList} />
      <ToDoList timeList={timeList} />
      <Footer />
    </div>
  );
}

export default App;
