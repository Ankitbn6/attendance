import React from 'react'

const HistoryItem = ({ele}) => {
  return (
    <div className='bg-red-200 m-auto text-center flex items-center justify-between px-3 gap-1 text-2xl py-[2px] my-2 '>
      <div>{ele.name}</div>
      <div>{ele.time}</div>
    </div>
  )
}

export default HistoryItem
