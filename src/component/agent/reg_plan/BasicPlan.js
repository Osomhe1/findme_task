import { Link, useNavigate } from "react-router-dom"


 const Plan = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className="bg-[#E5E5E5] ">
        <div className=" px-8  md:p-8 md:mx-10 flex items-center justify-between  ">
          <div className="">
            {/* <Link to="/"> */}
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
            {/* </Link> */}

            <h3 className="text-[#2B365A] font-semibold lg:text-[30px]  text-[22px] ">
              Select your plan
            </h3>
          </div>
          <div className="text-[#011F32] md:hidden font-semibold text-[14px] ">
            <p>Step 3 of 6</p>
          </div>
        </div>
        <section className="px-6 xl:px-0 w-[90% ">
          <div className=" mx-auto containe">
            <div className="flex flex-col lg:items-center justify-center w-full">
              <h1 className="font-semibold hidden md:block text-gray-800 text-3xl md:text-4xl">
                Starter Plan
              </h1>
              <div className="w-[150px]  mx-auto p-1 md:hidden    rounded-md  bg-gradient-to-b h-[44px] left-[4.2rem] relative from-[#6C63FF] via-[#B45083] to-[#FF3D00]">
                <div className="bg-[#F5F5F5] flex gap-2  items-center p-1 ">
                  <p className=" text-[18px]  text-[#2B365A]    ">More plans</p>
                  <div className=" ">
                    <svg
                      width="20"
                      height="15"
                      viewBox="0 0 20 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 7.50219C0 7.92255 0.327042 8.26995 0.751357 8.32493L0.869318 8.33251L18.2557 8.33251C18.7358 8.33251 19.125 7.96077 19.125 7.50219C19.125 7.08184 18.798 6.73444 18.3736 6.67945L18.2557 6.67188L0.869318 6.67188C0.389207 6.67188 0 7.04362 0 7.50219Z"
                        fill="#2B365A"
                      />
                      <path
                        d="M10.629 13.5813C10.2888 13.9049 10.2876 14.4306 10.6263 14.7555C10.9343 15.051 11.4172 15.0787 11.7581 14.8383L11.8557 14.7581L18.8682 8.08894C19.1785 7.79392 19.2067 7.33103 18.9529 7.00546L18.8683 6.91221L11.8558 0.241981C11.5156 -0.0816072 10.9652 -0.0805188 10.6264 0.244412C10.3184 0.539803 10.2913 1.00114 10.5446 1.3257L10.6289 1.41866L17.0225 7.50089L10.629 13.5813Z"
                        fill="#2B365A"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="lg:pt-8 pt-2">
                <div className="contain mx-auto">
                  <div className="flex flex-wrap mb-12 gap-4 lg:gap-12 itemscenter justify-between sm:justify-center -mx-6 ">
                    <div className="w-full xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 mb-4 px6 border max-w-[290px] mx-auto ">
                      <div className="py-3 px-4 bg-white border-2  border-[#2B365A] shadow rounded-lg text-left">
                        <h4 className="text-xl text-[#2B365A] font-medium pb-2">
                          Basic
                        </h4>
                        <p className="text-base text-[#2B365A] relative pl3">
                          <span className=" uppercase font-semibold text-lg">
                            ngn
                          </span>{' '}
                          {''}
                          <span className="text-lg   font-semibold">1 000</span>
                        </p>
                        <ul className="py-2 flex flex-col mb-6">
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

                            <p className="text-gray-400 text-base font-normal">
                              1 Store Front
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

                            <p className="text-gray-400 text-base font-normal">
                              Smart Dashboard
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

                            <p className="text-gray-400 text-base font-normal">
                              Account
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

                            <p className="text-gray-400 text-base font-normal">
                              Ad tool
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

                            <p className="text-gray-400 text-base font-normal">
                              1 month commission Free
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

                            <p className="text-gray-400 text-base font-normal">
                              No monthly subscription
                            </p>
                          </li>
                        </ul>

                        <button className="mt-5 w-full  hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#2B365A] px-8 border-2 border-[#2B365A] text-base font-semibold py-3">
                          Choose Standard
                        </button>
                      </div>
                    </div>

                    {/*  */}
                    <div className="w-full xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 mb-4 max-w-[290px] mx-auto px6">
                      <div className="py-5 px-4 bg-white border-2 border-[#E23338] shadow rounded-lg text-left">
                        <h4 className="text-xl text-[#2B365A] font-semibold pb-2">
                          Standard
                        </h4>
                        <p className="text-base text-[#2B365A] relative ">
                          <span className="font-semibold text-lg uppercase">
                            ngn{' '}
                          </span>
                          <span className="text-lg font-semibold">3 000</span>
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
                              6-10 Store Front
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
                              Smart Dashboard
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
                              Account
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
                              Ad Tool/Promotion
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
                              No monthly subscription
                            </p>
                          </li>
                        </ul>

                        <button className="mt-5 w-full text-[#fff] focus:outline-none transition duration-150 ease-in-out rounded bg-[#E23338] hover:bg-[#2B365A] px-8  text-base font-semibold py-3">
                          Choose Standard
                        </button>
                      </div>
                    </div>
                    <div className="w-ful w-[290px] lg:max-w-1/4 mx-auto xl:w-1/4 lg:w-1/4 md:w-1/2 sm:w-1/2 mb-4 p-1  rounded-lg bg-gradient-to-b from-[#6C63FF] via-[#B45083] to-[#FF3D00] ">
                      <div className="py-5 px-4 bg-white  shadow rounded-lg text-left">
                        <h4 className="text-2xl text-[#2B365A] font-semibold pb-2">
                          Premium
                        </h4>
                        <p className="text-base text-[#2B365A] relative pl3">
                          <span className=" uppercase font-semibold text-lg">
                            ngn
                          </span>{' '}
                          {''}
                          <span className="text-lg   font-semibold">5 000</span>
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
                              Avant guard customers (customer managment)
                            </p>
                          </li>
                        </ul>

                        <button className="mt-5 w-full bg-[#2B365A] hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#FFFFFF] px-8  text-base font-semibold py-3">
                          Choose Premium
                        </button>
                      </div>
                    </div>

                    <div className="w-[300px] md:max-w-[290px] mx-auto p-1 lg:mt-60 rounded-md bg-[#2B365A] lg:bg-gradient-to-b h-[60px]  from-[#6C63FF] via-[#B45083] to-[#FF3D00]">
                      <Link to="/enterprice-plan">
                        <div className="lg:bg-[#F5F5F5] flex gap-2 justify-between items-center p-3 ">
                          <p className="text-white text-[24px] uppercase lg:text-[#2B365A] lg:text-[18px] font-semibold ">
                            Entreprise Plans
                          </p>
                          <div className="hidden lg:block">
                            <svg
                              width="20"
                              height="15"
                              viewBox="0 0 20 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 7.50219C0 7.92255 0.327042 8.26995 0.751357 8.32493L0.869318 8.33251L18.2557 8.33251C18.7358 8.33251 19.125 7.96077 19.125 7.50219C19.125 7.08184 18.798 6.73444 18.3736 6.67945L18.2557 6.67188L0.869318 6.67188C0.389207 6.67188 0 7.04362 0 7.50219Z"
                                fill="#2B365A"
                              />
                              <path
                                d="M10.629 13.5813C10.2888 13.9049 10.2876 14.4306 10.6263 14.7555C10.9343 15.051 11.4172 15.0787 11.7581 14.8383L11.8557 14.7581L18.8682 8.08894C19.1785 7.79392 19.2067 7.33103 18.9529 7.00546L18.8683 6.91221L11.8558 0.241981C11.5156 -0.0816072 10.9652 -0.0805188 10.6264 0.244412C10.3184 0.539803 10.2913 1.00114 10.5446 1.3257L10.6289 1.41866L17.0225 7.50089L10.629 13.5813Z"
                                fill="#2B365A"
                              />
                            </svg>
                          </div>
                          <div className="lg:hidden">
                            <svg
                              width="32"
                              height="18"
                              viewBox="0 0 20 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M0 7.50219C0 7.92255 0.327042 8.26995 0.751357 8.32493L0.869318 8.33251L18.2557 8.33251C18.7358 8.33251 19.125 7.96077 19.125 7.50219C19.125 7.08184 18.798 6.73444 18.3736 6.67945L18.2557 6.67188L0.869318 6.67188C0.389207 6.67188 0 7.04362 0 7.50219Z"
                                fill="#F2F2F2"
                              />
                              <path
                                d="M10.629 13.5813C10.2888 13.9049 10.2876 14.4306 10.6263 14.7555C10.9343 15.051 11.4172 15.0787 11.7581 14.8383L11.8557 14.7581L18.8682 8.08894C19.1785 7.79392 19.2067 7.33103 18.9529 7.00546L18.8683 6.91221L11.8558 0.241981C11.5156 -0.0816072 10.9652 -0.0805188 10.6264 0.244412C10.3184 0.539803 10.2913 1.00114 10.5446 1.3257L10.6289 1.41866L17.0225 7.50089L10.629 13.5813Z"
                                fill="#F2F2F2"
                              />
                            </svg>
                          </div>
                        </div>
                      </Link>
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
export default Plan
