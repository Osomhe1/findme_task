import React from 'react'
import Logo from './Logo'
import {IoIosNotifications} from 'react-icons/io'
import { AiOutlineShoppingCart, AiFillHome } from 'react-icons/ai'
import { BsMicFill } from 'react-icons/bs'
import { BiSearchAlt2 } from 'react-icons/bi'
import { MdOutlineImageSearch } from 'react-icons/md'
import { BiArrowBack, BiDotsVertical } from 'react-icons/bi'
import Drag from './Drag'
import Memories from './Memories'
import Publish from './Publish'
import Insight from './Insight'
import User from './User'
import Clip from './Clip'

const imgPic = `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`

export default function Home() {
  return (
    <div className=" ">
      <section className=" bg-gray-400 ">
        <div className="flex flex-wrap items-center justify-between  p-2">
          <div className="">
            <Logo />
          </div>
          <div className=" flex items-center justify-between  gap-8">
            <div className="relative w-[100%]">
              <input
                className="pl-10 pr-4 py-2 w-ful w-full lg:w-[600px] rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                type="text"
                placeholder="Search..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <BiSearchAlt2 />
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="  font-bold py-2 px-4 rounded-r-lg">
                  <MdOutlineImageSearch />
                </button>

                <BsMicFill />
              </div>
            </div>
            <div className=" text-2xl flex gap-4">
              <IoIosNotifications />
              <AiOutlineShoppingCart />
            </div>
          </div>

          <div className="">
            <div className="">
              <img className="w-[30px]" src={imgPic} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* section 2 */}
      <section className="flex items-center justify-between m-4">
        <div className=" text-2xl">
          <BiArrowBack />
        </div>
        <div className=" flex items-center justify-between ">
          <div className=" text-2xl flex gap-4 lg:gap-16 justify-between items-center ">
            <div className="">
              <AiFillHome />
            </div>
            <div className="">
              <AiOutlineShoppingCart />
            </div>
            <div className="">
              <BiDotsVertical />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <User />
        </div>
      </section>

      <section>
        <div className="">
          <Insight />
        </div>
      </section>

      <section>
        <div className="">
          <Clip />
        </div>
      </section>

      <section>
        <div className="">
          <Publish />
        </div>
      </section>

      <section>
        <div className="">
          <Memories />
        </div>
      </section>

      <section>
        <div className="">
          <Drag />
        </div>
      </section>
    </div>
  )
}
