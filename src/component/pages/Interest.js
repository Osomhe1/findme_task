import React from 'react'
import Carousel from '../Carousel'
import TailwindInput from '../Input'
import UserPage from '../UserPage'

export default function Interest() {
  return (
    <div>
      <section className="max-h-h-screen container ">
        <div className="flex justify-between  items-center px-2">
          <div className="">
            <h1 className="text-[#2B365A] text-[36px] font-semibold ">
              Interest Page
            </h1>
            <p className="text-[#010101] text-[21px] font-light ">
              Select at least 6 categories of your interest{' '}
            </p>
          </div>
          <div className=" ">
            <TailwindInput placeholder="Enter Your Interest" />
          </div>
        </div>
        
      </section>

      <section className='container mx-4 '>
        <Carousel />
      </section>

      {/* <UserPage /> */}
    </div>
  )
}
