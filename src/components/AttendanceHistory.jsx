import React, { useContext, useEffect, useState } from 'react'
import HistoryItem from './HistoryItem'
import HistoryDateAccordian from './HistoryDateAccordian';
import Edit from './Edit';
import { NavLink } from 'react-router-dom';

const AttendanceHistory = ({list}) => {
  const [prevdata,setprevData]=useState(JSON.parse(localStorage.getItem("prevAttendanceItems1"))||[]);
  useEffect(()=>{
    setprevData(JSON.parse(localStorage.getItem("prevAttendanceItems1"))||list)
  },[])
  return (
    <div>
      <h1 className='bg-[rgb(255,110,0)] m-auto  text-white text-center text-2xl p-1 '>History</h1>
      {prevdata.map((ele)=><HistoryDateAccordian data1={ele}  key={ele.date}/>)}
      <div className='text-center mt-4'><NavLink className={'text-blue-700 underline'} to={"/edit"}>Edit today history</NavLink></div>
    </div>
  )
}

export default AttendanceHistory
