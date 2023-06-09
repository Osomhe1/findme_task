import React from 'react'

export default function Publish() {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="flex flex-wrap item-center justify-between w-[90%] m-auto  py-6">
          <div className="">
            <h1 className="text-[#2B365A] font-semibold border-l-4 p-2  border-l-[#42A5F5]">
              Publish
            </h1>
            <p className="text-gray-200 p-2">No Publish</p>
          </div>
          <div className="text-[#999999]  ">
            <p className="border-r-solid p-2 border-dashed  border-2 border-b-4 divide-x divide-blue-200">
              {' '}
              Type Create record something or drag audio video or image{' '}
              <span className="text-[#2B365A]">Publish</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
