import React from 'react'
import { BsBoxSeam } from 'react-icons/bs'
import {FaCamera} from 'react-icons/fa'
import { HiOutlineUserAdd } from 'react-icons/hi'

export default function Insight() {
  return (
    <div>
      <section className="bg-gray-300">
        <div className="flex item-center justify- space-x-4 lg:space-x-16 w-[90%] m-auto  py-6">
          <div className="">
            <h1 className="text-black font-semibold border-l-4 p-2  border-l-gray-50">
              Insight
            </h1>
          </div>
          <div className=" bg-gray-200 border shadow-xl w-[60%]">
            <div class="divide-x flex items-center divide-gray-50 border-2 border-gray-50 ">
              <div className="w-1/3 p-8 mx- text-center">
                <FaCamera className="text-6xl m-auto" />
                <h2>0 Memories</h2>
              </div>
              <div className="w-1/3 p-8 text-center">
                <HiOutlineUserAdd className="text-6xl m-auto" />
                <h2>0 Connection</h2>
              </div>
              <div className="w-1/3 p-8 text-center">
                <BsBoxSeam className="text-6xl m-auto" />
                <h2>0 Thrift</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
