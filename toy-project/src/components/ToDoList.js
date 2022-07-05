import {useState, useEffect} from "react";
import ToDoItem from "./ToDoItem.js"

function Todos({timeList}){
    // localStorage에서 데이터 가져오기
    // data = todos = {"20220630": {"todo": ['ss', 'b', 'c']},}
    const [data, setData] = useState({})

    useEffect(() => {
      try {
        setData(JSON.parse(localStorage.getItem("todos")))
      } catch {
      }
    }, [])
    
    const changeData = (val) => {
      setData(val)
    }


    return (
      <div className="Todos">
        { timeList.length > 0 ? <p>{timeList[0][0]}년</p> : null}
        {timeList.map((times)=> {
          const dataKey = String(times[0]) + String(times[1]) + String(times[2])
          return <ToDoItem times={times} dataKey={dataKey} data={data} setData={changeData}/>
          })
        }
      </div>
    );
};
export default Todos;
