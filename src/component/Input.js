import React from 'react'

const TailwindInput = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="my-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="input">
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-[350px]  h-14 md:w-[400px] lg:w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default TailwindInput
