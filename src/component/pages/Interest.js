import React from 'react'
import Carousel from '../Carousel'
import TailwindInput from '../Input'

export default function Interest() {
  return (
    <div>
      <div className="w-[400px] md:w-full m-auto ">

      <section className=" max-h-screen m-auto container ">
        <div className="flex justify-between flex-wrap items-center px-2">
          <div className="">
            <h1 className="text-[#2B365A] text-[30px] md:text-[36px] font-semibold ">
              Interest Page
            </h1>
            <p className="text-[#010101] text-[18px] md:text-[21px] font-light ">
              Select at least 6 categories of your interest{' '}
            </p>
          </div>
          <div className=" ">
            <TailwindInput placeholder="Enter Your Interest" />
          </div>
        </div>
        
      </section>

      <section className='container mx-2 md:mx-4 '>
        <Carousel />
      </section>
      </div>

    </div>
  )
}
