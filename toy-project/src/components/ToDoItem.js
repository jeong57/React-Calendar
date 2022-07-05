import {useEffect, useState, useRef} from "react";

function ToDoItem({times, dataKey, data, setData}) {
    const intId = useRef(0);
    
    // value: 새로 입력한 todo 값
    // {
      //   20220705 : [
        //   {key:2, todo : value, isFinished : false,},
        //   {key:3, todo2: value, isFinished: false}
        //  ]
        // }
        
    const [value, setValue] = useState('');
    // const [count, setCount] = useState(0);
    
    const changeValue = e => setValue(e.target.value);

    const handleSubmit=(event)=>{ 
      event.preventDefault();
      intId.current += 1;

      const obj = {
        key : intId.current,
        todo : value,
        isFinished : false,
      }

      try { 
        data[dataKey] = [
          obj,
          ...data[dataKey] 
        ]
      } catch {
        setData({})
        // const day = dataKey
        // data.day = [obj]
        data[dataKey] = [obj]
        // [data.dataKey] = [obj]
      }
      // else {
      //     // props.data[dataKey] = [value]
      //   data.dataKey = [obj]
      // }
      setData(data)
      localStorage.setItem("todos", JSON.stringify(data));
      setValue('');
    }

  return (
    <div>
      <li>{times[1]}월 {times[2]}일</li>
      <form onSubmit={event => handleSubmit(event)}>
        <input 
          value = {value}
          onChange={changeValue}
          type="text" 
          placeholder="할 일"
        />
        <button onClick={event => handleSubmit(event)}>저장</button>
      </form>
    </div>
  )
};

export default ToDoItem;