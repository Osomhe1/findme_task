import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function EmailRecovery() {
  // const [selectedValue, setSelectedValue] = useState('option1')

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
          <div className="md:hidden mb-4">
            <h1 className="text-[#2B365A] font-bold text-[22px] ">
              Account recovery
            </h1>
            <h3 className="text-[#787878] text-[16px] font-semibold ">
              {' '}
              Email
            </h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-2 items-center w-[80%] m-auto ">
          <div className=" text-center md:p-12  w-1/2 lg:block m-aut ">
            <div className=" md:p-8 px- 28">
              <div className="md:hidden">
                <svg
                  width="264"
                  height="182"
                  viewBox="0 0 264 182"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2320_14818)">
                    <path
                      d="M94.6969 104.742C103.744 88.2322 121.002 75.5555 139.271 76.7767C125.795 91.9783 117.937 111.635 117.087 132.268C116.787 140.226 117.253 149.111 112.159 155.07C108.989 158.778 104.144 160.574 99.381 160.951C94.6174 161.327 89.8549 160.435 85.1549 159.546L84.0148 159.909C83.5807 140.923 85.6495 121.252 94.6969 104.742Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M139.298 77.1743C125.788 83.9208 114.269 95.1882 107.197 108.93C105.669 111.9 104.367 115.052 103.799 118.385C103.231 121.718 103.628 124.892 104.726 128.059C105.729 130.953 107.079 133.794 107.387 136.891C107.711 140.156 106.553 143.209 104.468 145.632C101.918 148.596 98.4927 150.433 95.0831 152.109C91.2973 153.969 87.3366 155.839 84.6552 159.311C84.3303 159.732 83.72 159.185 84.0444 158.764C88.7096 152.723 96.6952 151.588 102.233 146.721C104.817 144.451 106.757 141.358 106.634 137.735C106.527 134.567 105.138 131.636 104.097 128.714C103.005 125.646 102.46 122.561 102.852 119.29C103.253 115.944 104.438 112.733 105.887 109.735C109.155 102.972 113.627 96.7643 118.749 91.3978C124.637 85.2291 131.498 80.1507 139.037 76.3822C139.503 76.1492 139.762 76.9427 139.298 77.1743Z"
                      fill="white"
                    />
                    <path
                      d="M109.27 104.338C107.199 102.767 105.734 100.483 105.136 97.895C104.538 95.3067 104.846 92.5823 106.006 90.2082C106.242 89.7287 106.972 90.087 106.735 90.5672C105.651 92.7758 105.364 95.3137 105.926 97.7227C106.487 100.132 107.86 102.253 109.797 103.704C110.218 104.02 109.688 104.652 109.27 104.338Z"
                      fill="white"
                    />
                    <path
                      d="M104.031 126.661C109.22 125.875 113.933 123.088 117.23 118.857C117.557 118.437 118.167 118.984 117.841 119.403C114.402 123.8 109.492 126.69 104.09 127.496C103.575 127.573 103.519 126.737 104.031 126.661V126.661Z"
                      fill="white"
                    />
                    <path
                      d="M125.037 86.259C125.716 87.0401 126.572 87.6339 127.527 87.9872C128.482 88.3404 129.507 88.442 130.509 88.2829C131.023 88.1997 131.079 89.035 130.568 89.1176C129.46 89.2881 128.328 89.1744 127.272 88.7866C126.216 88.3987 125.268 87.7485 124.51 86.8926C124.432 86.8182 124.384 86.7157 124.376 86.6061C124.368 86.4964 124.401 86.3879 124.468 86.3024C124.538 86.2189 124.637 86.1674 124.744 86.1593C124.85 86.1512 124.956 86.1871 125.037 86.259Z"
                      fill="white"
                    />
                    <path
                      d="M175.621 128.859C175.302 128.921 174.982 128.982 174.66 129.05C170.37 129.899 166.154 131.108 162.053 132.665C161.734 132.78 161.413 132.902 161.098 133.026C151.256 136.887 142.191 142.61 134.363 149.904C131.251 152.809 128.356 155.956 125.704 159.317C122.042 163.958 118.427 169.293 113.641 172.32C113.145 172.641 112.631 172.931 112.1 173.186L84.5305 161.324C84.4809 161.264 84.4284 161.211 84.3785 161.151L83.2568 160.73C83.3819 160.547 83.5155 160.359 83.6406 160.176C83.7128 160.07 83.791 159.966 83.8632 159.859C83.9132 159.789 83.9636 159.719 84.0049 159.652C84.0215 159.629 84.0383 159.605 84.0523 159.589C84.0936 159.522 84.1388 159.465 84.1774 159.405C84.9212 158.356 85.6733 157.311 86.4339 156.269C86.4365 156.263 86.4365 156.263 86.4452 156.259C92.2597 148.337 98.7629 140.849 106.155 134.623C106.377 134.436 106.602 134.242 106.837 134.06C110.184 131.273 113.745 128.774 117.485 126.589C119.536 125.399 121.644 124.317 123.801 123.349C129.378 120.857 135.298 119.29 141.345 118.707C153.398 117.546 165.676 120.397 174.921 128.252C175.157 128.453 175.387 128.652 175.621 128.859Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M175.414 129.196C160.711 126.145 144.974 127.947 131.353 134.502C128.408 135.919 125.539 137.623 123.152 139.929C120.763 142.236 119.238 145.018 118.277 148.232C117.398 151.17 116.827 154.281 115.275 156.946C113.639 159.755 110.943 161.469 107.872 162.102C104.115 162.876 100.314 162.203 96.6193 161.412C92.5168 160.533 88.2689 159.552 84.1127 160.65C83.6092 160.783 83.4397 159.965 83.9425 159.832C91.1736 157.922 98.2088 162.003 105.455 161.576C108.836 161.377 112.179 160.119 114.185 157.15C115.938 154.553 116.53 151.346 117.395 148.363C118.303 145.231 119.658 142.427 121.87 140.06C124.132 137.639 126.942 135.815 129.839 134.326C136.373 130.968 143.547 128.804 150.751 127.719C159.033 126.471 167.458 126.701 175.665 128.4C176.172 128.506 175.918 129.301 175.414 129.196V129.196Z"
                      fill="white"
                    />
                    <path
                      d="M135.671 132.127C134.929 129.58 135.084 126.841 136.109 124.401C137.134 121.961 138.962 119.979 141.265 118.807C141.732 118.572 142.107 119.314 141.639 119.549C139.492 120.636 137.79 122.483 136.84 124.757C135.89 127.031 135.755 129.583 136.46 131.951C136.612 132.466 135.823 132.639 135.671 132.127Z"
                      fill="white"
                    />
                    <path
                      d="M118.534 146.681C123.134 149.295 128.514 150.013 133.603 148.694C134.107 148.563 134.276 149.381 133.773 149.512C128.476 150.875 122.878 150.115 118.096 147.385C117.641 147.124 118.081 146.422 118.534 146.681Z"
                      fill="white"
                    />
                    <path
                      d="M158.753 127.543C158.842 128.591 159.18 129.599 159.738 130.478C160.295 131.356 161.055 132.077 161.947 132.576C162.406 132.831 161.965 133.533 161.51 133.28C160.526 132.724 159.689 131.926 159.07 130.957C158.452 129.988 158.072 128.876 157.964 127.719C157.945 127.611 157.966 127.5 158.024 127.407C158.081 127.315 158.17 127.249 158.273 127.222C158.378 127.199 158.487 127.22 158.576 127.28C158.666 127.34 158.729 127.434 158.753 127.543Z"
                      fill="white"
                    />
                    <path
                      d="M123.103 148.431C119.242 129.065 114.415 122.608 114.415 122.608L112.571 121.125L110.354 119.339L110.365 119.109L109.839 118.923L109.715 118.824L109.513 118.663L109.48 118.699L109.412 118.773L99.3782 115.235L86.6491 110.75L80.7546 102.802C79.7946 101.507 78.5587 100.461 77.1437 99.7453C75.7287 99.0293 74.1731 98.663 72.5988 98.6751L53.7739 98.8196C51.2286 98.8391 48.7824 99.8457 46.9162 101.641L34.5428 113.547L15.2629 123.099L15.2303 123.065L15.0279 123.215L12.0489 124.693L12.1719 125.357L10.3281 126.737C10.3281 126.737 5.50176 132.745 1.64069 150.765C0.658481 155.35 0.175001 165.186 0.000490411 177.306C-0.00827524 177.919 0.100546 178.528 0.320624 179.097C0.540703 179.666 0.867649 180.184 1.28245 180.621C1.69725 181.058 2.19164 181.405 2.73686 181.642C3.28208 181.879 3.86725 182.001 4.45836 182.001H107.437V182.001H120.29C120.88 182.001 121.465 181.879 122.01 181.642C122.555 181.405 123.049 181.059 123.464 180.622C123.878 180.186 124.205 179.669 124.426 179.1C124.646 178.532 124.756 177.923 124.748 177.311C124.577 164.122 124.094 153.404 123.103 148.431Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M112.315 2.88867C108.309 2.88867 104.467 4.53968 101.634 7.4785C98.8005 10.4173 97.209 14.4032 97.209 18.5593C97.209 22.7154 98.8005 26.7013 101.634 29.6401C104.467 32.579 108.309 34.23 112.315 34.23H224.894C228.9 34.23 232.743 32.579 235.576 29.6401C238.409 26.7013 240 22.7154 240 18.5593C240 14.4032 238.409 10.4173 235.576 7.4785C232.743 4.53968 228.9 2.88867 224.894 2.88867H112.315Z"
                      fill="#E5E5E5"
                    />
                    <path
                      d="M107.315 5.05957C104.119 5.05957 101.054 6.37645 98.7947 8.7205C96.5351 11.0646 95.2656 14.2438 95.2656 17.5588C95.2656 20.8738 96.5351 24.053 98.7947 26.3971C101.054 28.7411 104.119 30.058 107.315 30.058H219.893C223.089 30.058 226.154 28.7411 228.413 26.3971C230.673 24.053 231.942 20.8738 231.942 17.5588C231.942 14.2438 230.673 11.0646 228.413 8.7205C226.154 6.37645 223.089 5.05957 219.893 5.05957H107.315Z"
                      fill="white"
                    />
                    <path
                      d="M66.1429 91.3373C79.7636 91.3373 90.8053 79.8831 90.8053 65.7536C90.8053 51.6241 79.7636 40.1699 66.1429 40.1699C52.5222 40.1699 41.4805 51.6241 41.4805 65.7536C41.4805 79.8831 52.5222 91.3373 66.1429 91.3373Z"
                      fill="#9E616A"
                    />
                    <path
                      d="M59.8338 90.0838C59.7284 89.8431 59.6233 89.6017 59.5186 89.3594C59.5589 89.3607 59.5989 89.3667 59.6393 89.3678L59.8338 90.0838Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M40.7943 41.3333C42.0417 40.3011 43.4995 39.3513 45.0944 39.4047C46.6891 39.458 48.3063 40.9522 47.9759 42.5715C50.9052 37.1912 55.5677 33.0532 61.1451 30.8837C66.7225 28.7142 72.8583 28.6519 78.4756 30.7078C82.4393 32.1584 86.3263 35.0606 87.2368 39.3172C87.4705 40.4099 87.5207 41.608 88.1784 42.4953C89.0076 43.614 90.5942 43.8671 91.9006 43.4735C91.9137 43.4696 91.9267 43.4656 91.9397 43.4616C92.1604 43.3834 92.3987 43.3757 92.6236 43.4395C92.8486 43.5033 93.0499 43.6357 93.2016 43.8194C93.3532 44.0032 93.4482 44.23 93.4743 44.4704C93.5003 44.7108 93.4563 44.9538 93.3477 45.1679L92.2262 47.3377C93.64 47.6646 95.1089 47.6322 96.508 47.2432C96.7404 47.18 96.986 47.1929 97.2111 47.2802C97.4361 47.3675 97.6296 47.5248 97.7651 47.7307C97.9005 47.9366 97.9712 48.1809 97.9675 48.4301C97.9638 48.6793 97.8858 48.9213 97.7443 49.1227C94.0463 54.3896 87.868 57.7907 81.5632 57.7507C77.0822 57.7224 72.555 56.1203 68.1939 57.1893C66.5068 57.6028 64.9303 58.4029 63.5802 59.5309C62.23 60.6589 61.1404 62.0862 60.3913 63.708C59.6423 65.3298 59.2527 67.105 59.2513 68.9033C59.2499 70.7017 59.6366 72.4776 60.383 74.1006C59.0433 72.5805 56.4534 72.9404 55.083 74.4309C53.7126 75.9213 53.3578 78.1459 53.4959 80.2006C53.707 83.3433 54.894 86.3046 56.1453 89.1867C45.6542 88.8441 35.7313 81.2098 32.3913 70.8843C29.0372 60.5155 32.5524 48.1537 40.7943 41.3333Z"
                      fill="#2F2E41"
                    />
                    <path
                      opacity="0.2"
                      d="M24.2744 142.584L31.1917 181.625L35.3422 182L24.2744 142.584Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M100.469 139.639L93.5519 181.596L89.4014 181.999L100.469 139.639Z"
                      fill="black"
                    />
                    <path
                      d="M46.694 28.1947C45.3677 28.7692 43.9838 28.1396 43.4034 26.6978C42.8141 25.2339 43.3645 23.7478 44.712 23.1641C46.0597 22.5803 47.419 23.2115 48.0177 24.699C48.6075 26.1642 48.0632 27.6017 46.694 28.1947ZM44.1534 20.2826L43.0988 20.7394C42.8354 20.8522 42.5407 20.8583 42.2732 20.7565C42.0056 20.6547 41.7847 20.4524 41.654 20.1897L41.6018 20.0839C40.4671 17.9611 40.3372 15.3811 41.2177 12.4197C42.0334 9.76312 42.3722 7.89478 41.6908 6.20217C40.9031 4.24519 39.221 3.63216 37.0759 4.5202C36.2439 4.88057 35.9792 4.87483 35.3245 5.54858C35.1821 5.69691 35.0123 5.81398 34.8253 5.8928C34.6384 5.97162 34.438 6.01057 34.2362 6.00733C34.0411 6.00495 33.8485 5.96184 33.6698 5.88057C33.4912 5.7993 33.3301 5.68154 33.1963 5.53431C32.9384 5.25057 32.7939 4.8759 32.792 4.48595C32.7901 4.09599 32.9309 3.71982 33.186 3.4334C34.2865 2.23839 35.6138 1.29299 37.0842 0.656851C41.6931 -1.33954 44.0132 1.60784 45.0749 4.24547C46.1134 6.82537 45.5292 9.21909 44.5906 12.3192C43.804 14.8952 43.8499 16.804 44.7433 18.7019C44.8079 18.8454 44.8437 19.0009 44.8489 19.1591C44.854 19.3174 44.8282 19.475 44.7731 19.6227C44.718 19.7703 44.6347 19.9049 44.5282 20.0183C44.4217 20.1317 44.2942 20.2216 44.1534 20.2826L44.1534 20.2826Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M137.182 26.0334H114.783C114.712 26.0339 114.642 26.0198 114.576 25.9919C114.51 25.964 114.45 25.9229 114.4 25.8708C114.349 25.8188 114.309 25.757 114.282 25.6888C114.254 25.6207 114.24 25.5476 114.24 25.4737C114.24 25.3999 114.254 25.3268 114.282 25.2587C114.309 25.1905 114.349 25.1287 114.4 25.0766C114.45 25.0246 114.51 24.9835 114.576 24.9556C114.642 24.9277 114.712 24.9136 114.783 24.9141H137.182C137.325 24.9151 137.461 24.9745 137.561 25.0793C137.662 25.1842 137.718 25.326 137.718 25.4737C137.718 25.6215 137.662 25.7633 137.561 25.8681C137.461 25.973 137.325 26.0324 137.182 26.0334Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M165.596 26.2199H143.197C143.126 26.2204 143.056 26.2063 142.99 26.1784C142.924 26.1505 142.864 26.1094 142.814 26.0574C142.763 26.0053 142.723 25.9435 142.696 25.8753C142.668 25.8072 142.654 25.7341 142.654 25.6603C142.654 25.5865 142.668 25.5134 142.696 25.4452C142.723 25.3771 142.763 25.3152 142.814 25.2632C142.864 25.2111 142.924 25.17 142.99 25.1421C143.056 25.1142 143.126 25.1001 143.197 25.1006H165.596C165.668 25.1001 165.738 25.1142 165.804 25.1421C165.87 25.17 165.93 25.2111 165.98 25.2632C166.031 25.3152 166.071 25.3771 166.098 25.4452C166.126 25.5134 166.14 25.5865 166.14 25.6603C166.14 25.7341 166.126 25.8072 166.098 25.8753C166.071 25.9435 166.031 26.0053 165.98 26.0574C165.93 26.1094 165.87 26.1505 165.804 26.1784C165.738 26.2063 165.668 26.2204 165.596 26.2199Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M194.011 26.4065H171.612C171.47 26.4054 171.333 26.346 171.233 26.2412C171.133 26.1363 171.076 25.9946 171.076 25.8468C171.076 25.699 171.133 25.5572 171.233 25.4524C171.333 25.3475 171.47 25.2881 171.612 25.2871H194.011C194.082 25.2866 194.153 25.3007 194.219 25.3286C194.284 25.3565 194.344 25.3977 194.395 25.4497C194.445 25.5017 194.485 25.5636 194.513 25.6317C194.54 25.6999 194.554 25.773 194.554 25.8468C194.554 25.9206 194.54 25.9937 194.513 26.0618C194.485 26.13 194.445 26.1919 194.395 26.2439C194.344 26.2959 194.284 26.337 194.219 26.3649C194.153 26.3928 194.082 26.407 194.011 26.4065H194.011Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M222.425 26.593H200.026C199.884 26.592 199.747 26.5325 199.647 26.4277C199.547 26.3229 199.49 26.1811 199.49 26.0333C199.49 25.8855 199.547 25.7437 199.647 25.6389C199.747 25.534 199.884 25.4746 200.026 25.4736H222.425C222.567 25.4746 222.704 25.534 222.804 25.6389C222.905 25.7437 222.961 25.8855 222.961 26.0333C222.961 26.1811 222.905 26.3229 222.804 26.4277C222.704 26.5325 222.567 26.592 222.425 26.593Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M125.933 20.8831C128.232 20.8831 130.096 18.9497 130.096 16.5646C130.096 14.1796 128.232 12.2461 125.933 12.2461C123.633 12.2461 121.77 14.1796 121.77 16.5646C121.77 18.9497 123.633 20.8831 125.933 20.8831Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M154.52 20.8831C156.82 20.8831 158.683 18.9497 158.683 16.5646C158.683 14.1796 156.82 12.2461 154.52 12.2461C152.221 12.2461 150.357 14.1796 150.357 16.5646C150.357 18.9497 152.221 20.8831 154.52 20.8831Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M183.106 20.8831C185.406 20.8831 187.269 18.9497 187.269 16.5646C187.269 14.1796 185.406 12.2461 183.106 12.2461C180.807 12.2461 178.943 14.1796 178.943 16.5646C178.943 18.9497 180.807 20.8831 183.106 20.8831Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M211.692 20.8831C213.991 20.8831 215.855 18.9497 215.855 16.5646C215.855 14.1796 213.991 12.2461 211.692 12.2461C209.393 12.2461 207.529 14.1796 207.529 16.5646C207.529 18.9497 209.393 20.8831 211.692 20.8831Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2320_14818">
                      <rect width="264" height="182" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="hidden md:block">
                <svg
                  width="511"
                  height="339"
                  viewBox="0 0 511 339"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2320_17268)">
                    <path
                      d="M182.975 195.096C200.456 164.345 233.802 140.732 269.102 143.007C243.064 171.322 227.88 207.935 226.238 246.367C225.658 261.191 226.557 277.739 216.715 288.839C210.59 295.746 201.229 299.091 192.025 299.793C182.821 300.494 173.619 298.831 164.537 297.175L162.334 297.852C161.496 262.488 165.493 225.848 182.975 195.096Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M269.155 143.748C243.051 156.314 220.793 177.301 207.13 202.896C204.176 208.43 201.661 214.3 200.564 220.508C199.466 226.717 200.233 232.629 202.354 238.527C204.293 243.919 206.9 249.209 207.495 254.979C208.122 261.06 205.884 266.746 201.856 271.259C196.928 276.78 190.31 280.202 183.722 283.323C176.407 286.788 168.754 290.272 163.573 296.739C162.945 297.523 161.766 296.503 162.393 295.721C171.407 284.468 186.837 282.353 197.537 273.289C202.53 269.059 206.278 263.299 206.042 256.55C205.835 250.649 203.15 245.19 201.14 239.748C199.029 234.033 197.976 228.287 198.733 222.194C199.507 215.962 201.798 209.98 204.598 204.396C210.912 191.8 219.552 180.237 229.451 170.241C240.827 158.751 254.084 149.292 268.65 142.272C269.552 141.838 270.051 143.316 269.155 143.748Z"
                      fill="white"
                    />
                    <path
                      d="M211.132 194.342C207.13 191.416 204.299 187.163 203.144 182.342C201.989 177.521 202.585 172.447 204.825 168.024C205.282 167.131 206.691 167.799 206.234 168.693C204.14 172.807 203.585 177.534 204.67 182.021C205.755 186.508 208.408 190.46 212.151 193.162C212.964 193.75 211.94 194.927 211.132 194.342Z"
                      fill="white"
                    />
                    <path
                      d="M201.01 235.923C211.037 234.458 220.144 229.267 226.514 221.386C227.145 220.604 228.324 221.624 227.695 222.404C221.05 230.594 211.562 235.976 201.124 237.478C200.129 237.62 200.02 236.065 201.01 235.923V235.923Z"
                      fill="white"
                    />
                    <path
                      d="M241.597 160.669C242.909 162.124 244.563 163.23 246.408 163.888C248.254 164.546 250.234 164.735 252.171 164.439C253.163 164.284 253.271 165.84 252.285 165.994C250.144 166.311 247.957 166.1 245.916 165.377C243.876 164.655 242.043 163.444 240.578 161.849C240.428 161.711 240.336 161.52 240.321 161.316C240.306 161.111 240.369 160.909 240.498 160.75C240.633 160.594 240.825 160.499 241.031 160.484C241.237 160.468 241.44 160.535 241.597 160.669Z"
                      fill="white"
                    />
                    <path
                      d="M339.337 240.019C338.72 240.133 338.103 240.248 337.48 240.374C329.191 241.955 321.045 244.207 313.121 247.108C312.505 247.322 311.883 247.549 311.274 247.781C292.258 254.972 274.742 265.631 259.617 279.217C253.604 284.628 248.011 290.49 242.886 296.75C235.81 305.396 228.825 315.333 219.578 320.97C218.62 321.569 217.625 322.108 216.601 322.584L163.33 300.488C163.234 300.377 163.133 300.278 163.036 300.167L160.869 299.382C161.111 299.041 161.369 298.692 161.611 298.351C161.75 298.152 161.901 297.958 162.041 297.76C162.137 297.629 162.235 297.498 162.315 297.375C162.347 297.331 162.379 297.288 162.406 297.256C162.486 297.133 162.573 297.026 162.648 296.915C164.085 294.961 165.538 293.014 167.008 291.074C167.013 291.062 167.013 291.062 167.03 291.054C178.265 276.299 190.83 262.351 205.113 250.754C205.543 250.406 205.977 250.045 206.431 249.706C212.898 244.514 219.779 239.86 227.004 235.789C230.968 233.573 235.041 231.559 239.208 229.755C249.985 225.113 261.424 222.196 273.107 221.109C296.397 218.946 320.12 224.256 337.983 238.888C338.44 239.262 338.885 239.632 339.337 240.019Z"
                      fill="#F0F0F0"
                    />
                    <path
                      d="M338.936 240.645C310.528 234.962 280.121 238.318 253.801 250.528C248.111 253.168 242.568 256.341 237.955 260.637C233.34 264.934 230.393 270.115 228.536 276.102C226.837 281.574 225.734 287.369 222.735 292.333C219.574 297.566 214.364 300.759 208.431 301.937C201.172 303.379 193.828 302.126 186.689 300.652C178.762 299.014 170.554 297.188 162.523 299.233C161.55 299.481 161.223 297.956 162.195 297.709C176.167 294.152 189.76 301.753 203.761 300.957C210.294 300.586 216.754 298.244 220.629 292.713C224.017 287.876 225.16 281.902 226.831 276.346C228.586 270.512 231.205 265.29 235.478 260.881C239.849 256.371 245.279 252.975 250.877 250.201C263.501 243.946 277.362 239.915 291.284 237.894C307.285 235.569 323.565 235.998 339.421 239.163C340.403 239.359 339.911 240.84 338.936 240.645V240.645Z"
                      fill="white"
                    />
                    <path
                      d="M262.147 246.106C260.713 241.36 261.013 236.259 262.993 231.715C264.974 227.17 268.505 223.477 272.956 221.295C273.859 220.857 274.582 222.238 273.679 222.677C269.53 224.701 266.241 228.142 264.405 232.377C262.57 236.613 262.31 241.366 263.671 245.777C263.965 246.736 262.44 247.059 262.147 246.106Z"
                      fill="white"
                    />
                    <path
                      d="M229.033 273.215C237.921 278.082 248.318 279.421 258.149 276.963C259.123 276.719 259.451 278.243 258.478 278.487C248.242 281.025 237.426 279.611 228.188 274.525C227.307 274.04 228.157 272.732 229.033 273.215Z"
                      fill="white"
                    />
                    <path
                      d="M306.746 237.565C306.918 239.517 307.572 241.395 308.65 243.032C309.727 244.668 311.194 246.012 312.919 246.941C313.805 247.415 312.954 248.722 312.074 248.251C310.173 247.215 308.555 245.73 307.36 243.924C306.166 242.119 305.432 240.049 305.222 237.894C305.185 237.693 305.227 237.485 305.338 237.313C305.449 237.14 305.621 237.017 305.82 236.968C306.022 236.925 306.232 236.964 306.406 237.076C306.579 237.188 306.701 237.363 306.746 237.565Z"
                      fill="white"
                    />
                    <path
                      d="M237.861 276.473C230.4 240.401 221.075 228.375 221.075 228.375L217.512 225.612L213.228 222.284L213.249 221.856L212.233 221.511L211.994 221.325L211.603 221.025L211.54 221.093L211.407 221.23L192.02 214.64L167.425 206.286L156.035 191.482C154.18 189.071 151.792 187.122 149.058 185.789C146.324 184.455 143.318 183.773 140.276 183.795L103.903 184.065C98.9846 184.101 94.258 185.976 90.6521 189.321L66.7442 211.497L29.4911 229.289L29.4282 229.226L29.037 229.505L23.2811 232.257L23.5186 233.494L19.9561 236.065C19.9561 236.065 10.6306 247.255 3.17017 280.82C1.27233 289.36 0.338139 307.681 0.000947579 330.256C-0.0159895 331.398 0.194277 332.532 0.619515 333.592C1.04475 334.652 1.67648 335.617 2.47797 336.431C3.27946 337.245 4.23471 337.891 5.2882 338.332C6.34168 338.773 7.47236 339.001 8.61451 339.001H207.591V339.001H232.425C233.567 339.001 234.697 338.773 235.749 338.333C236.802 337.892 237.757 337.246 238.558 336.434C239.36 335.621 239.992 334.657 240.417 333.598C240.843 332.539 241.055 331.406 241.039 330.265C240.71 305.699 239.776 285.735 237.861 276.473Z"
                      fill="#3F3D56"
                    />
                    <path
                      d="M263.39 31.4565C255.649 31.4565 248.224 34.5318 242.75 40.0057C237.276 45.4797 234.201 52.9039 234.201 60.6453C234.201 68.3866 237.276 75.8109 242.75 81.2848C248.224 86.7588 255.649 89.834 263.39 89.834H480.915C488.657 89.834 496.081 86.7588 501.555 81.2848C507.029 75.8109 510.104 68.3866 510.104 60.6453C510.104 52.9039 507.029 45.4797 501.555 40.0057C496.081 34.5318 488.657 31.4565 480.915 31.4565H263.39Z"
                      fill="#E5E5E5"
                    />
                    <path
                      d="M263.391 37.3638C257.216 37.3638 251.294 39.8166 246.928 44.1828C242.562 48.5489 240.109 54.4706 240.109 60.6453C240.109 66.8199 242.562 72.7416 246.928 77.1078C251.294 81.4739 257.216 83.9268 263.391 83.9268H480.916C487.091 83.9268 493.013 81.4739 497.379 77.1078C501.745 72.7416 504.198 66.8199 504.198 60.6453C504.198 54.4706 501.745 48.5489 497.379 44.1828C493.013 39.8166 487.091 37.3638 480.916 37.3638H263.391Z"
                      fill="white"
                    />
                    <path
                      d="M127.802 170.128C154.12 170.128 175.455 148.793 175.455 122.475C175.455 96.1573 154.12 74.8223 127.802 74.8223C101.483 74.8223 80.1484 96.1573 80.1484 122.475C80.1484 148.793 101.483 170.128 127.802 170.128Z"
                      fill="#9E616A"
                    />
                    <path
                      d="M115.611 167.794C115.407 167.345 115.204 166.896 115.002 166.444C115.08 166.447 115.157 166.458 115.235 166.46L115.611 167.794Z"
                      fill="#2F2E41"
                    />
                    <path
                      d="M78.8242 76.9895C81.2343 75.0669 84.0512 73.2979 87.1327 73.3973C90.2141 73.4966 93.3389 76.2797 92.7005 79.296C98.3605 69.2744 107.37 61.5667 118.146 57.5257C128.923 53.4848 140.779 53.3688 151.632 57.1981C159.291 59.9001 166.802 65.3058 168.561 73.2343C169.013 75.2696 169.11 77.5012 170.38 79.154C171.983 81.2377 175.048 81.7091 177.572 80.976C177.598 80.9687 177.623 80.9613 177.648 80.9538C178.074 80.8081 178.535 80.7938 178.969 80.9127C179.404 81.0315 179.793 81.278 180.086 81.6204C180.379 81.9627 180.563 82.3851 180.613 82.8329C180.663 83.2807 180.578 83.7333 180.369 84.1321L178.202 88.1736C180.933 88.7825 183.772 88.7221 186.475 87.9977C186.924 87.8799 187.399 87.9039 187.833 88.0665C188.268 88.2291 188.642 88.5222 188.904 88.9057C189.166 89.2892 189.302 89.7442 189.295 90.2084C189.288 90.6726 189.137 91.1232 188.864 91.4984C181.718 101.309 169.781 107.644 157.598 107.569C148.94 107.517 140.193 104.532 131.766 106.524C128.506 107.294 125.46 108.784 122.851 110.885C120.242 112.986 118.137 115.645 116.69 118.666C115.242 121.686 114.49 124.993 114.487 128.343C114.484 131.692 115.231 135 116.674 138.023C114.085 135.192 109.081 135.862 106.433 138.638C103.785 141.415 103.099 145.558 103.366 149.385C103.774 155.239 106.068 160.755 108.486 166.123C88.2145 165.485 69.0413 151.265 62.5876 132.032C56.1069 112.719 62.8989 89.6936 78.8242 76.9895Z"
                      fill="#2F2E41"
                    />
                    <path
                      opacity="0.2"
                      d="M46.9023 265.582L60.268 338.302L68.2876 339L46.9023 265.582Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M194.127 260.096L180.762 338.247L172.742 338.998L194.127 260.096Z"
                      fill="black"
                    />
                    <path
                      d="M90.223 52.5166C87.6603 53.5866 84.9863 52.4139 83.8648 49.7282C82.7262 47.0015 83.7896 44.2335 86.3934 43.1463C88.9974 42.059 91.6238 43.2346 92.7807 46.0053C93.9203 48.7344 92.8685 51.4119 90.223 52.5166ZM85.314 37.7792L83.2764 38.6301C82.7673 38.8401 82.198 38.8514 81.681 38.6618C81.1641 38.4722 80.7371 38.0954 80.4846 37.6061L80.3838 37.4089C78.1913 33.4549 77.9403 28.6494 79.6416 23.1333C81.2177 18.1852 81.8723 14.7051 80.5558 11.5524C79.0337 7.90724 75.7835 6.7654 71.6388 8.41949C70.0312 9.09074 69.5197 9.08004 68.2546 10.335C67.9795 10.6113 67.6515 10.8293 67.2902 10.9762C66.9289 11.123 66.5418 11.1955 66.1519 11.1895C65.7749 11.185 65.4028 11.1047 65.0575 10.9534C64.7123 10.802 64.4011 10.5826 64.1425 10.3084C63.6442 9.77991 63.365 9.08203 63.3614 8.35569C63.3577 7.62935 63.6298 6.92868 64.1227 6.39518C66.2491 4.16932 68.8137 2.40837 71.6548 1.22348C80.5601 -2.49507 85.0431 2.99483 87.0946 7.90777C89.1011 12.7132 87.9724 17.1718 86.1588 22.9462C84.6389 27.7443 84.7275 31.2997 86.4539 34.8348C86.5786 35.1021 86.6479 35.3918 86.6578 35.6865C86.6677 35.9812 86.6179 36.2749 86.5114 36.5499C86.405 36.8249 86.244 37.0756 86.0382 37.2868C85.8325 37.4981 85.5861 37.6655 85.314 37.7792L85.314 37.7792Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M311.438 74.5674H268.159C268.021 74.5683 267.885 74.542 267.758 74.49C267.631 74.4381 267.515 74.3614 267.417 74.2646C267.32 74.1677 267.242 74.0524 267.189 73.9255C267.137 73.7985 267.109 73.6624 267.109 73.5249C267.109 73.3874 267.137 73.2513 267.189 73.1243C267.242 72.9974 267.32 72.8821 267.417 72.7853C267.515 72.6884 267.631 72.6117 267.758 72.5598C267.885 72.5078 268.021 72.4815 268.159 72.4824H311.438C311.714 72.4843 311.977 72.595 312.171 72.7903C312.365 72.9856 312.474 73.2496 312.474 73.5249C312.474 73.8001 312.365 74.0642 312.171 74.2595C311.977 74.4548 311.714 74.5655 311.438 74.5674Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M366.341 74.915H323.061C322.924 74.9159 322.787 74.8897 322.66 74.8377C322.533 74.7858 322.417 74.7091 322.32 74.6122C322.222 74.5153 322.145 74.4001 322.092 74.2731C322.039 74.1462 322.012 74.0101 322.012 73.8726C322.012 73.7351 322.039 73.5989 322.092 73.472C322.145 73.345 322.222 73.2298 322.32 73.1329C322.417 73.036 322.533 72.9594 322.66 72.9074C322.787 72.8554 322.924 72.8292 323.061 72.8301H366.341C366.478 72.8292 366.615 72.8554 366.742 72.9074C366.869 72.9594 366.985 73.036 367.083 73.1329C367.18 73.2298 367.258 73.345 367.31 73.472C367.363 73.5989 367.39 73.7351 367.39 73.8726C367.39 74.0101 367.363 74.1462 367.31 74.2731C367.258 74.4001 367.18 74.5153 367.083 74.6122C366.985 74.7091 366.869 74.7858 366.742 74.8377C366.615 74.8897 366.478 74.9159 366.341 74.915Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M421.245 75.2622H377.965C377.69 75.2603 377.426 75.1496 377.233 74.9544C377.039 74.7591 376.93 74.495 376.93 74.2197C376.93 73.9445 377.039 73.6804 377.233 73.4851C377.426 73.2898 377.69 73.1791 377.965 73.1773H421.245C421.382 73.1763 421.518 73.2026 421.646 73.2546C421.773 73.3065 421.889 73.3832 421.986 73.4801C422.084 73.577 422.161 73.6922 422.214 73.8191C422.267 73.9461 422.294 74.0822 422.294 74.2197C422.294 74.3572 422.267 74.4934 422.214 74.6203C422.161 74.7472 422.084 74.8625 421.986 74.9594C421.889 75.0563 421.773 75.1329 421.646 75.1849C421.518 75.2368 421.382 75.2631 421.245 75.2622H421.245Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M476.147 75.6098H432.867C432.592 75.6079 432.329 75.4973 432.135 75.302C431.941 75.1067 431.832 74.8426 431.832 74.5673C431.832 74.2921 431.941 74.028 432.135 73.8327C432.329 73.6374 432.592 73.5268 432.867 73.5249H476.147C476.422 73.5268 476.686 73.6374 476.879 73.8327C477.073 74.028 477.182 74.2921 477.182 74.5673C477.182 74.8426 477.073 75.1067 476.879 75.302C476.686 75.4973 476.422 75.6079 476.147 75.6098Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M289.704 64.9748C294.146 64.9748 297.748 61.3735 297.748 56.931C297.748 52.4885 294.146 48.8872 289.704 48.8872C285.261 48.8872 281.66 52.4885 281.66 56.931C281.66 61.3735 285.261 64.9748 289.704 64.9748Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M344.938 64.9748C349.381 64.9748 352.982 61.3735 352.982 56.931C352.982 52.4885 349.381 48.8872 344.938 48.8872C340.496 48.8872 336.895 52.4885 336.895 56.931C336.895 61.3735 340.496 64.9748 344.938 64.9748Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M400.173 64.9748C404.615 64.9748 408.217 61.3735 408.217 56.931C408.217 52.4885 404.615 48.8872 400.173 48.8872C395.73 48.8872 392.129 52.4885 392.129 56.931C392.129 61.3735 395.73 64.9748 400.173 64.9748Z"
                      fill="#6C63FF"
                    />
                    <path
                      d="M455.407 64.9748C459.85 64.9748 463.451 61.3735 463.451 56.931C463.451 52.4885 459.85 48.8872 455.407 48.8872C450.965 48.8872 447.363 52.4885 447.363 56.931C447.363 61.3735 450.965 64.9748 455.407 64.9748Z"
                      fill="#6C63FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2320_17268">
                      <rect width="510.105" height="339" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          <div className=" items-center  md:shadow-2xl text-center md:p-12 ">
            <div className="text-center">
              <div className="hidden md:block ">
                <h1 className="text-[#2B365A] font-bold text-[32px] py-2 ">
                  Account recovery
                </h1>
                <h3 className="text-[#787878] text-[22px] font-semibold py-2 ">
                  Email
                </h3>
                <p className="text-[#2B365A]  text-[16px] font-medium ">
                  Recover account using email
                </p>
              </div>

              <div className=" ">
                <div className="py-5">
                  <form>
                    <div className="mb-4">
                      <input
                        className="appearance-none border rounded-md w-full md:w-[370px] p-4 px-3 text-[#011F32] leading-tight focus:outline-none focus:shadow-outline"
                        id="phone"
                        type="phone"
                        placeholder="Enter Phone Number"
                      />
                    </div>
                    <div className="mt-40 md:mt-0 pt-6">
                      <button className="bg-[#2B365A] text-white font-bold border-2 border-[#2B365A] p-3 rounded-[8px] md:w-full w-[281px] ">
                        <Link to="/email-recovery-otp">Recover</Link>
                      </button>
                    </div>
                  </form>
                  <div className=" mb- block md:px-4  md:">
                    <div className="py-3 block md:hidde">
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