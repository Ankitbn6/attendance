import React, { useContext, useEffect, useState } from 'react'
import AttendanceItem from './AttendanceItem'

const NewAttendance = ({list}) => {
  let prevData=JSON.parse(localStorage.getItem("prevAttendanceItems"))||[];
  const [data,setData]=useState(JSON.parse((localStorage.getItem("AllAttendTime")))||list);
  const [count,setCount]=useState(0);
  const storeLocally=()=>{
    let mydate=new Date();
    let item={
      id:mydate.toLocaleTimeString(),
      date:mydate.toDateString(),
      data:JSON.parse(localStorage.getItem("AllAttendTime"))||list
    }
    
    if(JSON.parse(localStorage.getItem("AllAttendTime")))
    {
      if(prevData.length>=1 && prevData[0].date==mydate.toDateString())
      {
        prevData.splice(0,1);
        prevData.unshift(item);
        if(prevData.length>7)
        prevData.splice(7,prevData.length-1);
        localStorage.setItem("prevAttendanceItems",JSON.stringify(prevData));
      }
      else{
        prevData.unshift(item);
        localStorage.setItem("prevAttendanceItems",JSON.stringify(prevData));
      }
    }
  }
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
    let localStorageData=JSON.parse(localStorage.getItem("AllAttendTime"));
    if(localStorageData.length<list.length)
    setData(list);
  },[count])
  useEffect(()=>{
    let mdate=new Date();
    if(prevData.length>=1 && prevData[0].date!=mdate.toDateString())
    {
     console.log("today ")
     setData(list);
     localStorage.setItem("AllAttendTime",JSON.stringify(list))}
  },[])
  return (
    <div>
      <h1 className='bg-blue-900 m-auto text-white text-center text-2xl p-1'>Take Attendance</h1>
      {data.map((ele)=>((!ele.present)?<AttendanceItem key={ele.id} storeLocally={storeLocally} count={count} setCount={setCount} list={data} ele={ele}/>:null))}
    </div>
  )
}

export default NewAttendance
