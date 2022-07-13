import { useState, useEffect } from "react";


function ToDoItem({times, dataKey, data, setData, count, setCount}) {
    // const intId = useRef(0);
    // value: 새로 입력한 todo 값
    // {
      //   20220705 : [
        //   {key:2, todo : value, isFinished : false,},
        //   {key:3, todo2: value, isFinished: false}
        //  ]
        // }
    const [value, setValue] = useState('');
    const changeValue = e => setValue(e.target.value);

    useEffect(() => {
      window.localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    const handleSubmit=(event)=>{ 
      event.preventDefault();
      if (value.trim()) {
        const obj = {
          key : count,
          todo : value,
          isFinished : false,
        }
        try { 
          data[dataKey] = [
            obj,
            ...data[dataKey] 
          ]
        } catch {
          data = {
            [dataKey] : [obj],
            ...data
          }
        }
        setCount(count+1)
        localStorage.setItem('count', count)
      } else {
        alert("글자를 입력해주세요.")
      }

      setData(data)
      localStorage.setItem("todos", JSON.stringify(data));
      setValue('');
    }
    
    const deleteTodo=(event, idx)=>{
      console.log(idx)
      console.log(data[dataKey])
      // console.log(event)
  
      //window.localStorage.removeItem(key);
      //localStorage.removeItem('myCat'); //삭제
      // localStorage.removeItem('')
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
      <div>
        { data && data[dataKey] ? data[dataKey].map((todo) => {
          return (
            <div key={todo.key}>
              <button onClick={(event) => deleteTodo(event, todo.key)}>x</button>
              <span>{todo.todo}</span>
            </div>
          )
        }) : null}
      </div>
    </div>
  )
};


export default ToDoItem;