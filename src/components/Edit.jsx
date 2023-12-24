import React, { useEffect, useState } from 'react'

const Edit = () => {
    const [data,setData]=useState(JSON.parse(localStorage.getItem("AllAttendTime")));
    const [clicked,setClicked]=useState(false);
    const [itemToDelete,setItemToDelete]=useState({});
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
    <div className='relative'>
      <h1 className='bg-[rgb(255,110,0)] m-auto text-white text-center text-2xl p-1'>Edit Today Attendance</h1>
      {data.map((ele)=>(ele.present)?
      <div key={ele.id}>
      <div  className='flex items-center justify-between p-1 bg-[rgb(255,230,0)] pr-2 pl-2  mt-2' >
      <p className='text-2xl'>{ele.name}</p>
      <div className='flex justify-end items-center gap-5'>
      <p className='text-2xl'>{ele.time}</p>
      <img className='w-[25px]' onClick={()=>{setClicked(true);setItemToDelete(ele)}}  src='https://img.icons8.com/?size=256&id=67884&format=png'/>
      </div>
      </div>
      </div>:null)}
      {clicked && 
      <div className=' absolute w-[270px] md:w-[350px] h-[150px] left-0 right-0 top-[200px]  shadow-2xl ml-auto mr-auto bg-blue-50 rounded-lg p-2 '>
        <h2 className='mt-3 mx-2 text-center'>Are you sure you want to mark</h2>
        <h2 className='text-center'><span className='text-xl  font-bold  bold text-red-500'>{itemToDelete.name}</span> as absent ?</h2>
        <div className='flex items-center justify-around mt-8'>
        <button onClick={()=>{setClicked(false)}} className='border-2  active:text-black active:border-black border-green-600 p-1 px-3 text-xl text-green-700 rounded-xl'>Cancel</button>
        <button onClick={()=>{deleteItem(itemToDelete.id);setClicked(false)}} className='border-2 active:text-black active:border-black border-red-500 p-1 px-3 text-xl text-red-700 rounded-xl'>OK</button></div>
      </div>}
    </div>
  )
}

export default Edit
