import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext';

const AttendanceItem = ({ele,list,count,setCount,storeLocally}) => {
    // const {data,setData,setCount,count}=useContext(AppContext);
    // const [updatedList,setUpdatedList]=useState(JSON.parse(localStorage.getItem("AllAttendItem"))||list);
    
    const [clicked,setClicked]=useState(false);
    const [submitted,setsubmitted]=useState(false);
    // const [currentTime,setCurrentTime]=useState('');
    const [currentHour,setCurrentHour]=useState("");
    const [currentMinute,setCurrentMinute]=useState("");
    const setTime=(ele)=>{
        if(!clicked)
        {
          let date=new Date();
        // setCurrentTime(date.toTimeString().slice(0,5));
        setCurrentHour(date.toTimeString().slice(0,2));
        setCurrentMinute(date.toTimeString().slice(3,5));
        setClicked(true);
        console.log("clicked")
        }
    }

    const submit=()=>{
      // console.log(list);
      // localStorage.setItem("attendTime",JSON.stringify({...ele,time:currentHour+":"+currentMinute}))
      
      let prList=list.map((item)=>{
        if(item.id===ele.id)
        return {...item,time:(currentHour+":"+currentMinute),present:true}
        else
        return item;
      })
      // console.log("updatedList",data);
      console.log("prlist",prList);
      setClicked(false);
      setsubmitted(true);
      setCount((prev)=>prev+1);
      // setUpdatedList(prList);
      localStorage.setItem("AllAttendTime",JSON.stringify(prList))
      storeLocally();
    }
  return (
    <div onClick={setTime}  className='bg-red-200 m-auto text-center flex items-center  justify-between px-3 gap-1 text-lg py-[2px] my-2 '>
      <h1 className='text-xl'>{ele.name}</h1>
      {/* <h1>{currentHour}{currentMinute}</h1> */}
      {clicked && !submitted && (
      <div className='flex items-center justify-center gap-2'>
      <div className='flex items-center'>
      <input className='w-[35px] p-1 bg-transparent text-2xl' value={currentHour} onChange={(e)=>{setCurrentHour(e.target.value)}} />:
      <input className='w-[35px] p-1 bg-transparent text-2xl' value={currentMinute} onChange={(e)=>{setCurrentMinute(e.target.value)}} />
      </div>
      <div className='flex items-center gap-3'>
      <div className='rounded-full  w-[35px] h-[35px] flex items-center justify-center border-2 border-black' onClick={submit}>✔</div>
      <div className='rounded-full  w-[35px] h-[35px] flex items-center justify-center border-2 border-black' onClick={()=>{setClicked(false)}}>X</div>
      </div>
      </div>
      )}

    </div>
  )
}

export default AttendanceItem
