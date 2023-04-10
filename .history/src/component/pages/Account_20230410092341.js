import { Link } from 'react-router-dom'

export default function Account() {
  return (
    <div>
      <section className="p-3">
        <div className=" px-8 md:p-8 md:mx-10  ">
          <Link to="/">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.6064 23.0769C37.6064 23.7909 37.0759 24.3809 36.3876 24.4743L36.1962 24.4871L7.99226 24.4871C7.21342 24.4871 6.58206 23.8558 6.58206 23.0769C6.58206 22.363 7.11258 21.773 7.8009 21.6796L7.99226 21.6667L36.1962 21.6667C36.9751 21.6667 37.6064 22.2981 37.6064 23.0769Z"
                fill="#2B365A"
              />
              <path
                d="M20.3622 33.4061C20.9141 33.9556 20.916 34.8485 20.3665 35.4004C19.8669 35.9021 19.0835 35.9493 18.5306 35.5409L18.3721 35.4047L6.99652 24.078C6.4933 23.5769 6.44752 22.7907 6.85921 22.2378L6.99644 22.0794L18.372 10.7508C18.9239 10.2012 19.8168 10.2031 20.3664 10.7549C20.866 11.2566 20.9099 12.0402 20.4991 12.5914L20.3622 12.7493L9.99063 23.0792L20.3622 33.4061Z"
                fill="#2B365A"
              />
            </svg>
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-2 items-center md:w-[80%] m-auto ">
          <div className="md:shadow-2xl text-cente md:p-12 w-ful   lg:block  pb-20 ">
            <div className=" text-cente ">
              <h1 className="text-[#2B365A] font-bold text-2xl p-2 ">
                Business Account
              </h1>
              <p className="font-medium text-[14px] text-[#2B365A] py-3 opacity-60 ">
                Select the type of business account to manage
              </p>
            </div>

            <div className="">
              <div className="flex gap-4 items-center justify-between w-full border-[#999999] p-3 my-4 border-b-2 border-t-2 ">
                <Link to="/email-recovery">
                  <div className=" flex gap-2 items-center">
                    <h1 className="text-[#2B365A] font-bold text-[15px] ">
                      New
                    </h1>
                    <div className="">
                      <svg
                        width="14"
                        height="9"
                        viewBox="0 0 14 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 1.92578L7 7.25346L13 1.92578"
                          stroke="#2B365A"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="flex gap-4 items-center justify-between w-full border-[#999999] p-3 my-4 border-b-2  ">
                <Link to="/phone-recovery">
                  <div className="py-4">
                    <h1 className="text-[#2B365A] font-bold text-[15px] ">
                      Create your business
                    </h1>
                    <p className="text-[#787878] text-[14px] font-medium ">
                      Create your business or register your already existing
                      business
                    </p>
                  </div>
                </Link>
                <div className="">
                  <svg
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 21.4284L17 14.9999L11 8.57129"
                      stroke="#2B365A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-between w-full border-[#999999] p-3 my-4 border-b-2  ">
                <div className="py-4">
                  <h1 className="text-[#2B365A] font-bold text-[15px] ">
                    Register as a business listing
                  </h1>
                  <p className="text-[#787878] text-[14px] font-medium ">
                    Recovery code would be sent to williamdavid@gmail.com
                  </p>
                </div>
                <div className="">
                  <svg
                    width="28"
                    height="30"
                    viewBox="0 0 28 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 21.4284L17 14.9999L11 8.57129"
                      stroke="#2B365A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="  w-full md:max-w-[500px]   "></div>
        </div>
      </section>
    </div>
  )
}
