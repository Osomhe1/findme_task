import React from 'react'
import { BsFileMusicFill } from 'react-icons/bs'
import { IoIosCheckmark } from 'react-icons/io'
import {RiMessage2Fill} from 'react-icons/ri'


const imgPic = `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`
const placeHol = `https://s3-alpha-sig.figma.com/img/985e/d4f7/de8b9c646dccd2d05b1a4285911b784b?Expires=1679875200&Signature=X1RD2np6R5dxdvffk7bra2c68qRXAgV1Qp1xruV8eDkX6zvIzfK08yMFqJS4Hn1dcHGZNd9Tx4ZFiOD3-kqneiTzoAvn4q1E5Aq1zDJhA91Mg2UneNGeqnj40faJTMAz-sPQ4YNv-2z-EEMmcqPGsO5je4qTbWDusZXEQkgMabtq~1efm1v1FGC4Mbo9T0Et4sEagsDmpGEiIAbMfg~Svbbycb-Obf30VpLczHnpnXnYqfpPGHZ7h6WdqquD0VxIyz8WOwMkBFvsrWJ3VRBAVhttzGlx2ZL2kJGOE6fiSXOFkNaT~cBPOU7emokeZlJ6LLmQbdUCA~9V-UFj5OG6zQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`

export default function User() {
    
  return (
    <div>
      <section></section>

      <section className="relative  ">
        <div className="w-[100%] h-[400px] border-t-4 border-b-4 border-gray-500 ">
          <img
            className="w-full h-full object-contai object-cover"
            src={placeHol}
            alt=""
          />
        </div>

        <div className="flex item-center justify-between w-[90%] m-auto   py-6  my-4">
          <div className="grid lg:flex items-center mx-8   ">
            <div className="rounded-xl absolute top-[65%] left-0 mx-16 z-10 object-contain  bg-gradient-to-r from-[#816FF1] via-red-500 to-[#E83B1E] p-1">
              <img
                className="w-[150px] h-[157px]   rounded-xl "
                src={imgPic}
                alt=""
              />
            </div>

            <div className="lg:mx-32 md:mx-40 relative -bottom-40 md:-bottom-0  ">
              {/* relative -bottom-40  */}
              <div className="flex items-center p-2 gap-2">
                <h1 className="text-[#2B365A] text-3xl font-semibold  ">
                  Tina Rosser
                </h1>
                <div className=" bg-gradient-to-bl h-[27px] w-[24px] text-center from-[#E83B1E] to-[#6C63FF] text-white  ">
                  <IoIosCheckmark className='text-2xl' />
                </div>
              </div>
              <div className="flex items-center text-[#2B365A] p-2">
                <div className="">
                  {/* <BsFileMusicFill className="text-[#2B365A]" /> */}
                  <svg
                    width="18"
                    height="27"
                    viewBox="0 0 18 27"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.7159 0H1.28584C0.944814 0 0.617755 0.153868 0.376614 0.427756C0.135472 0.701643 0 1.07311 0 1.46045V24.8276C0 25.215 0.135472 25.5864 0.376614 25.8603C0.617755 26.1342 0.944814 26.2881 1.28584 26.2881H16.7159C17.0569 26.2881 17.384 26.1342 17.6251 25.8603C17.8663 25.5864 18.0018 25.215 18.0018 24.8276V1.46045C18.0018 1.07311 17.8663 0.701643 17.6251 0.427756C17.384 0.153868 17.0569 0 16.7159 0ZM12.5948 15.3625C12.3569 15.9204 12.1152 15.9496 12.2206 15.3625C12.4919 13.8451 12.3081 10.5853 10.2867 10.2231V17.1603C10.2867 18.5813 9.71066 19.8183 8.17923 20.3777C6.6928 20.9166 5.03021 20.3543 4.6406 19.1421C4.25099 17.9299 5.12536 16.4549 6.5925 15.8473C7.41158 15.5085 8.36053 15.4209 9.00088 15.6998V5.8418H10.2867C10.2867 9.28116 15.5137 8.52756 12.5948 15.3625Z"
                      fill="#2B365A"
                    />
                  </svg>
                </div>
                <p className="text-[#787878] p-2">
                  Bill Ellish - <span>Your Power</span>{' '}
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <span class="relative flex h-3 w-">
              <RiMessage2Fill className="text- w-[30px] h-[30px] text-[#2B365A] " />
              {/* <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span> */}
              <span class="absolute inline-flex right-0 -mx-4 bottom-1 rounded-full h-5 w-5 text-white text-sm bg-[#FF3D00]">
                <small className="text-center mx-auto">15</small>
              </span>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}
