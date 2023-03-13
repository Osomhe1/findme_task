import React from 'react'
import './Clip.css'
import logo from './images/FindMeLogo_findmewordmark3.png'

export default function Logo() {

  

  return (
    <div>
      {/* <h1 className='uppercase text-2xl text-gray-700 font-bold'>Find<span className='text-red-500'>me</span></h1> */}
      <div className=" w-[178px] h-[25px]  ">
        <img className="  " src={logo} alt="" />
      </div>
    </div>
  )
}
