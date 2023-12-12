import React, { useState } from 'react'

const HistoryItem = ({ele}) => {
  return (
    <div onClick={()=>{setClicked((prev)=>!prev)}} className='bg-[rgb(255,180,0)] m-2 rounded-lg text-center flex items-center justify-between px-3 gap-1 text-lg py-3 my-2 '>
      <div>{ele.name}</div>
      <div className='text-violet-900 text-xl'>{ele.time}</div>
    </div>
  )
}

export default HistoryItem
