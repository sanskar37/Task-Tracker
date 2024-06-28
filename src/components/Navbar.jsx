import React from 'react'
import { VscTasklist } from "react-icons/vsc";

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-color1 text-white py-2'>
        <div className="logo flex gap-0">
            <span className='font-bold text-xl mx-2 flex gap-1'><VscTasklist style={{ width: '23px', height: '27px' }}/>TaskTrack</span>
        </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar