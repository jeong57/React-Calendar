import {useState, useEffect} from "react";

function Todos({timeList}){
    const [state, setState] = useState({
        todo : ""
    });
    
    const [data, setData] = useState({})
    useEffect(() => {
      // 이 부분은 지울것입니다 // 
      const tmp = new Date()
      const now = String(tmp.getFullYear()) + String(tmp.getMonth()) + String(tmp.getDate())
      const obj = {
        [now] : ["책읽기"]
      }
      // 이 부분은 지울것입니다 //
      localStorage.setItem("todos", JSON.stringify(obj))
      const data = localStorage.getItem("todos")
      setData(data)
    } , [data])
    
    const handleSubmit=()=>{
        localStorage.setItem("key", JSON.stringify(state));
    };
    const handleChangeState = (e) => {
        setState({
          ...state,
          [e.target.name]: e.target.value
        });
      };


    return (
        <div className="Todos">
          <div>
          { timeList.length > 0 ? <p>{timeList[0][0]}년</p> : null}
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
            })}
          </div>
          {/* <h2>Todo List</h2>
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
            </div>  */}
        </div>
    );
};
export default Todos;
