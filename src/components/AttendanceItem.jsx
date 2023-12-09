import React, { useContext, useEffect, useState } from 'react'

const AttendanceItem = ({ele,list,count,setCount,storeLocally}) => {
    const [clicked,setClicked]=useState(false);
    const [submitted,setsubmitted]=useState(false);
    const [currentHour,setCurrentHour]=useState("");
    const [currentMinute,setCurrentMinute]=useState("");
    const clickedStyle=clicked?{backgroundColor:"rgb(50, 250, 0)"}:{}
    const setTime=(ele)=>{
        if(!clicked)
        {
          let date=new Date();
        setCurrentHour(date.toTimeString().slice(0,2));
        setCurrentMinute(date.toTimeString().slice(3,5));
        setClicked(true);
        }
    }

    const submit=()=>{
      let prList=list.map((item)=>{
        if(item.id===ele.id)
        return {...item,time:(currentHour+":"+currentMinute),present:true}
        else
        return item;
      })
      setClicked(false);
      setsubmitted(true);
      setCount((prev)=>prev+1);
      localStorage.setItem("AllAttendTime",JSON.stringify(prList))
      storeLocally();
    }
  return (
    <div onClick={setTime} style={clickedStyle} className='bg-[rgb(255,230,0)] m-auto text-center flex items-center  justify-between px-3 gap-1 text-lg py-2 my-1 '>
      <h1 className='text-lg'>{ele.name}</h1>
      {clicked && !submitted && (
      <div className='flex items-center justify-center gap-2'>
      <div className='flex items-center'>
      <input className='w-[35px] p-1 bg-transparent text-2xl' value={currentHour} onChange={(e)=>{setCurrentHour(e.target.value)}} />:
      <input className='w-[35px] p-1 bg-transparent text-2xl' value={currentMinute} onChange={(e)=>{setCurrentMinute(e.target.value)}} />
      </div>
      <div className='flex items-center gap-4'>
      <div className='rounded-full  w-[30px] h-[30px] flex items-center justify-center border-2 border-black' onClick={submit}>✔</div>
      <div className='rounded-full  w-[30px] h-[30px] flex items-center justify-center border-2 border-black' onClick={()=>{setClicked(false)}}>X</div>
      </div>
      </div>
      )}

    </div>
  )
}

export default AttendanceItem
