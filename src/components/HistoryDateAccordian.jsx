import React, { useState } from 'react'
import HistoryItem from './HistoryItem'

const HistoryDateAccordian = ({data1}) => {
const {date,data}=data1;
const [clicked,setClicked]=useState(false);
const toggleClicked=()=>{
  setClicked(!clicked);
}
  return (
    <div>
      {date && <div onClick={toggleClicked} className='bg-blue-500 text-white flex items-center justify-center m-2 p-2 text-2xl rounded-lg'>{date}</div>}
      {clicked && data && data.map((ele)=>((ele.present)?<HistoryItem key={ele.id} ele={ele}/>:null))}
    </div>
  )
}

export default HistoryDateAccordian
