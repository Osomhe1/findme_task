import React from 'react'

export default function Memories() {
  return (
    <div>
      <section>
        <div className="flex item-center justify-between w-[90%] m-auto  py-6">
          <div className="">
            <h1 className="text-[#2B365A] font-semibold border-l-4 p-2  border-l-[#787878]">
              Memories
            </h1>
            <p className="text-gray-400 p-2">No memories</p>
          </div>
          <div className="text-[#999999]">
            <h1>Manage</h1>
          </div>
        </div>
      </section>
    </div>
  )
}
