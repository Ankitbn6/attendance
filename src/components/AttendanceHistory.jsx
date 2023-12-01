import React, { useContext, useEffect, useState } from 'react'
import HistoryItem from './HistoryItem'
import { AppContext } from '../contexts/AppContext'
import HistoryDateAccordian from './HistoryDateAccordian';

const AttendanceHistory = ({list}) => {
  // const {data}=useContext(AppContext)
  // let data=JSON.parse(localStorage.getItem("AllAttendTime"))||list;
  // const [data,setData]=useState(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
  const [prevdata,setprevData]=useState(JSON.parse(localStorage.getItem("prevAttendanceItems"))||[]);
  useEffect(()=>{
    // setData(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
    setprevData(JSON.parse(localStorage.getItem("prevAttendanceItems"))||list)
  },[])
  return (
    <div>
      <h1 className='bg-blue-300 m-auto text-center text-white'>History</h1>
      {prevdata.map((ele)=><HistoryDateAccordian data1={ele}  key={ele.date}/>)}
      {/* {data.map((ele)=>((ele.present)?<HistoryItem key={ele.id} ele={ele}/>:null))} */}
    </div>
  )
}

export default AttendanceHistory
