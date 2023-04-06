import React from 'react'

const InterestCard = ({ imageUrl, title, description }) => {
  return (
    <div className=" w-[150px] md:max-w-[190px] md:w-[190px] mx-auto bg-black relative rounded-xl shadow-md overflow-hidden ">
      <div className="md:flex">
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
  )
}

export default InterestCard
