import {useEffect, useState} from "react";
function ToDoItem(props) {
    console.log(props.data)
    const dataKey = props.dataKey
    // value: 새로 입력한 todo 값
    const [value, setValue] = useState('')
    const changeValue = e => setValue(e.target.value);
    // console.log(props.dataKey)
    const handleSubmit=()=>{ 
      if (props.data[dataKey]) { 
        props.data[dataKey].push(value)
        } else {
          props.data[dataKey] = [value]
        }
      console.log(props.data)
        // setData(data)
    }

    return (
      <div>
        <li>{props.times[1]}월 {props.times[2]}일</li>
        <input 
          value = {value}
          onChange={changeValue}
          type="text" 
          placeholder="할 일"
        />
        <button onClick={handleSubmit}>저장하기</button>
        {/* 주석 */}
        <div>
          {/* 
            {timeList.map((times)=> {
              return (
                <div>
                  <div key={times[2]} style={{border: '1px solid black', display: 'grid'}}>
                    <li >{times[1]}월 {times[2]}일 </li>
                    <h2>Todo List</h2>
                    <div>
                        <input 
                        onChange={handleChangeState}
                        value={state.todo}
                        name="todo"
                        placeholder="할 일"
                        type="text"
                        />
                    </div>
                    <div>
                    <button onClick={handleSubmit}>저장하기</button>
                    </div> 
                    
                  </div>
                </div>
              )
            }} */}
        </div>
    </div>
  )
};

export default ToDoItem;