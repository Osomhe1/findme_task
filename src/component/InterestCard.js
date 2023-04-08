import React, { useState } from 'react'


const InterestCard = ({ imageUrl, title, description }) => {

  const [isChecked, setIsChecked] = useState(false)
  

  const handleClick = () => {
    if (isChecked.length > 6) {
      console.log(`you can't pick more than 6`)
      setIsChecked(false)
    } else {
      setIsChecked(!isChecked)
    }
  }

  return (
    <div className=" w-[180px] md:max-w-[190px] md:w-[190px] mx-auto  relative rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex">
        <div
          className={`fle items-cente cursor-pointer ${
            isChecked ? 'bg-hero bg-no-repeat   z-[9999] ' : 'bg'
          } rounded-md  `}
          onClick={handleClick}
        >
          <div
            className={` rounded-full mr- ${
              isChecked
                ? 'bg-hero2 bg-no-repeat absolute md:w-full w-10 h-10 z-[99] bottom-1 left-[80%]  '
                : 'bg-white '
            }`}
          ></div>
          <div className="md:flex-shrink-0">
            <img
              className="h-36 w-full object-cover md:w-48"
              src={imageUrl}
              alt={title}
            />
            <div className="text-[#F5F5F5] absolute z-[9999] top-16 px-2 ">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterestCard
