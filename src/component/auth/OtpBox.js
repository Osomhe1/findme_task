import React, { useState, useRef } from 'react'

export default function OtpBox() {
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputRefs = useRef([])

  function handleChange(e, index) {
    const value = e.target.value
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp]
      newOtp[index] = value
      return newOtp
    })

    if (value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }

  function handlePaste(e) {
    e.preventDefault()
    const pasteData = e.clipboardData.getData('text/plain').slice(0, 4)
    setOtp(pasteData.split(''))
  }

  return (
    <div className="">
      <p className="text-[#2B365A] text-[15px] font-medium py-2 ">
        Recovery code
      </p>
      <div className="flex justify-center">
        {otp.map((digit, index) => (
          <input
            type="text"
            maxLength="1"
            className="w-14 h-14 mx-2 text-3xl text-[#2B365A] text-center border rounded-[8px] focus:outline-none focus:border-[#2B365A]"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onPaste={handlePaste}
            ref={(ref) => (inputRefs.current[index] = ref)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
}
