import React from 'react'
import { Link } from 'react-router-dom'
import NewAttendance from './NewAttendance'
import AttendanceHistory from './AttendanceHistory'

const Navbar = () => {
  return (
    <div className='text-2xl flex justify-around items-center gap-8 h-[45px]'>
      <Link to={"/"} className='text-purple-900 '>New </Link>
      <Link to={"/history"} className='text-purple-900 '> History</Link>
    </div>
  )
}

export default Navbar
