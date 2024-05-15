// import React from 'react'
import {FaBell, FaUser} from 'react-icons/fa'
import { Link} from 'react-router-dom'
import Notifications from './Notifications'
import { useState } from 'react'

const Navbar = () => {
  const[showNotify, setShowNotify]=useState(false);
  const [showProfile, setShowProfile]=useState(false);

  const handleNotify=()=>{
    if(showProfile) setShowProfile(false);
    setShowNotify(!showNotify);
  }

  const handleProfile=()=>{
    if(showNotify) setShowNotify(false);
    setShowProfile(!showProfile);
  }
  return (
    <div className="fixed top-0 w-full">
      <div className='flex items-center justify-between bg-white shadow-lg px-10 py-5'>
      <Link to='/' className="text-xl font-bold">PI</Link>
      <div className="flex gap-10 justify-center items-center">
        <div onClick={handleNotify} className='flex justify-center items-center cursor-pointer relative'>
          Notifications <FaBell/> 
          <div className={`${!showNotify?"hidden":"absolute"} top-10`}>
            <Notifications/>
          </div>
        </div>
        <div onClick={handleProfile} className="border-[1px] p-2 rounded-full border-gray-500 relative">
        <FaUser/>
        <div className={`${!showProfile?"hidden":"absolute"} top-10 -left-10 -right-9 bg-white`}>
          <div className="bg-white p-2 shadow-lg rounded-lg border-gray-300 border-[1px] flex flex-col gap-1">
          <Link to=''>My Profile</Link>
          <Link to=''>My Account</Link>
          <Link to=''>Settings</Link>
          <button className='bg-blue-500 text-white rounded-lg px-2 py-1 w-fit mx-auto'>Logout</button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar