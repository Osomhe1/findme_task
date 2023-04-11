import { Link } from "react-router-dom"


const Plan = () => (
  <div>
    <div className="bg-[#E5E5E5] ">
      <div className=" px-8  md:p-8 md:mx-10  ">
        <Link to="/">
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
        </Link>
        <h3 className="text-[#2B365A] font-semibold text-[30px]  ">
          Select your plan
        </h3>
      </div>
      <section className="px-6 xl:px-0">
        <div className=" mx-auto container">
          <div className="flex flex-col lg:items-center justify-center w-full">
            <h1 className="font-semibold text-gray-800 text-3xl md:text-4xl">
              Starter Plan
            </h1>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="pt-14">
              <div className="container mx-auto">
                <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                    <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                      <h4 className="text-xl text-[#2B365A] font-medium pb-8">
                        Basic
                      </h4>
                      <p className="text-base text-[#2B365A] relative pl-3">
                        <span className=" uppercase text-lg">ngn</span> {''}
                        <span className="text-lg   font-semibold">1 000</span>
                      </p>
                      <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            24/7 access
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Order labs + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Radiology tests + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Partnership + Discounts
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Direct doctor phone number
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="opacity-0 mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-400 text-base font-normal">
                            Specialists appoinments
                          </p>
                        </li>
                      </ul>

                      <button className="mt-5 w-full  hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#2B365A] px-8 border-2 border-[#2B365A] text-base font-semibold py-3">
                        Choose Standard
                      </button>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                    <div className="py-5 px-4 bg-indigo-700 border border-gray-200 shadow rounded-lg text-left">
                      <h4 className="text-2xl text-white font-semibold pb-8">
                        Pro
                      </h4>
                      <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            24/7 access
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            Order labs + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            Radiology tests + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-white text-base font-normal">
                            Partnership + Discounts
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4 opacity-0"
                            alt="check-mark"
                          />
                          <p className="text-indigo-700 text-base font-normal">
                            Direct doctor phone number
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4 opacity-0"
                            alt="check-mark"
                          />
                          <p className="text-indigo-700 text-base font-normal">
                            Specialists appoinments
                          </p>
                        </li>
                      </ul>
                      <p className="text-base text-white relative pl-3">
                        <span className="font-light text-lg">$</span>
                        <span className="text-2xl font-semibold">100</span>
                        <span className="font-light text-lg">/month</span>
                      </p>
                      <button className="mt-5 w-full text-indigo-700 focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold py-3">
                        Choose Standard
                      </button>
                    </div>
                  </div>
                  <div className="w-full xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 mb-4 px-6">
                    <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                      <h4 className="text-2xl text-indigo-700 font-semibold pb-8">
                        Enterprise
                      </h4>
                      <ul className="flex flex-col mb-6">
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            24/7 access
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Order labs + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Radiology tests + Results
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Partnership + Discounts
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Direct doctor phone number
                          </p>
                        </li>
                        <li className="flex items-center mb-2.5">
                          <img
                            src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                            className="mr-4"
                            alt="check-mark"
                          />
                          <p className="text-gray-800 text-base font-normal">
                            Specialists appoinments
                          </p>
                        </li>
                      </ul>
                      <p className="text-base text-indigo-700 relative pl-3">
                        <span className="font-light text-lg">$</span>
                        <span className="text-2xl font-semibold">200</span>
                        <span className="font-light text-lg">/month</span>
                      </p>
                      <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-indigo-700 px-8 py-3 text-base font-semibold py-3">
                        Choose Standard
                      </button>
                    </div>
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
export default Plan
