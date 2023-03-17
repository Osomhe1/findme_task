import React from 'react'
import bro from './images/Subscriber-bro-1.png'

export default function GetStarted() {
  return (
    <div>
      <section className="bg-[#F5F5F5] min-h-screen ">
        <div className="p-8 mx-10  ">
          <svg
            width="32"
            height="26"
            viewBox="0 0 32 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.6064 13.0768C31.6064 13.7908 31.0759 14.3808 30.3876 14.4742L30.1962 14.487L1.99226 14.487C1.21342 14.487 0.582058 13.8557 0.582058 13.0768C0.582058 12.3629 1.11258 11.7729 1.8009 11.6795L1.99226 11.6666L30.1962 11.6666C30.9751 11.6666 31.6064 12.298 31.6064 13.0768Z"
              fill="#2B365A"
            />
            <path
              d="M14.3622 23.4061C14.9141 23.9556 14.916 24.8485 14.3665 25.4004C13.8669 25.9021 13.0835 25.9493 12.5306 25.5409L12.3721 25.4047L0.996524 14.078C0.493296 13.5769 0.447517 12.7907 0.859209 12.2378L0.996442 12.0794L12.372 0.750819C12.9239 0.201244 13.8168 0.203092 14.3664 0.754948C14.866 1.25664 14.9099 2.04017 14.4991 2.59139L14.3622 2.74927L3.99063 13.0792L14.3622 23.4061Z"
              fill="#2B365A"
            />
          </svg>
        </div>
        <div className="flex flex-wrap justify-around items-center w-[90% m-auto ">
          <div className="">
            <img src={bro} alt="" />
          </div>
          <div className="text-center">
            <div className="font-bold text-[#2B365A] text-[37px] leading-loose py-5 ">
              <h1>Let’s Get started</h1>
            </div>
            <div className="py-6">
              <p className="text-[#011F32] opacity-50  text-[21px] font-normal ">
                Get started by selecting account type to register
              </p>
            </div>
            <div className="py-6">
              <div className="py-4">
                <button className="bg-[#2B365A] text-[24px] p-2 fonts-bold rounded-[13px] w-[427px] text-white ">
                  Sign up a a Vendor
                </button>
              </div>
              <div className="py-4">
                <button className="text-[#2B365A] border-2 border-[#2B365A] text-[24px] p-2 fonts-bold rounded-[13px] w-[427px] bg-white ">
                  Sign up a User
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
