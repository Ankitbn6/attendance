import React, { createContext, useEffect, useState } from 'react'

export const AppContext = createContext();
const list=[
    {
        name:"John",
        time:"",
        present:false,
        id:1
    },
    {
        name:"Alice",
        time:"",
        present:false,
        id:2
    },
    {
        name:"Doe",
        time:"",
        present:false,
        id:3
    },
    {
      name:"Joe",
      time:"",
      present:false,
      id:4
    }
]
export const AppContextProvider=({children})=>{
    const [count,setCount]=useState(0);
    const [data,setData]=useState(JSON.parse(localStorage.getItem("AllAttendTime"))||list);
    return(
        <AppContext.Provider value={{count,setCount,data,setData}}>
            {children}
        </AppContext.Provider>
    )
}
