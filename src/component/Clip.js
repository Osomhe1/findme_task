import React from 'react'
import{BiShow} from 'react-icons/bi'
import {  BsThreeDotsVertical } from 'react-icons/bs'
import './Clip.css'

export default function Clip() {
  const post = [
    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1665562227872-a220594c8afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      seen: true,
      views: 100,
      time: '2 mins ago',
      status: '____________________________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '________ _________ _________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 3,
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '______ _______ ______ _______',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 4,
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '______ _______ ______ _______',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 5,
      img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '________ _________ _________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 6,
      img: 'https://images.unsplash.com/photo-1665562227872-a220594c8afb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '______ _______ ______ _______',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 7,
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: true,
      views: 10,
      time: '2 mins ago',
      status: '____________________________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 8,
      img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '_____________ _____________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '______ _______ ______ _______',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      //   status: 3,
      status: '______ _______ ______ _______',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
  ]


  return (
    <div className="bg-gray-200">
      <section>
        <div className="border-b-2 border-[#E4E4E4] ">
          <nav className="w-[100%] md:w-[70%] lg:w-[50%] m-auto p-">
            <ul className="flex w-full justify-between font-semibold ">
              <li className="border-b-4 border-[#2B365A] text-[#2B365A] p-4">
                Gallary
              </li>
              <li className="text-[#545361] p-4">Publish</li>
              <li className="text-[#545361] p-4">About</li>
              <li className="text-[#545361] p-4">Contact</li>
            </ul>
          </nav>
        </div>
      </section>
      <section>
        <div className="flex item-center justify-between w-[90%] m-auto  py-6">
          <div className="">
            <h1 className="text-[#2B365A] font-semibold border-l-4 p-2  border-l-[#41E233]">
              Clip
            </h1>
            <p className="text-[#999999] p-2">
              SHowing here are clip of people you are connected with.
            </p>
          </div>
          <div className="text-[#999999]">
            <h1>Manage</h1>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="grid relative w-5/6 p-4 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap- "> */}
        <div className="flex flex-grow relative w-[90%] overflow-clip p-4 m-auto   gap- ">
          {post?.map((x) => (
            <div className="m-2  relative">
              <div
                className="wrapper_header overflow-hidden  max-w- rounded-b-xl  relatives rounded-t-xl "
                style={{
                  // backgroundColor:'red',
                  height: '300px',
                  width: '250px',
                  backgroundImage: `url(${x.img})`,
                  overflow: 'hidden',
                  //   objectFit: 'cover',
                }}
              >
                <div className="top-[5%] absolute px-4 text-[#fff] text-lg flex w-full justify-between ">
                  <p className="w-[100%]  flex-grow ">{x.status} </p>
                </div>
                <div className="top-[15%] absolute px-4 text-gray-400 w-full flex items-center justify-between ">
                  <div className="">
                    <img src={x.imgPic} className="w-[24px] h-[24px]" alt="" />
                  </div>
                  <p>
                    {/* <BsThreeDotsVertical className="text-2xl" />{' '} */}
                    <svg
                      width="3"
                      height="18"
                      viewBox="0 0 3 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
                        fill="white"
                      />
                      <path
                        d="M1.5 11C2.32843 11 3 10.3284 3 9.5C3 8.67157 2.32843 8 1.5 8C0.671573 8 0 8.67157 0 9.5C0 10.3284 0.671573 11 1.5 11Z"
                        fill="white"
                      />
                      <path
                        d="M1.5 18C2.32843 18 3 17.3284 3 16.5C3 15.6716 2.32843 15 1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18Z"
                        fill="white"
                      />
                    </svg>
                  </p>
                </div>
                <div className="top-[60%] absolute px-4 text-[#fff] text-sm ">
                  <p className="text-ce ">No caption Needed</p>
                  <p>{x.time} </p>
                </div>
                {x.seen ? (
                  <>
                    <div className="top-[85%] text-md right-3 absolute text-[#fff]">
                      {/* <BiShow className=" " /> */}
                      <BiShow className="mx-auto" />
                      <p className="text-gray-500  ">{x?.views} view </p>
                    </div>
                  </>
                ) : 
                null}

                <div className="bg-[#D9D9D inner_wrapp rounded-b-2xl absolute  lg:h-[5rem] ">
                  <div className=" text-center items-center mx-3">
                    <div className="m-o">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
