import React, { useEffect, useState } from 'react'

const ProfileItem = ({ele,data}) => {
    const [clicked,setClicked]=useState(false)
    const [personalTime,setPersonalTime]=useState([])
    const [dateList,setDateList]=useState([]);
    const [prevData,setPrevData]=useState(JSON.parse(localStorage.getItem("prevAttendanceItems1"))||[]);
    // useEffect(()=>{
    //     setPrevData(JSON.parse(localStorage.getItem("prevAttendanceItems")));
    // },[])
    let pTime=[];
    let Dlist=[];
    const getPersonalData=()=>{
        prevData.forEach((item)=>{
            // setDateList([...dateList,item.date])
            let newDate=item.date.slice(0,10)
            Dlist.push(newDate);
            item.data.forEach((elem)=>{
                // console.log(elem.name)
                if(elem.id===ele.id)
                {
                    // setPersonalTime([...personalTime,elem.time])}
                    if(elem.time=='')
                    pTime.push("Absent");
                    else
                    pTime.push(elem.time);
                }
            })
        })
        setDateList(Dlist)
        setPersonalTime(pTime)
    }
    useEffect(()=>{
        // setPrevData(JSON.parse(localStorage.getItem("prevAttendanceItems")));
        // getPersonalData();
    },[])
  return (
    <div>
      <div className='bg-[rgb(255,230,0)] text-black mt-2 mb-2 p-[6px] rounded-3xl text-center w-[96%] m-auto flex items-center justify-between pl-4 pr-4' onClick={()=>{setClicked((prev)=>!prev);getPersonalData()}}><p className='text-2xl'>{ele.name}</p><p>{clicked?'▲':'▼'}</p></div>
      {clicked && <div className='overflow-scroll no-scrollbar p-1'>
        <table className='overflow-scroll m-auto ml-2  '  >
            <thead >
            <tr>
                {dateList?.map((elem,index)=><th className='border-2 border-black p-2  ' key={index}>{elem}</th>)}
            </tr>
            </thead>
            <tbody>
            <tr>
                {personalTime?.map((elem,index)=><td className='border-2 border-black p-2 ' key={index}>{elem}</td>)}
            </tr>
            </tbody>
        </table>
      </div>}
    </div>
  )
}

export default ProfileItem
