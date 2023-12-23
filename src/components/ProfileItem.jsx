import React, { useEffect, useState } from 'react'

const ProfileItem = ({ele,data}) => {
    const [clicked,setClicked]=useState(false)
    const [personalTime,setPersonalTime]=useState([])
    const [dateList,setDateList]=useState([]);
    const [prevData,setPrevData]=useState(JSON.parse(localStorage.getItem("prevAttendanceItems"))||[]);
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
      <h1 className='bg-[rgb(255,230,0)] text-black p-1 mt-2 mb-2 rounded-3xl text-center w-[93%] m-auto text-2xl'  onClick={()=>{setClicked((prev)=>!prev);getPersonalData()}}>{ele.name}</h1>
      {clicked && <div className='overflow-scroll no-scrollbar p-1'>
        <table className='overflow-scroll m-auto'  >
            <thead>
            <tr>
                {dateList.map((elem,index)=><th className='border-2 border-black p-2 ' key={index}>{elem}</th>)}
            </tr>
            </thead>
            <tbody>
            <tr>
                {personalTime.map((elem,index)=><td className='border-2 border-black p-2 ' key={index}>{elem}</td>)}
            </tr>
            </tbody>
        </table>
      </div>}
    </div>
  )
}

export default ProfileItem
