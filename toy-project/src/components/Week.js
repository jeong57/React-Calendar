import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Week ({setTimeList})  {
    const [value, onChange] = useState(new Date());
    const [standTime, setStandTime] = useState(value)
    
    useEffect(() => {
        const sYear = new Date(standTime).getFullYear()
        const sMonth = new Date(standTime).getMonth()
        const sDate = new Date(standTime).getDate()
        const sDay = new Date(standTime).getDay()
        const tmpList = []
        for (let i=sDate-sDay ; i < sDate+7-sDay ; i++){
        const tmpday = new Date(sYear,sMonth,i)
        tmpList.push([tmpday.getFullYear(), String(tmpday.getMonth()+1).padStart(2,'0'), 
        String(tmpday.getDate()).padStart(2,'0')]
        )
        }
        setTimeList(tmpList)
    },[standTime])

    const changeDay = (date) => {
        setStandTime(date)
    } 

    return (
    <div className="Week">
        <h2>Description</h2>
        <Calendar onChange={onChange} onClickDay={(date) => changeDay(date) } />
    </div>
    );
}

export default Week;