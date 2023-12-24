import React, { useEffect, useState } from 'react'

const Edit = () => {
    const [data,setData]=useState(JSON.parse(localStorage.getItem("AllAttendTime")));
    // useEffect(()=>{
    //     setData(JSON.parse(localStorage.getItem("AllAttendTime"))|[]);
    // })
    const deleteItem=(id)=>{
        let newList=data.map((item)=>{
            if(item.id==id)
            {
                return {...item,present:false,time:""}
            }
            else
            {
                return item;
            }
        })
        localStorage.setItem("AllAttendTime",JSON.stringify(newList));
        setData(newList)
    }
  return (
    <div>
      {data.map((ele)=>(ele.present)?
      <div key={ele.id} className='flex items-center justify-between p-1 bg-[rgb(255,230,0)] pr-2 pl-2  mt-2' >
      <p className='text-2xl'>{ele.name}</p>
      <div className='flex justify-end items-center gap-5'>
      <p className='text-2xl'>{ele.time}</p>
      <img className='w-[25px]' onClick={()=>{deleteItem(ele.id)}} src='https://img.icons8.com/?size=256&id=67884&format=png'/>
      </div>
      </div>:null)}
    </div>
  )
}

export default Edit
