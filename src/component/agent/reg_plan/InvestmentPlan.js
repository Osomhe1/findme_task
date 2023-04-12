import { Link, useNavigate } from "react-router-dom"


const InvestmentPlan = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="bg-[#E5E5E5] ">
        <div className=" px-8  md:p-2 md:mx-10 flex items-center justify-between  ">
          <div className="">
            <button onClick={() => navigate(-1)}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.667 13.2969C21.667 13.7082 21.3613 14.0482 20.9647 14.102L20.8545 14.1094L4.60449 14.1094C4.15576 14.1094 3.79199 13.7456 3.79199 13.2969C3.79199 12.8855 4.09766 12.5456 4.49424 12.4918L4.60449 12.4844L20.8545 12.4844C21.3032 12.4844 21.667 12.8481 21.667 13.2969Z"
                  fill="#2B365A"
                />
                <path
                  d="M11.7315 19.2478C12.0495 19.5644 12.0506 20.0789 11.734 20.3969C11.4461 20.686 10.9948 20.7131 10.6762 20.4778L10.5849 20.3994L4.03075 13.8734C3.74081 13.5847 3.71443 13.1317 3.95164 12.8131L4.0307 12.7219L10.5849 6.1948C10.9028 5.87815 11.4173 5.87922 11.7339 6.19717C12.0218 6.48623 12.0471 6.93767 11.8104 7.25526L11.7315 7.34622L5.75584 13.2979L11.7315 19.2478Z"
                  fill="#2B365A"
                />
              </svg>
            </button>
          </div>
        </div>
        <section className="px-6 xl:px-0 w-[90% ">
          <div className=" mx-auto containe">
            <div className="flex flex-col lg:items-center justify-center w-full">
              <h1 className="font-semibold hidden md:block text-gray-800 text-3xl md:text-4xl">
                Investment Plan
              </h1>
              <div className="w-[150px]  mx-auto p-1 md:hidden    rounded-md  ">
                <div className="  p-1 ">
                  <p className=" text-[20px] font-bold  text-[#2B365A]    ">
                    {' '}
                    Money Saver
                  </p>
                  
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="lg:pt-4 pt-2">
                <div className="container mx-auto">
                  <div className=" mx-auto flex flex-wrap mb-12 gap-4 lg:gap-20  lg:justify-between sm:justify-center -mx6 ">
                    <div className=" w-[300px] mx-auto mb-4 p-1  rounded-lg bg-gradient-to-b from-[#6C63FF] via-[#B45083] to-[#FF3D00] ">
                      <div className="py-5 px-4 bg-white min-h-[600px]  shadow rounded-lg text-left">
                        <h4 className="text-2xl uppercase text-[#2B365A] font-semibold pb-2">
                          BASIC
                        </h4>
                        <p className="text-base text-[#2B365A] relative pl3">
                          <span className=" uppercase font-semibold text-lg">
                            ngn
                          </span>{' '}
                          {''}
                          <span className="text-lg   font-semibold">
                            500 000
                          </span>
                        </p>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Unlimited Store Front
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Ai Powered Dashboard
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Network and supply chain
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Management Tool (Inventry, Staff managment
                              ,booking delivery etc.)
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Free Ad/Promotion
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Vendor Editorial clip tool
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              1 month commission free
                            </p>
                          </li>

                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Avant guard customers (customer managment)
                            </p>
                          </li>
                        </ul>
                        <div className="pt-10">
                          <button className="mt-5 w-full bg-[#2B365A] hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#FFFFFF] px-8  text-base font-semibold py-3">
                            Choose Enterprice
                          </button>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    
                    <div className=" w-[300px] mx-auto  mb-4 p-1  rounded-lg bg-gradient-to-b from-[#6C63FF] via-[#B45083] to-[#FF3D00] ">
                      <div className="py-5 px-4 bg-white min-h-[600px] shadow rounded-lg text-left">
                        <h4 className="text-2xl uppercase text-[#2B365A] font-semibold pb-2">
                          STANDARD
                        </h4>
                        <p className="text-base text-[#2B365A] relative pl3">
                          <span className=" uppercase font-semibold text-lg">
                            ngn
                          </span>{' '}
                          {''}
                          <span className="text-lg   font-semibold">
                            1 030 000
                          </span>
                        </p>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Unlimited Store Front
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Ai Powered Dashboard
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Network and supply chain
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Management Tool (Inventry, Staff managment
                              ,booking delivery etc.)
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Free Ad/Promotion
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Vendor Editorial clip tool
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Customized Pages websites and app
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Business reform program and advance technolgy
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Limited management
                            </p>
                          </li>
                        </ul>

                        <button className="mt-2 w-full bg-[#2B365A] hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#FFFFFF] px-8  text-base font-semibold py-3">
                          Choose Enterprice
                        </button>
                      </div>
                    </div>
                    {/*  */}
                    <div className=" w-[300px] mx-auto  mb-4 p-1  rounded-lg bg-gradient-to-b from-[#6C63FF] via-[#B45083] to-[#FF3D00] ">
                      <div className="py-5 px-4 bg-white min-h-[600px] shadow rounded-lg text-left">
                        <h4 className="text-2xl uppercase text-[#2B365A] font-semibold pb-2">
                          Enterprise
                        </h4>
                        <p className="text-base text-[#2B365A] relative pl3">
                          <span className=" uppercase font-semibold text-lg">
                            ngn
                          </span>{' '}
                          {''}
                          <span className="text-lg   font-semibold">
                            3 000 000
                          </span>
                        </p>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Unlimited Store Front
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Ai Powered Dashboard
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Network and supply chain
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Management Tool (Inventry, Staff managment
                              ,booking delivery etc.)
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Free Ad/Promotion
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Vendor Editorial clip tool
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Customized Pages websites and app
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Business reform program and advance technolgy
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <svg
                              width="28"
                              height="28"
                              viewBox="0 0 28 28"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M22 8L11 19L6 14"
                                stroke="#999999"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>

                            <p className="text-gray-400  text-base font-normal">
                              Limited management
                            </p>
                          </li>
                        </ul>

                        <button className="mt-2 w-full bg-[#2B365A] hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#FFFFFF] px-8  text-base font-semibold py-3">
                          Choose Enterprice
                        </button>
                      </div>
                    </div>
                    {/*  */}
                    
                   
                    <div className="md:hidden container w-[300px]    ">
                      <p className="text-[#011F32] text-center text-[15px] ">
                        Terms & conditions
                      </p>
                      <p className="text-[#2B365A] py-2 text-[13px] font-semibold text-center  ">
                        Copyright 2021 FindMe.com - All rights reserved.
                      </p>
                    </div>
                  </div>
                </div>
                <style
                  dangerouslySetInnerHTML={{
                    __html: '',
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <style>
          {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
        </style>
      </div>
    </div>
  )
}
export default InvestmentPlan
