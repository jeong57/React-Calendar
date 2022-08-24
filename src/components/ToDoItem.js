import { useState, useEffect } from "react";
import styled from "styled-components";

const Item = styled.span`
  text-decoration-line: ${ props => props.isFinished };
  font-family: ${props => props.theme.itemFont};
  color : ${ props => props.color };
  margin-right: 0.8rem;
  :hover {
    cursor : pointer;
  }
`

const Box = styled.div`
  border-radius : 5px;
  height : 200px;
  box-shadow : 1px 3px 10px 3px  #dcdde1; 
  padding: 0.8rem;
  background-color: white;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 4fr;
  .todo-num {
    font-size: 13px;
    font-family: ${props => props.theme.itemFont};
    color: gray;
  }
  .todo-title {
    font-size: 20px;
    font-family: ${props => props.theme.titleFont};
    @media ${props => props.mobile} {
      font-size: 18px;
    }
  }
  .todo-input {
    border: none; 
    background-color: rgba(255, 100, 0, 0.1);
    margin-right: 10px;
    padding: 5px;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    font-family: ${props => props.theme.itemFont};
  }
  .write-icon {
    color: #BA2525;
    :hover {
      cursor: pointer;
    }
  }
  .todo-content-box {
    padding: 0.5rem 0;
    overflow-y: scroll;
    .delete-icon {
      color: gray;
      :hover {
        cursor: pointer;
        color: #DE1B1B;
      }
    }
  }
`


function ToDoItem({times, dataKey, data, setData, count, setCount}) {
    const [value, setValue] = useState('');
    const [todoNum, setTodoNum] = useState(0);
    const changeValue = e => setValue(e.target.value);

    // 남은 할 일 개수 update
    useEffect(() => {
      setTodoNum(0)
      if (data && data[dataKey]) {
        data[dataKey].map((todo) => {
          if (todo.isFinished) {
            setTodoNum(val => val + 1)
          }
        })
      }
    }, times)

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
          todo : value.trim(),
          isFinished : false,
        }
        try { 
          data[dataKey] = [
            obj,
            ...data[dataKey] 
          ]
          setTodoNum((val) => val+1)
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
    <Box>
      <div className="todo-title">{times[0]}년 {times[1]}월 {times[2]}일</div>
      <div className="todo-num">{todoNum}개 / {data && data[dataKey] ? data[dataKey].length : 0}개</div>
      <form onSubmit={event => createTodo(event)} style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <input
          className="todo-input"
          value = {value}
          onChange={changeValue}
          type="text" 
          placeholder="할 일을 적어주세요"
        />
        <i className="fa-solid fa-feather-pointed write-icon" onClick={event => createTodo(event)}></i>
      </form>
      <div className="todo-content-box">
        { data && data[dataKey] ? data[dataKey].map((todo) => {
          return (
            <div key={todo.key} style={{margin: "10px 5px"}}>
              <Item 
                isFinished={ todo.isFinished ? 'line-through' : 'none' }
                color={todo.isFinished ? 'gray' : 'black' }
                onClick={(event) => updateTodo(event, todo.key)}
              >{todo.todo}
              </Item>
              <i onClick={(event) => deleteTodo(event, todo.key)} className="delete-icon fa-solid fa-trash-can"></i>
            </div>
          )
        }) : null}
      </div>
    </Box>
  )
};

export default ToDoItem;