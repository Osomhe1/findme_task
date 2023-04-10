import React from 'react'
import { Link } from 'react-router-dom'

export default function SettingUp() {
  return (
    <div>
      <section className="p-3 bg-[#E5E5E5 bg-white md:bg-[#E5E5E5] h-screen ">
        

        <div className="flex flex-wrap justify-between gap-2 items-center w-[80%] m-auto ">
          <div className=" text-cente md:p-12  w-1/ lg:block m-aut ">
            <div className=" py-12 md:py-24 px- 28">
              <div className="mb-16 ">
                <svg
                  width="223"
                  height="223"
                  viewBox="0 0 223 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M223 111.5C223 173.08 173.08 223 111.5 223C49.9202 223 0 173.08 0 111.5C0 49.9202 49.9202 0 111.5 0C173.08 0 223 49.9202 223 111.5ZM22.3 111.5C22.3 160.764 62.2362 200.7 111.5 200.7C160.764 200.7 200.7 160.764 200.7 111.5C200.7 62.2362 160.764 22.3 111.5 22.3C62.2362 22.3 22.3 62.2362 22.3 111.5Z"
                    fill="#CDD2FD"
                  />
                  <path
                    d="M111.5 11.15C111.5 4.99203 116.504 -0.0577569 122.632 0.557022C137.827 2.08162 152.588 6.71615 165.981 14.2167C182.626 23.5384 196.601 36.9751 206.569 53.2414C216.537 69.5077 222.165 88.0596 222.914 107.123C223.663 126.185 219.508 145.122 210.847 162.12C202.186 179.118 189.309 193.61 173.446 204.209C157.584 214.808 139.267 221.159 120.248 222.656C101.229 224.153 82.1447 220.745 64.8195 212.758C50.8791 206.331 38.4531 197.113 28.2883 185.716C24.1894 181.121 25.3333 174.104 30.3152 170.484C35.2971 166.865 42.2231 168.027 46.4356 172.519C54.2772 180.88 63.6821 187.678 74.1556 192.506C88.0157 198.896 103.284 201.622 118.499 200.425C133.714 199.228 148.367 194.146 161.057 185.667C173.747 177.188 184.049 165.595 190.978 151.996C197.907 138.397 201.23 123.248 200.631 107.998C200.032 92.7477 195.53 77.9062 187.556 64.8931C179.581 51.8801 168.401 41.1307 155.085 33.6734C145.023 28.0382 133.995 24.4252 122.621 22.996C116.511 22.2282 111.5 17.308 111.5 11.15Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M92.3944 103.201C94.1424 103.201 95.7041 103.63 97.0795 104.49C98.4836 105.35 99.5725 106.539 100.346 108.058C101.149 109.548 101.55 111.253 101.55 113.173C101.55 115.207 101.091 117.027 100.174 118.631C99.2573 120.236 97.9821 121.497 96.3488 122.414C94.7155 123.302 92.8672 123.746 90.8041 123.746C86.7064 123.746 83.54 122.414 81.3049 119.749C79.0985 117.084 77.9953 113.287 77.9953 108.359C77.9953 105.063 78.5254 102.212 79.5857 99.805C80.6745 97.398 82.2219 95.5641 84.2278 94.3032C86.2336 93.0138 88.612 92.369 91.3628 92.369C93.3114 92.369 95.1883 92.6556 96.9935 93.2287C98.7988 93.8018 100.332 94.6041 101.593 95.6357L99.0567 101.352C97.7672 100.407 96.4921 99.719 95.2313 99.2892C93.9704 98.8307 92.8099 98.6015 91.7497 98.6015C88.3111 98.6015 86.4199 101.137 86.076 106.209C86.7351 105.292 87.6234 104.562 88.7409 104.017C89.8585 103.473 91.0763 103.201 92.3944 103.201ZM90.3742 117.557C91.4918 117.557 92.3801 117.184 93.0392 116.439C93.6982 115.694 94.0278 114.72 94.0278 113.516C94.0278 112.256 93.6982 111.267 93.0392 110.551C92.4087 109.806 91.5204 109.433 90.3742 109.433C89.2854 109.433 88.3971 109.806 87.7093 110.551C87.0503 111.296 86.7207 112.284 86.7207 113.516C86.7207 114.691 87.0503 115.666 87.7093 116.439C88.3971 117.184 89.2854 117.557 90.3742 117.557ZM117.608 103.287C119.5 103.287 121.19 103.702 122.68 104.533C124.17 105.364 125.331 106.525 126.162 108.015C126.993 109.505 127.408 111.224 127.408 113.173C127.408 115.293 126.893 117.156 125.861 118.76C124.858 120.336 123.411 121.554 121.52 122.414C119.657 123.273 117.479 123.703 114.986 123.703C113.009 123.703 111.046 123.402 109.098 122.801C107.149 122.199 105.588 121.411 104.413 120.437L106.906 114.72C109.542 116.554 112.279 117.471 115.115 117.471C116.72 117.471 117.909 117.156 118.683 116.525C119.457 115.866 119.843 114.863 119.843 113.516C119.843 112.198 119.428 111.195 118.597 110.508C117.795 109.791 116.663 109.433 115.201 109.433C114.399 109.433 113.525 109.576 112.579 109.863C111.662 110.121 110.803 110.465 110 110.894H105.573V92.7559H125.775V98.8594H113.396V104.103C114.571 103.559 115.975 103.287 117.608 103.287ZM137.836 110.937C135.286 110.937 133.28 110.135 131.819 108.53C130.357 106.897 129.627 104.562 129.627 101.524C129.627 98.5442 130.357 96.2518 131.819 94.6471C133.28 93.0424 135.286 92.2401 137.836 92.2401C140.387 92.2401 142.392 93.0568 143.854 94.6901C145.315 96.2948 146.046 98.5872 146.046 101.567C146.046 104.605 145.315 106.926 143.854 108.53C142.392 110.135 140.387 110.937 137.836 110.937ZM137.192 123.359L154.986 92.7559H161.477L143.725 123.359H137.192ZM137.836 106.166C138.524 106.166 139.011 105.837 139.298 105.178C139.584 104.49 139.727 103.287 139.727 101.567C139.727 99.9339 139.57 98.7734 139.255 98.0857C138.939 97.3693 138.467 97.0111 137.836 97.0111C137.206 97.0111 136.733 97.3693 136.418 98.0857C136.131 98.7734 135.988 99.9339 135.988 101.567C135.988 103.258 136.131 104.447 136.418 105.135C136.733 105.823 137.206 106.166 137.836 106.166ZM160.832 123.66C158.282 123.66 156.29 122.858 154.857 121.253C153.425 119.62 152.708 117.285 152.708 114.247C152.708 111.267 153.425 108.975 154.857 107.37C156.29 105.765 158.282 104.963 160.832 104.963C163.411 104.963 165.417 105.765 166.849 107.37C168.282 108.975 168.999 111.281 168.999 114.29C168.999 117.328 168.282 119.649 166.849 121.253C165.417 122.858 163.411 123.66 160.832 123.66ZM160.832 118.889C161.491 118.889 161.964 118.545 162.25 117.858C162.565 117.17 162.723 115.981 162.723 114.29C162.723 112.657 162.565 111.496 162.25 110.809C161.935 110.092 161.462 109.734 160.832 109.734C160.201 109.734 159.729 110.092 159.413 110.809C159.127 111.496 158.984 112.657 158.984 114.29C158.984 115.981 159.127 117.17 159.413 117.858C159.729 118.545 160.201 118.889 160.832 118.889Z"
                    fill="#2B365A"
                  />
                </svg>
              </div>
              <h1 className="text-[#2B365A] hidden md:block font-semibold text-[42px] ">
                Setting up{' '}
              </h1>
              <p className="text-[#2B365A] text-[15px] md:text-[21px] ">
                Preparing your business profile...
              </p>
            </div>
          </div>

          <div className=" items-center  max-w-[500px] w-[600px] relative bg-[#FFFFFF] shadow-2xl text-center p-12 ">
            
            <div className="absolute top-2 right-2 ">
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
                    FindMe App Business information on what the vendor should
                    expect from the platform
                  </p>
                  <div className="relative">
                    <div className="absolute w-full  -bottom-4 md:bottom-0 bg-gradient-to-r from-[#6C63FF] via-[#FC3E06] to-[#FF3D00] h-[3px]"></div>
                    {/* <hr /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
