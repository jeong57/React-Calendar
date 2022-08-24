import { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from "styled-components";


const Title = styled.div`
    font-family: ${props => props.theme.titleFont};
    font-size: 30px;
    margin: 1rem 0 0.5rem 0;
    @media ${props => props.theme.mobile} {
        font-size: 20px;
    }
`
const Content = styled.div`
    font-family: ${props => props.theme.contentFont};
`



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
    <div>
        <Title>Description</Title>
        <div style={{margin: '0 2rem 1.5rem 0'}}>
            <Content>이 프로젝트는 2022년 6월부터 진행된 프로젝트로, 할 일을 관리하며 매일의 감정을 기록할 수 있습니다.</Content>
            <Content>자유롭게 이용해보세요!</Content>
        </div>
        <Calendar onChange={onChange} onClickDay={(date) => changeDay(date) } />
        <Title style={{margin: "3rem 0 0.5rem 0"}}>Emotion Calendar</Title>
        <div style={{margin: '0 2rem 1.5rem 0'}}>
            <Content>오늘의 감정을 기록해보세요!</Content>
            <Content>색을 보고 나의 기분을 확인할 수 있어요.</Content>
        </div>
        <div style={{border: "solid 0.3px", width: "350px", height: "272px", marginBottom: "1.5rem"}}></div>
    </div>
    );
}

export default Week;