import React, { useContext, useEffect, useState } from 'react'
import HistoryItem from './HistoryItem'
import HistoryDateAccordian from './HistoryDateAccordian';

const AttendanceHistory = ({list}) => {
  const [prevdata,setprevData]=useState(JSON.parse(localStorage.getItem("prevAttendanceItems"))||[]);
  useEffect(()=>{
    setprevData(JSON.parse(localStorage.getItem("prevAttendanceItems"))||list)
  },[])
  return (
    <div>
      <h1 className='bg-blue-300 m-auto text-center text-white'>History</h1>
      {prevdata.map((ele)=><HistoryDateAccordian data1={ele}  key={ele.date}/>)}
    </div>
  )
}

export default AttendanceHistory
