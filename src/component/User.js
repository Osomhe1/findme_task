import React from 'react'
import { BsFileMusicFill } from 'react-icons/bs'
import { IoIosCheckmark } from 'react-icons/io'
import {RiMessage2Fill} from 'react-icons/ri'


const imgPic = `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`
const placeHol = `http://via.placeholder.com/640x360`

export default function User() {
    
  return (
    <div>
      <section></section>

      <section className="relative  ">
        <div className="w-[100%] h-[500px] border-t-4 border-b-4 border-gray-500 ">
          <img
            className="w-full h-full object-contai object-cover"
            src={placeHol}
            alt=""
          />
        </div>
        <div className="flex item-center justify-between w-[90%] m-auto  py-6  my-4">
          <div className="flex items-center mx-8   ">
            <div className="rounded-xl absolute bottom-0 left-0 mx-16 z-10 object-contain  bg-gradient-to-r from-[#816FF1] via-red-500 to-[#E83B1E] p-1">
              <img
                className="w-[150px] h-[200px]   rounded-xl "
                src={imgPic}
                alt=""
              />
            </div>
            <div className="lg:mx-32">
              <div className="flex items-center p-2 gap-2">
                <h1 className="text-black text-3xl font-semibold  ">
                  Tina Rosser
                </h1>
                <div className=" bg-gradient-to-b from-[#816FF1] to-[#E83B1E] text-white  ">
                  <IoIosCheckmark />
                </div>
              </div>
              <div className="flex items-center p-2">
                <div className="">
                  <BsFileMusicFill />
                </div>
                <p className="text-gray-400 p-2">
                  Bill Ellish - <span>Your Power</span>{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <span class="relative flex h-3 w-">
              <RiMessage2Fill className="text-4xl" />
              {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span> */}
              <span class="absolute inline-flex right-0 -mx-4 rounded-full h-5 w-5 text-white text-sm bg-red-500">
                <small className="text-center mx-auto">15</small>
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
