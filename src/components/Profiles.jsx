import React, { useEffect, useRef, useState} from 'react'
import HistoryItem from './HistoryItem';
import ProfileItem from './ProfileItem';

const Profiles = ({list}) => {
    const [data,setData]=useState(list)
    const [prevData,setPrevData]=useState([]);
    useEffect(()=>{
        setPrevData(JSON.parse(localStorage.getItem("prevAttendanceItems")));
    },[])
  return (
    <div>
      <h1 className='bg-[rgb(255,110,0)] m-auto  text-white text-center text-2xl p-1 '>Profiles</h1>
      {data.map((ele)=>(<ProfileItem ele={ele} key={ele.id} data={prevData}/>))}
    </div>
  )
}

export default Profiles
