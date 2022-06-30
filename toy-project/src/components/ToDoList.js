import {useState, useEffect} from "react";
import ToDoItem from "./ToDoItem.js"

function Todos({timeList}){
    // localStorage에서 데이터 가져오기
    // data = todos = {"20220630": {"todo": ['ss', 'b', 'c']},}
    const [data, setData] = useState({})

    useEffect(() => {
      const data = localStorage.getItem("todos")
    } , [])

    // const handleSubmit = (key, value, data) => {
    //   if (data.key) {
    //     data.
    //   }
    // }

    // const handleSubmit=()=>{
    //     localStorage.setItem("key", JSON.stringify(state));
    // };
    // const handleChangeState = (e) => {
    //     setState({
    //       ...state,
    //       [e.target.name]: e.target.value
    //     });
    //   };


    return (
      <div className="Todos">
        { timeList.length > 0 ? <p>{timeList[0][0]}년</p> : null}
        {timeList.map((times)=> {
          const dataKey = String(times[0]) + String(times[1]) + String(times[2])
          return <ToDoItem times={times} dataKey={dataKey} data={data} setData={setData}/>
          })
        }
      </div>
    );
};
export default Todos;
