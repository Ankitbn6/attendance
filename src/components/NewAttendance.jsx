import React, { useContext, useEffect, useState } from 'react'
import AttendanceItem from './AttendanceItem'
import { AppContext } from '../contexts/AppContext'

const NewAttendance = ({list}) => {
  // let data=list;
  // let localStorageData=JSON.parse(localStorage.getItem("AllAttendTime"))||[];
  // (list.length>localStorageData.length)?data=list:data=localStorageData
  // const {data}=useContext(AppContext)
  let prevData=JSON.parse(localStorage.getItem("prevAttendanceItems"))||[];
  // const [count,setCount]=useState(0);
  const {count,setCount}=useContext(AppContext);
  const [data,setData]=useState((JSON.parse(localStorage.getItem("AllAttendTime")))||list);
  // console.log("data",data);
  // console.log("list",list);
  // console.log("data",data)
  // const [c,setC]=useState(0);
  const storeLocally=()=>{
    let mydate=new Date();
    let item={
      id:mydate.toLocaleTimeString(),
      date:mydate.toLocaleDateString(),
      data:JSON.parse(localStorage.getItem("AllAttendTime"))
    }
    
    if(JSON.parse(localStorage.getItem("AllAttendTime")))
    {
      if(prevData.length>=1 && prevData[0].date==mydate.toLocaleDateString())
      {
        prevData.splice(0,1);
        prevData.unshift(item);
        localStorage.setItem("prevAttendanceItems",JSON.stringify(prevData));
      }
      else{
        prevData.unshift(item);
        localStorage.setItem("prevAttendanceItems",JSON.stringify(prevData));
      }
    }
    console.log("data",data);
    console.log("localStorage",JSON.parse(localStorage.getItem("AllAttendTime")));
    console.log("prevData",prevData);
    // localStorage.setItem("prevAttendanceItems",JSON.stringify(prevData));
  }
  useEffect(()=>{
    setData(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
    // storeLocally();
    console.log("hii");
  },[count])
  console.log("count",count);
  return (
    <div>
      <h1 className='bg-blue-300 m-auto text-white text-center text-3xl '>Take Attendance</h1>
      {data.map((ele)=>((!ele.present)?<AttendanceItem key={ele.id} storeLocally={storeLocally} count={count} setCount={setCount} list={data} ele={ele}/>:null))}
    </div>
  )
}

export default NewAttendance
