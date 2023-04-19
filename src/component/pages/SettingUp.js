import React, { useEffect, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {  Autoplay, } from 'swiper'

import {  useNavigate,  } from 'react-router-dom'
import ProgressBar from '../ProgressBar'


export default function SettingUp() {

  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(65)
  const loadingDuration = 10000 // 10 seconds

  const navigate =  useNavigate()

  useEffect(() => {
    let loadingTimeout = setTimeout(() => {
      if (loading >= 100) return
      setProgress(progress + 1)
    }, loadingDuration / 100)

    if (progress === 100) {
      setLoading(false)
      navigate(`/account`)
    }

    return () => {
      clearTimeout(loadingTimeout)
    }
  }, [progress, loading])


  return (
    <div>
      <section className="p-3 bg-[#E5E5E5 bg-white md:bg-[#E5E5E5] h-screen ">
        <div className="flex flex-wrap justify-between gap-2 items-center w-[80%] m-auto ">
          <div className=" text-cente md:p-12  w-1/ lg:block m-aut ">
            <div className=" py-12 md:py-24 px- 28">
              <div className="mb16 ">
                
                <div className="">
                  {loading && (
                    <ProgressBar
                      progress={progress}
                      trackWidth={22}
                      indicatorWidth={22}
                    />
                  )}
                </div>
              </div>
              <h1 className="text-[#2B365A] hidden md:block font-semibold text-[42px] ">
                Setting up{' '}
              </h1>
              <p className="text-[#2B365A] text-[15px] md:text-[21px] ">
                Preparing your business profile...
              </p>
            </div>
          </div>

          <div className="max-w-[500px] w-[600px]">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay,]}
              className="mySwiper"
            >
              <SwiperSlide>
                {' '}
                <div className=" items-center  max-w-[500px] w-[600px] relative bg-[#FFFFFF] shadow-2xl text-center p-12 ">
                  <div className="absolute top-4 right-4 ">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.24228 0.674805C3.3487 0.674805 2.49172 0.974084 1.85987 1.5068C1.22802 2.03952 0.873047 2.76205 0.873047 3.51543V20.5592C0.873047 21.3126 1.22802 22.0351 1.85987 22.5678C2.49172 23.1005 3.3487 23.3998 4.24228 23.3998H20.2461C20.4695 23.3998 20.6838 23.325 20.8417 23.1918C20.9997 23.0586 21.0884 22.878 21.0884 22.6896C21.0884 22.5013 20.9997 22.3207 20.8417 22.1875C20.6838 22.0543 20.4695 21.9795 20.2461 21.9795H4.24228C3.79549 21.9795 3.367 21.8299 3.05107 21.5635C2.73515 21.2971 2.55766 20.9359 2.55766 20.5592H19.4038C19.8506 20.5592 20.2791 20.4095 20.595 20.1432C20.9109 19.8768 21.0884 19.5156 21.0884 19.1389V3.51543C21.0884 2.76205 20.7335 2.03952 20.1016 1.5068C19.4698 0.974084 18.6128 0.674805 17.7192 0.674805H4.24228ZM12.2442 6.00098C12.2442 6.28349 12.1111 6.55444 11.8741 6.75421C11.6372 6.95398 11.3158 7.06621 10.9807 7.06621C10.6456 7.06621 10.3243 6.95398 10.0873 6.75421C9.85039 6.55444 9.71728 6.28349 9.71728 6.00098C9.71728 5.71846 9.85039 5.44751 10.0873 5.24774C10.3243 5.04797 10.6456 4.93574 10.9807 4.93574C11.3158 4.93574 11.6372 5.04797 11.8741 5.24774C12.1111 5.44751 12.2442 5.71846 12.2442 6.00098ZM11.823 15.5881C11.823 15.7764 11.7343 15.9571 11.5763 16.0902C11.4184 16.2234 11.2041 16.2982 10.9807 16.2982C10.7573 16.2982 10.5431 16.2234 10.3851 16.0902C10.2272 15.9571 10.1384 15.7764 10.1384 15.5881V9.90684C10.1384 9.71849 10.2272 9.53786 10.3851 9.40468C10.5431 9.2715 10.7573 9.19668 10.9807 9.19668C11.2041 9.19668 11.4184 9.2715 11.5763 9.40468C11.7343 9.53786 11.823 9.71849 11.823 9.90684V15.5881Z"
                        fill="#2B365A"
                      />
                    </svg>
                  </div>
                  <div className="text-cente">
                    <div className=" text-center">
                      <div className=" py md:block">
                        <p
                          className="text-[#787878]  
                    md:block text-[15px] font-semibold text-center py-2 md:py-4 md:mb-8 "
                        >
                          FindMe App Business information on what the vendor
                          should expect from the platform
                        </p>
                        <div className="relative">
                          <div className="absolute w-full  -bottom-4 md:bottom-0 bg-gradient-to-r from-[#6C63FF] via-[#FC3E06] to-[#FF3D00] h-[3px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className=" items-center  max-w-[500px] w-[600px] relative bg-[#FFFFFF] shadow-2xl text-center p-12 ">
                  <div className="absolute top-4 right-4 ">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.24228 0.674805C3.3487 0.674805 2.49172 0.974084 1.85987 1.5068C1.22802 2.03952 0.873047 2.76205 0.873047 3.51543V20.5592C0.873047 21.3126 1.22802 22.0351 1.85987 22.5678C2.49172 23.1005 3.3487 23.3998 4.24228 23.3998H20.2461C20.4695 23.3998 20.6838 23.325 20.8417 23.1918C20.9997 23.0586 21.0884 22.878 21.0884 22.6896C21.0884 22.5013 20.9997 22.3207 20.8417 22.1875C20.6838 22.0543 20.4695 21.9795 20.2461 21.9795H4.24228C3.79549 21.9795 3.367 21.8299 3.05107 21.5635C2.73515 21.2971 2.55766 20.9359 2.55766 20.5592H19.4038C19.8506 20.5592 20.2791 20.4095 20.595 20.1432C20.9109 19.8768 21.0884 19.5156 21.0884 19.1389V3.51543C21.0884 2.76205 20.7335 2.03952 20.1016 1.5068C19.4698 0.974084 18.6128 0.674805 17.7192 0.674805H4.24228ZM12.2442 6.00098C12.2442 6.28349 12.1111 6.55444 11.8741 6.75421C11.6372 6.95398 11.3158 7.06621 10.9807 7.06621C10.6456 7.06621 10.3243 6.95398 10.0873 6.75421C9.85039 6.55444 9.71728 6.28349 9.71728 6.00098C9.71728 5.71846 9.85039 5.44751 10.0873 5.24774C10.3243 5.04797 10.6456 4.93574 10.9807 4.93574C11.3158 4.93574 11.6372 5.04797 11.8741 5.24774C12.1111 5.44751 12.2442 5.71846 12.2442 6.00098ZM11.823 15.5881C11.823 15.7764 11.7343 15.9571 11.5763 16.0902C11.4184 16.2234 11.2041 16.2982 10.9807 16.2982C10.7573 16.2982 10.5431 16.2234 10.3851 16.0902C10.2272 15.9571 10.1384 15.7764 10.1384 15.5881V9.90684C10.1384 9.71849 10.2272 9.53786 10.3851 9.40468C10.5431 9.2715 10.7573 9.19668 10.9807 9.19668C11.2041 9.19668 11.4184 9.2715 11.5763 9.40468C11.7343 9.53786 11.823 9.71849 11.823 9.90684V15.5881Z"
                        fill="#2B365A"
                      />
                    </svg>
                  </div>
                  <div className="text-cente">
                    <div className=" text-center">
                      <div className=" py md:block">
                        <p
                          className="text-[#787878]  
                    md:block text-[15px] font-semibold text-center py-2 md:py-4 md:mb-8 "
                        >
                          FindMe App Business information on what the vendor
                          should expect from the platform
                        </p>
                        <div className="relative">
                          <div className="absolute w-full  -bottom-4 md:bottom-0 bg-gradient-to-r from-[#6C63FF] via-[#FC3E06] to-[#FF3D00] h-[3px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {' '}
                <div className=" items-center  max-w-[500px] w-[600px] relative bg-[#FFFFFF] shadow-2xl text-center p-12 ">
                  <div className="absolute top-4 right-4 ">
                    <svg
                      width="22"
                      height="24"
                      viewBox="0 0 22 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.24228 0.674805C3.3487 0.674805 2.49172 0.974084 1.85987 1.5068C1.22802 2.03952 0.873047 2.76205 0.873047 3.51543V20.5592C0.873047 21.3126 1.22802 22.0351 1.85987 22.5678C2.49172 23.1005 3.3487 23.3998 4.24228 23.3998H20.2461C20.4695 23.3998 20.6838 23.325 20.8417 23.1918C20.9997 23.0586 21.0884 22.878 21.0884 22.6896C21.0884 22.5013 20.9997 22.3207 20.8417 22.1875C20.6838 22.0543 20.4695 21.9795 20.2461 21.9795H4.24228C3.79549 21.9795 3.367 21.8299 3.05107 21.5635C2.73515 21.2971 2.55766 20.9359 2.55766 20.5592H19.4038C19.8506 20.5592 20.2791 20.4095 20.595 20.1432C20.9109 19.8768 21.0884 19.5156 21.0884 19.1389V3.51543C21.0884 2.76205 20.7335 2.03952 20.1016 1.5068C19.4698 0.974084 18.6128 0.674805 17.7192 0.674805H4.24228ZM12.2442 6.00098C12.2442 6.28349 12.1111 6.55444 11.8741 6.75421C11.6372 6.95398 11.3158 7.06621 10.9807 7.06621C10.6456 7.06621 10.3243 6.95398 10.0873 6.75421C9.85039 6.55444 9.71728 6.28349 9.71728 6.00098C9.71728 5.71846 9.85039 5.44751 10.0873 5.24774C10.3243 5.04797 10.6456 4.93574 10.9807 4.93574C11.3158 4.93574 11.6372 5.04797 11.8741 5.24774C12.1111 5.44751 12.2442 5.71846 12.2442 6.00098ZM11.823 15.5881C11.823 15.7764 11.7343 15.9571 11.5763 16.0902C11.4184 16.2234 11.2041 16.2982 10.9807 16.2982C10.7573 16.2982 10.5431 16.2234 10.3851 16.0902C10.2272 15.9571 10.1384 15.7764 10.1384 15.5881V9.90684C10.1384 9.71849 10.2272 9.53786 10.3851 9.40468C10.5431 9.2715 10.7573 9.19668 10.9807 9.19668C11.2041 9.19668 11.4184 9.2715 11.5763 9.40468C11.7343 9.53786 11.823 9.71849 11.823 9.90684V15.5881Z"
                        fill="#2B365A"
                      />
                    </svg>
                  </div>
                  <div className="text-cente">
                    <div className=" text-center">
                      <div className=" py md:block">
                        <p
                          className="text-[#787878]  
                    md:block text-[15px] font-semibold text-center py-2 md:py-4 md:mb-8 "
                        >
                          FindMe App Business information on what the vendor
                          should expect from the platform
                        </p>
                        <div className="relative">
                          <div className="absolute w-full  -bottom-4 md:bottom-0 bg-gradient-to-r from-[#6C63FF] via-[#FC3E06] to-[#FF3D00] h-[3px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
         
        </div>
      </section>
    </div>
  )
}
