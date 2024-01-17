import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import NewAttendance from './components/NewAttendance'
import AttendanceHistory from './components/AttendanceHistory'
import Profiles from './components/Profiles'
import Edit from './components/Edit'

function App() {

  const list=[
    {
        name:"Akash Ch pr",
        time:"",
        present:false,
        id:1
    },
    // {
    //     name:"Santosh pr",
    //     time:"",
    //     present:false,
    //     id:2
    // },
    {
        name:"Dhiraj pr",
        time:"",
        present:false,
        id:3
    },
    {
      name:"Nitin pr",
      time:"",
      present:false,
      id:4
    },
    {
      name:"Gaurav pr",
      time:"",
      present:false,
      id:5
    },
    {
      name:"Aryan pr",
      time:"",
      present:false,
      id:6
    },
    {
      name:"Anish pr",
      time:"",
      present:false,
      id:7
    },
    {
      name:"Ashutosh pr",
      time:"",
      present:false,
      id:8
    },
    {
      name:"Awanish pr",
      time:"",
      present:false,
      id:9
    },
    // {
    //   name:"Abhishek pr",
    //   time:"",
    //   present:false,
    //   id:10
    // },
    {
      name:"Rahul pr",
      time:"",
      present:false,
      id:11
    },
    {
      name:"Anshu pr",
      time:"",
      present:false,
      id:12
    },
    {
      name:"Karan pr",
      time:"",
      present:false,
      id:13
    },
    {
      name:"Ankit",
      time:"",
      present:false,
      id:14
    },
    {
      name:"Rishabh pr",
      time:"",
      present:false,
      id:15
    },
    {
      name:"Ayush Br pr",
      time:"",
      present:false,
      id:16
    },
    {
      name:"Prashant pr",
      time:"",
      present:false,
      id:17
    },
    {
      name:"Himanshu pr",
      time:"",
      present:false,
      id:18
    },
    {
      name:"Yubi pr",
      time:"",
      present:false,
      id:19
    },
    {
      name:"Siddharth pr",
      time:"",
      present:false,
      id:20
    },
    {
      name:"Bikram pr",
      time:"",
      present:false,
      id:21
    },
    {
      name:"Saurav pr",
      time:"",
      present:false,
      id:22
    },
    {
      name:"Harsh pr",
      time:"",
      present:false,
      id:23
    },
    {
      name:"Sunny pr",
      time:"",
      present:false,
      id:24
    },
    {
      name:"Suvradeep pr",
      time:"",
      present:false,
      id:25
    },
    {
      name:"Bumbum pr",
      time:"",
      present:false,
      id:26
    },
    {
      name:"Kunal pr",
      time:"",
      present:false,
      id:27
    },
    {
      name:"Keshab pr",
      time:"",
      present:false,
      id:28
    },
    {
      name:"Krishna pr",
      time:"",
      present:false,
      id:29
    },
    {
      name:"Anant pr",
      time:"",
      present:false,
      id:30
    },
    {
      name:"Ayush Jha pr",
      time:"",
      present:false,
      id:31
    },
    {
      name:"Anuj pr",
      time:"",
      present:false,
      id:32
    }
]
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<NewAttendance list={list}/>}></Route>
        <Route path='/history' element={<AttendanceHistory list={list} />}></Route>
        <Route path='/profiles' element={<Profiles list={list} />}></Route>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  )
}

export default App
