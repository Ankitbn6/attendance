import React from 'react'
import { Link } from 'react-router-dom'
import NewAttendance from './NewAttendance'
import AttendanceHistory from './AttendanceHistory'

const Navbar = () => {
  return (
    <div className='text-2xl flex justify-around items-center gap-8 h-[45px] bg-purple-600'>
      <Link to={"/"} ><div className='text-white px-4 py-1 rounded-lg'>New</div> </Link>
      <Link to={"/history"} ><div className='text-white px-4 py-1  rounded-lg'>History</div> </Link>
    </div>
  )
}

export default Navbar
