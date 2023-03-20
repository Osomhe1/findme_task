import React from 'react'
import bro from './images/Subscriber-bro-1.png'

export default function GetStarted() {
  return (
    <div>
      <section className="bg-[#F5F5F5] min-h-screen ">
        <div className="p-4 md:p-8 md:mx-10">
          <div className="  md:grid ">
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
          {/* mobile view */}
          <div className="grid md:hidden">
            <div className="font-bold  text-[#2B365A] text-[20px]  leading-loose  ">
              <h1>Let’s Get started</h1>
            </div>
            <div className=" md:py-6">
              <p className="text-[#011F32] opacity-50 text-[16px] md:text-[21px] font-normal ">
                Get started by selecting account type to register
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around items-center w-[90% m-auto ">
          <div className="">
            <img src={bro} className="w-[300px] md:w-full" alt="" />
          </div>
          <div className=" md:text-center  ">
            <div className=" hidden md:grid">
              <div className="font-bold  text-[#2B365A]  md:text-[37px] leading-loose md:py-5 ">
                <h1>Let’s Get started</h1>
              </div>
              <div className=" md:py-6">
                <p className="text-[#011F32] opacity-50  md:text-[21px] font-normal ">
                  Get started by selecting account type to register
                </p>
              </div>
            </div>

            <div className="py-2">
              <div className="py-2">
                <button className="bg-[#2B365A] md:text-[24px] text-[16px] p-2 md:p-4 fonts-bold rounded-[5px] md:rounded-[13px] w-[318px] md:w-[427px] text-white ">
                  Sign Up as a Vendor
                </button>
              </div>
              <div className="py-2">
                <button className="text-[#2B365A] border-2 border-[#2B365A] md:text-[24px] text-[16px] p-2 md:p-4 fonts-bold rounded-[5px] md:rounded-[13px] w-[318px] md:w-[427px] bg-white ">
                  Sign Up as a User
                </button>
              </div>
            </div>
          </div>
          {/* mobile view */}
          <div className=" block  md:hidden">
            <div className=" py-4">
              <svg
                width="327"
                height="20"
                viewBox="0 0 327 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M160.442 16.128C159.364 16.128 158.426 15.8933 157.626 15.424C156.836 14.944 156.223 14.2667 155.786 13.392C155.359 12.5173 155.146 11.488 155.146 10.304C155.146 9.10933 155.359 8.07467 155.786 7.2C156.212 6.32533 156.826 5.65333 157.626 5.184C158.426 4.71467 159.364 4.48 160.442 4.48C161.53 4.48 162.468 4.71467 163.258 5.184C164.058 5.65333 164.671 6.32533 165.098 7.2C165.524 8.07467 165.738 9.104 165.738 10.288C165.738 11.4827 165.524 12.5173 165.098 13.392C164.671 14.2667 164.058 14.944 163.258 15.424C162.458 15.8933 161.519 16.128 160.442 16.128ZM160.442 14.784C161.583 14.784 162.468 14.3947 163.098 13.616C163.738 12.8373 164.058 11.728 164.058 10.288C164.058 8.85867 163.738 7.76 163.098 6.992C162.468 6.21333 161.583 5.824 160.442 5.824C159.3 5.824 158.415 6.21333 157.786 6.992C157.156 7.76 156.842 8.85867 156.842 10.288C156.842 11.728 157.156 12.8373 157.786 13.616C158.426 14.3947 159.311 14.784 160.442 14.784ZM171.967 7.744C172.212 7.744 172.468 7.78133 172.735 7.856L172.703 9.328C172.415 9.22133 172.1 9.168 171.759 9.168C171.023 9.168 170.468 9.392 170.095 9.84C169.732 10.2773 169.551 10.832 169.551 11.504V16H167.951V10.208C167.951 9.36533 167.908 8.608 167.823 7.936H169.327L169.471 9.392C169.684 8.85867 170.015 8.45333 170.463 8.176C170.911 7.888 171.412 7.744 171.967 7.744Z"
                  fill="#2B365A"
                />
                <line y1="9.5" x2="130" y2="9.5" stroke="#2B365A" />
                <line x1="197" y1="9.5" x2="327" y2="9.5" stroke="#2B365A" />
              </svg>
            </div>
            <div className="flex gap-3">
              <div className="">
                <svg
                  width="106"
                  height="64"
                  viewBox="0 0 106 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2366_15407)">
                    <rect x="4" width="98" height="56" rx="6" fill="white" />
                  </g>
                  <path
                    d="M62.8055 26.0415H62V26H53V30H58.6515C57.827 32.3285 55.6115 34 53 34C49.6865 34 47 31.3135 47 28C47 24.6865 49.6865 22 53 22C54.5295 22 55.921 22.577 56.9805 23.5195L59.809 20.691C58.023 19.0265 55.634 18 53 18C47.4775 18 43 22.4775 43 28C43 33.5225 47.4775 38 53 38C58.5225 38 63 33.5225 63 28C63 27.3295 62.931 26.675 62.8055 26.0415Z"
                    fill="#FFC107"
                  />
                  <path
                    d="M44.1533 23.3455L47.4388 25.755C48.3278 23.554 50.4808 22 53.0003 22C54.5298 22 55.9213 22.577 56.9808 23.5195L59.8093 20.691C58.0233 19.0265 55.6343 18 53.0003 18C49.1593 18 45.8283 20.1685 44.1533 23.3455Z"
                    fill="#FF3D00"
                  />
                  <path
                    d="M53.0002 38.0001C55.5832 38.0001 57.9302 37.0116 59.7047 35.4041L56.6097 32.7851C55.5719 33.5743 54.3039 34.0011 53.0002 34.0001C50.3992 34.0001 48.1907 32.3416 47.3587 30.0271L44.0977 32.5396C45.7527 35.7781 49.1137 38.0001 53.0002 38.0001Z"
                    fill="#4CAF50"
                  />
                  <path
                    d="M62.8055 26.0415H62V26H53V30H58.6515C58.2571 31.1082 57.5467 32.0766 56.608 32.7855L56.6095 32.7845L59.7045 35.4035C59.4855 35.6025 63 33 63 28C63 27.3295 62.931 26.675 62.8055 26.0415Z"
                    fill="#1976D2"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2366_15407"
                      x="0"
                      y="0"
                      width="106"
                      height="64"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2366_15407"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2366_15407"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="">
                <svg
                  width="106"
                  height="64"
                  viewBox="0 0 106 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2366_15414)">
                    <rect x="4" width="98" height="56" rx="6" fill="white" />
                  </g>
                  <path
                    d="M61.9465 38.0001C60.8398 39.6534 59.6665 41.2667 57.8798 41.2934C56.0931 41.3334 55.5198 40.2401 53.4931 40.2401C51.4531 40.2401 50.8265 41.2667 49.1331 41.3334C47.3865 41.4001 46.0665 39.5734 44.9465 37.9601C42.6665 34.6667 40.9198 28.6001 43.2665 24.5201C44.4265 22.4934 46.5065 21.2134 48.7598 21.1734C50.4665 21.1467 52.0931 22.3334 53.1465 22.3334C54.1865 22.3334 56.1598 20.9067 58.2265 21.1201C59.0931 21.1601 61.5198 21.4667 63.0798 23.7601C62.9598 23.8401 60.1865 25.4667 60.2131 28.8401C60.2531 32.8667 63.7465 34.2134 63.7865 34.2267C63.7465 34.3201 63.2265 36.1467 61.9465 38.0001ZM54.3331 16.6667C55.3065 15.5601 56.9198 14.7201 58.2531 14.6667C58.4265 16.2267 57.7998 17.8001 56.8665 18.9201C55.9465 20.0534 54.4265 20.9334 52.9331 20.8134C52.7331 19.2801 53.4798 17.6801 54.3331 16.6667Z"
                    fill="#2B365A"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2366_15414"
                      x="0"
                      y="0"
                      width="106"
                      height="64"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2366_15414"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2366_15414"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
              <div className="">
                <svg
                  width="106"
                  height="64"
                  viewBox="0 0 106 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2366_15418)">
                    <rect x="4" width="98" height="56" rx="6" fill="white" />
                    <path
                      d="M55.0867 39.9962V29.0682H58.7733L59.3213 24.7896H55.0867V22.0642C55.0867 20.8296 55.4307 19.9842 57.2027 19.9842H59.448V16.1696C58.3555 16.0525 57.2574 15.9959 56.1587 16.0002C52.9 16.0002 50.6627 17.9896 50.6627 21.6416V24.7816H47V29.0602H50.6707V39.9962H55.0867Z"
                      fill="#3960B7"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2366_15418"
                      x="0"
                      y="0"
                      width="106"
                      height="64"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2366_15418"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2366_15418"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
            <div className="py-4">
              <h3 className="text-[#2B365A] text-center m-auto font-semibold text-[16px] py-2  ">
                Already have an Account? Login
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
