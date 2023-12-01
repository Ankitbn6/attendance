import React, { useState } from 'react'
// import AttendanceHistory from './AttendanceHistory'
import HistoryItem from './HistoryItem'

const HistoryDateAccordian = ({data1}) => {
    // const [data,setData]=useState(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
//   const [prevdata,setprevData]=useState(JSON.parse(localStorage.getItem("prevItems"))||[]);
//   useEffect(()=>{
    // setData(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
    // setprevData(JSON.parse(localStorage.getItem("prevItems"))||list)
//   },[])
const {date,data}=data1;
//   let items=data1.data;
const [clicked,setClicked]=useState(false);
const toggleClicked=()=>{
  setClicked(!clicked);
}
console.log(data);
console.log(date);
  return (
    <div>
      <div onClick={toggleClicked} className='bg-black text-white flex items-center justify-center m-2 p-2 text-3xl rounded-lg'>{date}</div>
      {clicked && data && data.map((ele)=>((ele.present)?<HistoryItem key={ele.id} ele={ele}/>:null))}
    </div>
  )
}

export default HistoryDateAccordian
