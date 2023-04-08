import React, { useState } from 'react'

function CustomCheckbox(props) {
  const [isChecked, setIsChecked] = useState(false)

  const handleClick = () => {
    setIsChecked(!isChecked)
  }

 


  return (
    <div
          className={`flex items-cente cursor-pointer ${
            isChecked ? 'bg-hero bg-no-repeat relative  z-[9999] ' : 'bg'
          } rounded-md px-3 py-2`}
          onClick={handleClick}
        >
          <div
            className={`w-full h-10 rounded-full mr- ${
              isChecked
                ? 'bg-hero2 bg-no-repeat   z-[99] bottom-1 left-[80%]  '
                : 'bg-white'
            }`}
          ></div>
      <div>{props.label}</div>
      {/* <div>hey</div> */}
    </div>
  )
}

export default CustomCheckbox
