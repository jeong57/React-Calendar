import { useState, useEffect } from "react";
import "./ToDoItem.css"
import styled from "styled-components";

const Item = styled.span`
  text-decoration-line: ${ props => props.isFinished };
  color : ${ props => props.color };
  :hover {
    cursor : pointer;
  }
`
const Button = styled.button`
  cursor : pointer;
`

function ToDoItem({times, dataKey, data, setData, count, setCount}) {
    // {
      //   20220705 : [
        //   {key:2, todo : value, isFinished : false,},
        //   {key:3, todo2: value, isFinished: false}
        //  ]
        // }
    const [value, setValue] = useState('');
    const changeValue = e => setValue(e.target.value);

    // todo의 key 값으로 쓸 count
    useEffect(() => {
      window.localStorage.setItem("count", JSON.stringify(count));
    }, [count]);

    // todo 생성
    const createTodo=(event)=>{ 
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

    // todo 완료 표시하기(취소선)
    const updateTodo=(event, key) => {
      const changedTodos = data[dataKey].map((day) => {
        if (day.key === key) {
          day.isFinished = !day.isFinished
          console.log(day.isFinished)
        } return day
      })
      data[dataKey] = changedTodos
      setData(data)
      localStorage.setItem('todos', JSON.stringify(data))
      window.location.reload()
    }
    
    // todo 삭제하기
    const deleteTodo=(event, key)=>{
      const deleteDay = data[dataKey].filter((day) => {
        return day.key !== key
      })
      data[dataKey] = deleteDay
      setData(data)
      localStorage.setItem('todos', JSON.stringify(data))
      window.location.reload()
    }
  
  return (
    <div>
      <li>{times[1]}월 {times[2]}일</li>
      <form onSubmit={event => createTodo(event)}>
        <input 
          value = {value}
          onChange={changeValue}
          type="text" 
          placeholder="할 일"
        />
        <Button onClick={event => createTodo(event)}>저장</Button>
      </form>
      <div>
        { data && data[dataKey] ? data[dataKey].map((todo) => {
          return (
            <div key={todo.key}>
              <Button onClick={(event) => deleteTodo(event, todo.key)}>x</Button>
              <Item 
                isFinished={ todo.isFinished ? 'line-through' : 'none' }
                color={todo.isFinished ? 'gray' : 'black' }
                onClick={(event) => updateTodo(event, todo.key)}
              >{todo.todo}
              </Item>
              
            </div>
          )
        }) : null}
      </div>
    </div>
  )
};


export default ToDoItem;