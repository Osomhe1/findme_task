import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { buttonData } from '../utilities/buttonData'

const DropdownWithOthers = () => {
  const [selectedOption, setSelectedOption] = useState('')
  const [otherValue, setOtherValue] = useState('')
  const [isOtherSelected, setIsOtherSelected] = useState(false)
  const [buttonDatas, setButtonDatas] = useState(buttonData)

  const handleSelectChange = (e) => {
    e.preventDefault()
    const selectedValue = e.target.value
    setSelectedOption(selectedValue)
    setIsOtherSelected(selectedValue === 'other')
  }

  const handleOtherInputChange = (e) => {
    setOtherValue(e.target.value)
  }

  const options = [
    {
      value: 'Enter your business category',
      label: 'Enter your business category',
    },
    {
      value: 'deen',
      label: 'Deen',
    },
    {
      value: 'cult',
      label: 'Cult',
    },
    {
      value: 'joy',
      label: 'Joy',
    },
    {
      value: 'dean',
      label: 'Dean',
    },
    {
      value: 'delivery service',
      label: 'Delivery Service',
    },
    {
      value: 'darmatologist',
      label: 'Darmatologist',
    },
    {
      value: 'don',
      label: 'Don',
    },
    {
      value: 'dentist',
      label: 'Dentist',
    },
    {
      value: 'other',
      label: 'Other',
    },
  ]


  return (
    <div className="w-[320px] md:w-[24rem] md:max-w-md mx-auto">
      <select
        className="w-full px-4 py-2  border text-[#2B365A] text-[14px] border-gray-300 rounded-md h-[51px] focus:outline-none focus:border-[#2B365A]"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        {options.map((option) =>(
          <option value={option.value} >{option.label}</option>

        ))}
        
      </select>
      {isOtherSelected && (
        <input
          className="mt-2 w-full px-4 py-2 border  text-[#2B365A] text-[14px] border-gray-300 h-[51px] rounded-md focus:outline-none focus:border-[#2B365A] "
          type="text"
          placeholder="Enter other value"
          value={otherValue}
          onChange={handleOtherInputChange}
        />
      )}
      <div className="">
        <svg
          // width="361"
          className=" w-[320px] md:w-[24rem] "
          height="23"
          viewBox="0 0 361 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M177.123 18.1413C175.934 18.1413 174.898 17.8822 174.015 17.3641C173.143 16.8342 172.466 16.0864 171.983 15.1208C171.512 14.1552 171.277 13.0189 171.277 11.7118C171.277 10.3929 171.512 9.25063 171.983 8.28502C172.454 7.31941 173.131 6.57753 174.015 6.0594C174.898 5.54127 175.934 5.2822 177.123 5.2822C178.324 5.2822 179.361 5.54127 180.232 6.0594C181.115 6.57753 181.792 7.31941 182.263 8.28502C182.734 9.25063 182.97 10.387 182.97 11.6941C182.97 13.013 182.734 14.1552 182.263 15.1208C181.792 16.0864 181.115 16.8342 180.232 17.3641C179.349 17.8822 178.313 18.1413 177.123 18.1413ZM177.123 16.6576C178.383 16.6576 179.361 16.2278 180.055 15.3681C180.762 14.5085 181.115 13.2838 181.115 11.6941C181.115 10.1161 180.762 8.90324 180.055 8.05539C179.361 7.19576 178.383 6.76595 177.123 6.76595C175.863 6.76595 174.886 7.19576 174.191 8.05539C173.496 8.90324 173.149 10.1161 173.149 11.6941C173.149 13.2838 173.496 14.5085 174.191 15.3681C174.898 16.2278 175.875 16.6576 177.123 16.6576ZM189.846 8.88558C190.117 8.88558 190.4 8.92679 190.694 9.00922L190.659 10.6343C190.341 10.5165 189.994 10.4576 189.617 10.4576C188.804 10.4576 188.192 10.7049 187.78 11.1995C187.379 11.6823 187.179 12.2947 187.179 13.0365V18H185.413V11.6058C185.413 10.6755 185.366 9.83941 185.271 9.09754H186.932L187.091 10.7049C187.326 10.1161 187.691 9.66867 188.186 9.3625C188.681 9.04455 189.234 8.88558 189.846 8.88558Z"
            fill="#2B365A"
          />
          <line
            y1="10.448"
            x2="143.517"
            y2="10.448"
            stroke="#2B365A"
            stroke-width="1.10398"
          />
          <line
            x1="217.482"
            y1="10.448"
            x2="360.999"
            y2="10.448"
            stroke="#2B365A"
            stroke-width="1.10398"
          />
        </svg>
      </div>
      <div className="">
        <p className="font-semibold text-[#2B365A] text-[14px] ">
          {' '}
          Select a Category Below
        </p>
        {buttonDatas.map((item, key) => (
          // <div className="fle flex-wrp gap-2">
          <button
            key={key}
            onClick={handleSelectChange}
            className="  flex-wrap mx-2 md:mx-3 my-2 text-[#2B365A] font-semibold text-[15px] bg-white p-2 rounded-md "
          >
            {item?.name}{' '}
          </button>
          //  </div>
        ))}
      </div>
      <div className="m-auto w-[300px] ">
        <button
          className="mt-2 px-4 py-2 
        bg-[#2B365A] ease-in-out transition hover:-translate-y-1 delay-150 duration-300 hover:scale-110 text-white font-bold border-2 border-[#2B365A] p-3 rounded-[8px] md:w-full  w-[281px] "
          onClick={() => alert(isOtherSelected ? otherValue : selectedOption)}
        >
          <Link to="/plan">Next</Link>
        </button>
      </div>
    </div>
  )
}

export default DropdownWithOthers
