import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function PhoneRecovery() {
const [selectedValue, setSelectedValue] = useState('option1')

  return (
    <div>
      <section className="p-3">
        <div className=" px-8 md:p-8 md:mx-10  ">
          <Link to="/">
            <svg
              width="26"
              height="26"
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
          <div className="md:hidden">
            <h1 className="text-[#2B365A] font-bold text-[22px] ">
              Account recovery
            </h1>
            <h3 className="text-[#787878] text-[16px] font-semibold ">Phone</h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 items-center w-[80%] m-auto ">
          <div className=" text-center md:p-12  w-1/2 lg:block m-aut ">
            <div className=" md:p-8 px- 28">
              <div className="md:hidden">
                <svg
                  width="272"
                  height="273"
                  viewBox="0 0 272 273"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    clip-path="url(#clip0_1015_73117)"
                    filter="url(#filter0_d_1015_73117)"
                  >
                    <path
                      d="M29.4388 223.366L27.1209 214.225C23.0113 212.483 18.8066 210.974 14.5271 209.706L14.2345 213.955L13.048 209.274C7.7406 207.757 4.12988 207.089 4.12988 207.089C4.12988 207.089 9.00588 225.635 19.2363 239.814L31.1557 241.908L21.8958 243.243C23.1827 244.792 24.5657 246.257 26.0366 247.632C40.9172 261.445 57.4917 267.782 63.0564 261.787C68.621 255.791 61.0689 239.735 46.1882 225.923C41.5751 221.641 35.7801 218.205 29.9791 215.5L29.4388 223.366Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M51.4816 213.437L54.2228 204.414C51.6053 200.799 48.7859 197.334 45.7781 194.036L43.3316 197.522L44.7351 192.902C40.9753 188.861 38.2295 186.423 38.2295 186.423C38.2295 186.423 32.8182 204.82 34.2457 222.246L43.367 230.199L34.7485 226.556C35.05 228.547 35.4765 230.517 36.0254 232.454C41.6243 251.97 52.537 265.963 60.3994 263.707C68.2618 261.451 70.097 243.802 64.4981 224.286C62.7625 218.236 59.5776 212.299 56.01 206.985L51.4816 213.437Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M187.775 63.5306H186.329V23.9219C186.329 20.9113 185.736 17.9302 184.584 15.1488C183.432 12.3673 181.744 9.84008 179.615 7.71126C177.486 5.58245 174.959 3.89377 172.177 2.74167C169.396 1.58956 166.415 0.996582 163.404 0.996582L79.4849 0.996582C73.4047 0.996582 67.5736 3.41192 63.2742 7.71126C58.9749 12.0106 56.5596 17.8417 56.5596 23.9219L56.5596 241.222C56.5596 244.233 57.1525 247.214 58.3047 249.995C59.4568 252.777 61.1454 255.304 63.2742 257.433C65.4031 259.562 67.9303 261.25 70.7118 262.402C73.4932 263.555 76.4743 264.147 79.4849 264.147H163.404C169.484 264.147 175.315 261.732 179.615 257.433C183.914 253.133 186.329 247.302 186.329 241.222V91.7249H187.775L187.775 63.5306Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M164.33 6.95923H153.376C153.88 8.19434 154.072 9.53439 153.936 10.8613C153.8 12.1883 153.34 13.4613 152.595 14.5684C151.851 15.6755 150.846 16.5826 149.669 17.2097C148.492 17.8369 147.178 18.1649 145.845 18.1649H97.7682C96.4344 18.1648 95.1211 17.8367 93.9439 17.2095C92.7667 16.5823 91.7619 15.6752 91.0179 14.5681C90.2738 13.4611 89.8135 12.188 89.6774 10.8611C89.5413 9.53427 89.7335 8.19428 90.2373 6.95923H80.0062C75.4656 6.95923 71.1109 8.76298 67.9002 11.9737C64.6895 15.1844 62.8857 19.539 62.8857 24.0797L62.8857 241.064C62.8857 245.605 64.6895 249.96 67.9002 253.17C71.1109 256.381 75.4656 258.185 80.0062 258.185H164.33C168.87 258.185 173.225 256.381 176.436 253.17C179.646 249.96 181.45 245.605 181.45 241.064V24.0793C181.45 19.5387 179.646 15.1842 176.435 11.9736C173.225 8.76293 168.87 6.95923 164.33 6.95923Z"
                      fill="#F5F5F5"
                    />
                    <path
                      d="M111.423 93.3949C111.422 91.8782 111.822 90.3882 112.58 89.0748C113.339 87.7614 114.43 86.6711 115.744 85.9134C114.431 85.1549 112.941 84.7555 111.424 84.7554C109.908 84.7552 108.418 85.1543 107.104 85.9125C105.791 86.6706 104.7 87.7612 103.942 89.0746C103.183 90.388 102.784 91.8778 102.784 93.3944C102.784 94.911 103.183 96.4008 103.942 97.7142C104.7 99.0275 105.791 100.118 107.104 100.876C108.418 101.634 109.908 102.034 111.424 102.033C112.941 102.033 114.431 101.634 115.744 100.875C114.43 100.118 113.339 99.0277 112.58 97.7145C111.822 96.4013 111.422 94.9115 111.423 93.3949Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M122.283 93.3949C122.283 91.8782 122.682 90.3882 123.44 89.0748C124.199 87.7614 125.29 86.671 126.604 85.9134C125.291 85.1549 123.801 84.7555 122.285 84.7554C120.768 84.7552 119.278 85.1543 117.965 85.9125C116.651 86.6706 115.56 87.7612 114.802 89.0746C114.044 90.388 113.645 91.8778 113.645 93.3944C113.645 94.911 114.044 96.4008 114.802 97.7142C115.56 99.0275 116.651 100.118 117.965 100.876C119.278 101.634 120.768 102.034 122.285 102.033C123.801 102.033 125.291 101.634 126.604 100.875C125.29 100.118 124.199 99.0277 123.441 97.7145C122.682 96.4013 122.283 94.9115 122.283 93.3949Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M132.897 102.033C137.668 102.033 141.536 98.1656 141.536 93.3944C141.536 88.6232 137.668 84.7554 132.897 84.7554C128.126 84.7554 124.258 88.6232 124.258 93.3944C124.258 98.1656 128.126 102.033 132.897 102.033Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M147.335 120.377H96.9848C96.5054 120.377 96.0459 120.186 95.7069 119.847C95.368 119.508 95.1773 119.049 95.1768 118.569V68.2194C95.1773 67.74 95.368 67.2805 95.7069 66.9415C96.0459 66.6026 96.5054 66.4119 96.9848 66.4114H147.335C147.814 66.4119 148.274 66.6026 148.613 66.9415C148.952 67.2805 149.142 67.74 149.143 68.2194V118.569C149.142 119.049 148.952 119.508 148.613 119.847C148.274 120.186 147.814 120.377 147.335 120.377ZM96.9848 67.135C96.6972 67.1353 96.4214 67.2497 96.2181 67.453C96.0147 67.6564 95.9003 67.9321 95.9 68.2197V118.57C95.9003 118.857 96.0147 119.133 96.2181 119.336C96.4214 119.54 96.6972 119.654 96.9848 119.655H147.335C147.622 119.654 147.898 119.54 148.102 119.336C148.305 119.133 148.419 118.857 148.42 118.57V68.2197C148.419 67.9321 148.305 67.6564 148.102 67.453C147.898 67.2497 147.622 67.1353 147.335 67.135H96.9848Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M158.577 158.974H81.3555V159.697H158.577V158.974Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M83.7942 154.457C85.141 154.457 86.2329 153.365 86.2329 152.018C86.2329 150.671 85.141 149.58 83.7942 149.58C82.4473 149.58 81.3555 150.671 81.3555 152.018C81.3555 153.365 82.4473 154.457 83.7942 154.457Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M158.577 183.359H81.3555V184.083H158.577V183.359Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M83.7942 178.843C85.141 178.843 86.2329 177.752 86.2329 176.405C86.2329 175.058 85.141 173.966 83.7942 173.966C82.4473 173.966 81.3555 175.058 81.3555 176.405C81.3555 177.752 82.4473 178.843 83.7942 178.843Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M157.164 211.128H132.76C132.338 211.127 131.934 210.96 131.636 210.662C131.338 210.364 131.17 209.959 131.17 209.538V200.984C131.17 200.563 131.338 200.159 131.636 199.86C131.934 199.562 132.338 199.395 132.76 199.394H157.164C157.586 199.395 157.99 199.562 158.288 199.86C158.586 200.159 158.754 200.563 158.754 200.984V209.538C158.754 209.959 158.586 210.364 158.288 210.662C157.99 210.96 157.586 211.127 157.164 211.128Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M91.7493 154.457C93.0961 154.457 94.188 153.365 94.188 152.018C94.188 150.671 93.0961 149.58 91.7493 149.58C90.4024 149.58 89.3105 150.671 89.3105 152.018C89.3105 153.365 90.4024 154.457 91.7493 154.457Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M99.7034 154.457C101.05 154.457 102.142 153.365 102.142 152.018C102.142 150.671 101.05 149.58 99.7034 149.58C98.3565 149.58 97.2646 150.671 97.2646 152.018C97.2646 153.365 98.3565 154.457 99.7034 154.457Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M91.7493 178.843C93.0961 178.843 94.188 177.752 94.188 176.405C94.188 175.058 93.0961 173.966 91.7493 173.966C90.4024 173.966 89.3105 175.058 89.3105 176.405C89.3105 177.752 90.4024 178.843 91.7493 178.843Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M99.7034 178.843C101.05 178.843 102.142 177.752 102.142 176.405C102.142 175.058 101.05 173.966 99.7034 173.966C98.3565 173.966 97.2646 175.058 97.2646 176.405C97.2646 177.752 98.3565 178.843 99.7034 178.843Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M266.327 264.965H12.6383C12.0952 264.965 11.6553 264.772 11.6553 264.535C11.6553 264.298 12.0952 264.104 12.6383 264.104H266.327C266.87 264.104 267.31 264.297 267.31 264.535C267.31 264.773 266.87 264.965 266.327 264.965Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M203.649 173.941C203.822 174.02 203.989 174.113 204.147 174.219L219.995 167.455L220.561 163.28L226.893 163.241L226.519 172.816L205.602 178.348C205.558 178.493 205.505 178.636 205.443 178.775C205.141 179.42 204.655 179.962 204.045 180.332C203.436 180.701 202.731 180.883 202.019 180.853C201.307 180.824 200.62 180.585 200.043 180.166C199.467 179.747 199.027 179.167 198.779 178.499C198.531 177.831 198.486 177.104 198.649 176.411C198.813 175.717 199.177 175.087 199.698 174.6C200.218 174.113 200.871 173.791 201.574 173.673C202.276 173.556 202.998 173.649 203.649 173.941Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M229.196 260.704H224.864L222.804 243.996L229.197 243.996L229.196 260.704Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M221.77 259.467H230.124V264.727H216.51C216.51 263.332 217.064 261.994 218.05 261.007C219.037 260.021 220.375 259.467 221.77 259.467Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M246.043 259.48L241.732 259.905L238.043 243.479L244.405 242.852L246.043 259.48Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M238.532 258.977L246.846 258.158L247.361 263.393L233.812 264.727C233.745 264.04 233.813 263.346 234.014 262.685C234.214 262.024 234.543 261.409 234.981 260.875C235.419 260.341 235.958 259.898 236.568 259.573C237.177 259.247 237.844 259.045 238.532 258.977Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M230.402 145.558C235.195 145.558 239.08 141.673 239.08 136.88C239.08 132.087 235.195 128.201 230.402 128.201C225.609 128.201 221.724 132.087 221.724 136.88C221.724 141.673 225.609 145.558 230.402 145.558Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M223.897 257.326C223.525 257.327 223.164 257.197 222.878 256.958C222.593 256.719 222.401 256.387 222.337 256.02C220.095 243.574 212.766 202.877 212.59 201.75C212.587 201.724 212.585 201.697 212.585 201.671V198.637C212.585 198.526 212.619 198.418 212.684 198.329L213.652 196.973C213.698 196.907 213.758 196.854 213.828 196.815C213.898 196.777 213.976 196.755 214.056 196.752C219.576 196.493 237.653 195.735 238.526 196.826C239.403 197.922 239.094 201.245 239.023 201.9L239.026 201.968L247.147 253.906C247.211 254.321 247.109 254.743 246.863 255.083C246.618 255.422 246.248 255.651 245.835 255.721L240.762 256.556C240.385 256.617 239.997 256.54 239.672 256.34C239.346 256.139 239.103 255.828 238.987 255.464C237.418 250.45 232.157 233.586 230.334 227.06C230.322 227.019 230.296 226.983 230.26 226.96C230.225 226.936 230.181 226.926 230.139 226.932C230.097 226.938 230.058 226.96 230.03 226.992C230.002 227.025 229.987 227.066 229.987 227.109C230.078 233.33 230.299 249.201 230.374 254.682L230.383 255.273C230.386 255.672 230.239 256.059 229.972 256.356C229.704 256.652 229.335 256.838 228.937 256.875L224.045 257.32C223.996 257.324 223.946 257.326 223.897 257.326Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M224.895 148.971C223.38 149.871 222.474 151.526 221.954 153.209C220.991 156.326 220.412 159.549 220.228 162.806L219.678 172.558L212.875 198.411C218.772 203.401 222.173 202.267 230.111 198.186C238.048 194.104 238.956 199.546 238.956 199.546L240.543 177.548L242.811 153.51C242.302 152.897 241.725 152.343 241.093 151.859C238.997 150.229 236.558 149.096 233.96 148.545C231.363 147.995 228.674 148.041 226.097 148.68L224.895 148.971Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M222.685 179.163C222.868 179.231 223.045 179.314 223.215 179.411L238.885 171.568L239.145 167.319L245.609 166.874L245.955 176.559L225.015 183.484C224.844 184.218 224.453 184.882 223.896 185.388C223.338 185.894 222.64 186.219 221.893 186.318C221.147 186.418 220.388 186.288 219.717 185.946C219.046 185.603 218.496 185.065 218.138 184.402C217.781 183.739 217.634 182.983 217.717 182.235C217.8 181.486 218.108 180.781 218.602 180.212C219.095 179.643 219.75 179.238 220.48 179.051C221.209 178.863 221.978 178.902 222.685 179.163Z"
                      fill="#FFB8B8"
                    />
                    <path
                      d="M242.697 153.62C246.553 154.981 247.232 169.723 247.232 169.723C242.696 167.228 237.253 171.31 237.253 171.31C237.253 171.31 236.119 167.455 234.758 162.466C234.347 161.062 234.298 159.578 234.616 158.15C234.933 156.723 235.606 155.399 236.573 154.301C236.573 154.301 238.842 152.258 242.697 153.62Z"
                      fill="#2B365A"
                    />
                    <path
                      d="M238.184 139.175C237.103 138.31 235.627 139.882 235.627 139.882L234.762 132.097C234.762 132.097 229.356 132.745 225.896 131.881C222.436 131.017 221.895 135.017 221.895 135.017C221.717 133.401 221.681 131.773 221.787 130.151C222.003 128.205 224.815 126.259 229.788 124.961C234.762 123.663 237.357 129.286 237.357 129.286C240.818 131.016 239.265 140.04 238.184 139.175Z"
                      fill="#2F2E41"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1015_73117"
                      x="0.129883"
                      y="0.996338"
                      width="271.18"
                      height="271.968"
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
                        result="effect1_dropShadow_1015_73117"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1015_73117"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1015_73117">
                      <rect
                        width="263.18"
                        height="263.967"
                        fill="white"
                        transform="translate(4.12988 0.996338)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="hidden md:block">
                <svg
                  width="409"
                  height="395"
                  viewBox="0 0 409 395"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.332 332.751L35.7298 319.072C29.3431 316.465 22.8088 314.208 16.158 312.31L15.7034 318.668L13.8595 311.664C5.61132 309.393 0 308.395 0 308.395C0 308.395 7.57767 336.147 23.4765 357.363L42.0001 360.497L27.6096 362.495C29.6095 364.812 31.7588 367.005 34.0446 369.062C57.1703 389.731 82.9283 399.215 91.5762 390.243C100.224 381.272 88.4875 357.244 65.3619 336.578C58.1927 330.17 49.1868 325.028 40.1716 320.98L39.332 332.751Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M73.5903 317.893L77.8503 304.391C73.7824 298.981 69.4009 293.796 64.7266 288.862L60.9246 294.077L63.1057 287.164C57.2626 281.117 52.9955 277.47 52.9955 277.47C52.9955 277.47 44.5859 304.999 46.8043 331.074L60.9795 342.975L47.5857 337.523C48.0544 340.503 48.7172 343.451 49.5702 346.35C58.2713 375.553 75.2305 396.491 87.4492 393.116C99.6679 389.741 102.52 363.33 93.8189 334.127C91.1217 325.073 86.172 316.189 80.6277 308.238L73.5903 317.893Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M285.4 93.5752H283.153V34.3052C283.153 29.8002 282.231 25.3393 280.441 21.1772C278.65 17.0151 276.026 13.2333 272.717 10.0478C269.409 6.86223 265.482 4.33532 261.159 2.61133C256.836 0.887328 252.204 0 247.525 0L117.108 0C107.659 0 98.5971 3.61429 91.9156 10.0478C85.2341 16.4812 81.4805 25.2069 81.4805 34.3052L81.4805 359.471C81.4805 363.976 82.402 368.437 84.1925 372.599C85.9829 376.761 88.6072 380.543 91.9156 383.728C95.2239 386.914 99.1515 389.441 103.474 391.165C107.797 392.889 112.429 393.776 117.108 393.776H247.525C256.974 393.776 266.036 390.161 272.717 383.728C279.399 377.294 283.152 368.569 283.152 359.471V135.765H285.399L285.4 93.5752Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M248.962 8.92188H231.94C232.722 10.7701 233.021 12.7753 232.81 14.7609C232.598 16.7465 231.883 18.6516 230.726 20.3082C229.57 21.9648 228.008 23.3221 226.179 24.2606C224.349 25.1991 222.308 25.6899 220.235 25.6898L145.521 25.6898C143.448 25.6897 141.407 25.1988 139.577 24.2602C137.748 23.3217 136.186 21.9643 135.03 20.3077C133.874 18.6511 133.158 16.7462 132.947 14.7607C132.735 12.7751 133.034 10.77 133.817 8.92188L117.917 8.92188C110.861 8.92188 104.093 11.621 99.1034 16.4254C94.1137 21.2299 91.3105 27.7462 91.3105 34.5407L91.3105 359.234C91.3105 366.028 94.1137 372.545 99.1034 377.349C104.093 382.154 110.861 384.853 117.917 384.853H248.962C256.018 384.853 262.786 382.154 267.775 377.349C272.765 372.545 275.568 366.028 275.568 359.234V34.5401C275.568 27.7457 272.765 21.2296 267.775 16.4253C262.786 11.6209 256.018 8.92187 248.962 8.92188Z"
                    fill="#F5F5F5"
                  />
                  <path
                    d="M166.742 138.263C166.742 135.993 167.362 133.764 168.541 131.799C169.72 129.833 171.416 128.202 173.458 127.068C171.417 125.933 169.101 125.335 166.745 125.335C164.388 125.335 162.072 125.932 160.031 127.066C157.99 128.201 156.295 129.833 155.116 131.798C153.938 133.763 153.317 135.993 153.317 138.262C153.317 140.532 153.938 142.761 155.116 144.726C156.295 146.692 157.99 148.324 160.031 149.458C162.072 150.593 164.388 151.19 166.745 151.19C169.101 151.189 171.417 150.592 173.458 149.457C171.416 148.323 169.72 146.692 168.541 144.727C167.362 142.762 166.742 140.532 166.742 138.263Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M183.616 138.263C183.616 135.993 184.236 133.764 185.415 131.798C186.594 129.833 188.29 128.202 190.332 127.068C188.291 125.933 185.975 125.335 183.619 125.335C181.262 125.335 178.946 125.932 176.905 127.066C174.864 128.201 173.169 129.833 171.99 131.798C170.812 133.763 170.191 135.993 170.191 138.262C170.191 140.532 170.812 142.761 171.99 144.726C173.169 146.692 174.864 148.324 176.905 149.458C178.946 150.593 181.262 151.19 183.619 151.19C185.975 151.189 188.291 150.592 190.332 149.457C188.29 148.323 186.594 146.692 185.415 144.727C184.236 142.762 183.616 140.532 183.616 138.263Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M200.113 151.19C207.528 151.19 213.539 145.402 213.539 138.262C213.539 131.123 207.528 125.335 200.113 125.335C192.698 125.335 186.688 131.123 186.688 138.262C186.688 145.402 192.698 151.19 200.113 151.19Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M222.55 178.64H144.302C143.557 178.639 142.843 178.354 142.316 177.847C141.789 177.339 141.493 176.652 141.492 175.934V100.591C141.493 99.8739 141.789 99.1863 142.316 98.6791C142.843 98.1719 143.557 97.8866 144.302 97.8857H222.55C223.295 97.8866 224.009 98.1719 224.536 98.6791C225.062 99.1863 225.359 99.8739 225.359 100.591V175.934C225.359 176.652 225.062 177.339 224.536 177.847C224.009 178.354 223.295 178.639 222.55 178.64ZM144.302 98.9686C143.855 98.969 143.426 99.1401 143.11 99.4445C142.794 99.7488 142.617 100.161 142.616 100.592V175.935C142.617 176.365 142.794 176.778 143.11 177.082C143.426 177.387 143.855 177.558 144.302 177.558H222.55C222.997 177.558 223.425 177.387 223.741 177.082C224.057 176.778 224.235 176.365 224.235 175.935V100.592C224.235 100.161 224.057 99.7488 223.741 99.4445C223.425 99.1401 222.997 98.969 222.55 98.9686H144.302Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M240.019 236.396H120.011V237.478H240.019V236.396Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M123.801 229.635C125.894 229.635 127.591 228.002 127.591 225.986C127.591 223.971 125.894 222.337 123.801 222.337C121.708 222.337 120.011 223.971 120.011 225.986C120.011 228.002 121.708 229.635 123.801 229.635Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M240.019 272.886H120.011V273.968H240.019V272.886Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M123.801 266.128C125.894 266.128 127.591 264.494 127.591 262.478C127.591 260.463 125.894 258.829 123.801 258.829C121.708 258.829 120.011 260.463 120.011 262.478C120.011 264.494 121.708 266.128 123.801 266.128Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M237.826 314.439H199.9C199.245 314.438 198.616 314.187 198.153 313.741C197.69 313.295 197.429 312.69 197.429 312.059V299.26C197.429 298.629 197.69 298.025 198.153 297.578C198.616 297.132 199.245 296.882 199.9 296.881H237.826C238.481 296.882 239.109 297.132 239.572 297.578C240.035 298.025 240.296 298.629 240.297 299.26V312.059C240.296 312.69 240.035 313.295 239.572 313.741C239.109 314.187 238.481 314.438 237.826 314.439Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M136.166 229.635C138.259 229.635 139.956 228.002 139.956 225.986C139.956 223.971 138.259 222.337 136.166 222.337C134.073 222.337 132.376 223.971 132.376 225.986C132.376 228.002 134.073 229.635 136.166 229.635Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M148.527 229.635C150.62 229.635 152.317 228.002 152.317 225.986C152.317 223.971 150.62 222.337 148.527 222.337C146.434 222.337 144.737 223.971 144.737 225.986C144.737 228.002 146.434 229.635 148.527 229.635Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M136.166 266.128C138.259 266.128 139.956 264.494 139.956 262.478C139.956 260.463 138.259 258.829 136.166 258.829C134.073 258.829 132.376 260.463 132.376 262.478C132.376 264.494 134.073 266.128 136.166 266.128Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M148.527 266.128C150.62 266.128 152.317 264.494 152.317 262.478C152.317 260.463 150.62 258.829 148.527 258.829C146.434 258.829 144.737 260.463 144.737 262.478C144.737 264.494 146.434 266.128 148.527 266.128Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M407.471 394.999H13.22C12.376 394.999 11.6924 394.711 11.6924 394.355C11.6924 394 12.376 393.711 13.22 393.711H407.471C408.315 393.711 408.999 394 408.999 394.355C408.999 394.711 408.315 394.999 407.471 394.999Z"
                    fill="#3F3D56"
                  />
                  <path
                    d="M310.067 258.791C310.336 258.91 310.595 259.049 310.842 259.208L335.47 249.086L336.349 242.839L346.19 242.781L345.609 257.109L313.102 265.386C313.033 265.604 312.951 265.817 312.856 266.025C312.386 266.991 311.63 267.801 310.684 268.355C309.737 268.908 308.641 269.18 307.535 269.136C306.428 269.091 305.36 268.733 304.464 268.107C303.568 267.48 302.884 266.612 302.499 265.612C302.113 264.613 302.043 263.525 302.297 262.487C302.551 261.45 303.118 260.507 303.927 259.778C304.736 259.049 305.75 258.567 306.842 258.391C307.934 258.216 309.056 258.355 310.067 258.791Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M349.767 388.623H343.035L339.833 363.621L349.769 363.622L349.767 388.623Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M338.231 386.771H351.214V394.643H330.057C330.057 392.555 330.918 390.553 332.451 389.077C333.984 387.601 336.063 386.771 338.231 386.771Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M375.949 386.791L369.25 387.426L363.517 362.847L373.404 361.909L375.949 386.791Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M364.282 386.038L377.202 384.813L378.003 392.646L356.948 394.643C356.843 393.614 356.949 392.576 357.26 391.586C357.572 390.597 358.083 389.677 358.764 388.878C359.445 388.079 360.283 387.417 361.229 386.93C362.176 386.442 363.213 386.139 364.282 386.038Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M351.644 216.32C359.092 216.32 365.13 210.506 365.13 203.334C365.13 196.162 359.092 190.348 351.644 190.348C344.195 190.348 338.157 196.162 338.157 203.334C338.157 210.506 344.195 216.32 351.644 216.32Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M341.536 383.569C340.957 383.571 340.397 383.375 339.953 383.018C339.509 382.66 339.211 382.163 339.111 381.614C335.627 362.99 324.237 302.091 323.965 300.405C323.959 300.366 323.956 300.327 323.956 300.287V295.747C323.956 295.581 324.009 295.42 324.109 295.286L325.614 293.257C325.686 293.159 325.779 293.078 325.888 293.021C325.997 292.964 326.118 292.931 326.242 292.926C334.82 292.539 362.914 291.404 364.271 293.037C365.634 294.677 365.153 299.649 365.042 300.629L365.047 300.731L377.669 378.451C377.768 379.071 377.609 379.704 377.227 380.212C376.845 380.72 376.271 381.063 375.629 381.166L367.746 382.417C367.159 382.508 366.557 382.393 366.051 382.092C365.544 381.792 365.167 381.327 364.986 380.782C362.548 373.28 354.373 348.044 351.539 338.279C351.521 338.217 351.481 338.164 351.425 338.129C351.369 338.093 351.302 338.079 351.236 338.088C351.17 338.097 351.11 338.129 351.067 338.177C351.023 338.226 351 338.288 351.001 338.353C351.142 347.661 351.484 371.41 351.602 379.613L351.615 380.496C351.62 381.094 351.392 381.672 350.976 382.116C350.56 382.561 349.986 382.838 349.368 382.894L341.766 383.559C341.689 383.566 341.612 383.569 341.536 383.569Z"
                    fill="#2F2E41"
                  />
                  <path
                    d="M343.08 221.428C340.726 222.775 339.318 225.251 338.51 227.77C337.013 232.434 336.113 237.256 335.828 242.13L334.973 256.723L324.4 295.409C333.564 302.875 338.85 301.179 351.186 295.072C363.522 288.965 364.931 297.108 364.931 297.108L367.398 264.19L370.923 228.22C370.132 227.303 369.236 226.474 368.253 225.749C364.996 223.309 361.205 221.614 357.168 220.79C353.131 219.966 348.953 220.036 344.948 220.993L343.08 221.428Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M339.65 266.606C339.935 266.709 340.21 266.833 340.474 266.978L364.826 255.242L365.23 248.884L375.276 248.217L375.814 262.711L343.271 273.073C343.005 274.171 342.399 275.164 341.532 275.922C340.666 276.679 339.58 277.165 338.42 277.314C337.26 277.463 336.08 277.268 335.038 276.756C333.996 276.244 333.14 275.438 332.585 274.446C332.029 273.454 331.801 272.323 331.929 271.203C332.058 270.083 332.538 269.027 333.305 268.176C334.072 267.325 335.09 266.719 336.223 266.438C337.357 266.158 338.552 266.216 339.65 266.606Z"
                    fill="#FFB8B8"
                  />
                  <path
                    d="M370.751 228.384C376.743 230.42 377.798 252.48 377.798 252.48C370.749 248.747 362.291 254.855 362.291 254.855C362.291 254.855 360.528 249.086 358.414 241.62C357.775 239.52 357.699 237.299 358.192 235.163C358.685 233.027 359.731 231.045 361.233 229.403C361.233 229.403 364.76 226.346 370.751 228.384Z"
                    fill="#2B365A"
                  />
                  <path
                    d="M363.737 206.769C362.057 205.474 359.764 207.827 359.764 207.827L358.42 196.177C358.42 196.177 350.018 197.147 344.641 195.854C339.264 194.562 338.424 200.547 338.424 200.547C338.146 198.129 338.09 195.693 338.256 193.266C338.592 190.353 342.961 187.441 350.69 185.499C358.42 183.557 362.453 191.971 362.453 191.971C367.83 194.56 365.418 208.063 363.737 206.769Z"
                    fill="#2F2E41"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" items-center  md:shadow-2xl text-center md:p-12 ">
            <div className="text-center">
              <div className="hidden md:block ">
                <h1 className="text-[#2B365A] font-bold text-[32px] ">
                  Account recovery
                </h1>
                <h3 className="text-[#787878] text-[22px] font-semibold ">
                  Phone
                </h3>
                <p className="text-[#2B365A]  text-[16px] font-medium ">
                  Recover account using Phone number
                </p>
              </div>

              <div className="  md:py-6">
                <div className="flex justify-around items-center py-6">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="option1"
                      name="radioGroup"
                      value="option1"
                      checked={selectedValue === 'option1'}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      className="hidden"
                    />
                    <label
                      htmlFor="option1"
                      className={`inline-flex items-center  justify-center w-4 h-4 mr-2 rounded-full border ${
                        selectedValue === 'option1'
                          ? 'bg-[#2B365A] border-[#727272] font-medium text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      <span className="sr-only">Text</span>
                    </label>
                    <span className="text-[#2B365A] font-medium text-[14px]">
                      Text
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <input
                      type="radio"
                      id="option2"
                      name="radioGroup"
                      value="option2"
                      checked={selectedValue === 'option2'}
                      onChange={(e) => setSelectedValue(e.target.value)}
                      className="hidden"
                    />
                    <label
                      htmlFor="option2"
                      className={`inline-flex items-center font-medium justify-center w-4 h-4 mr-2 rounded-full border ${
                        selectedValue === 'option2'
                          ? 'bg-[#2B365A] border-[#727272] font-medium text-white'
                          : 'border-gray-300'
                      }`}
                    >
                      <span className="sr-only">Call</span>
                    </label>
                    <span className="text-[#2B365A] font-medium text-[14px]">
                      Call
                    </span>
                  </div>
                </div>
              </div>

              <div className=" ">
                <div className="p-">
                  <form>
                    <div className="mb-4">
                      <input
                        className="appearance-none border rounded-md w-full md:w-[370px] p-4 px-3 text-[#011F32] leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="phone"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="pt-6">
                      <button className="bg-[#2B365A] text-white font-bold border-2 border-[#2B365A] p-3 rounded-[8px] md:w-full w-[281px] ">
                        <Link to="/forget-password">Recover</Link>
                      </button>
                    </div>
                  </form>
                  <div className=" block md:px-4  md:">
                    <div className="py-4 block md:hidde">
                      <Link
                        to="/login"
                        className="text-[#2B365A] text-center m-auto font-semibold text-[16px] py-2  "
                      >
                        Try another way
                      </Link>
                    </div>
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
