import React, { useState } from 'react'

const Pagination = ({ data, RenderComponent, title, pageLimit, dataLimit }) => {
  const [pages] = useState(Math.round(data.length / dataLimit))
  const [currentPage, setCurrentPage] = useState(1)

  function goToNextPage() {
    setCurrentPage((page) => page + 1)
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1)
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent)
    setCurrentPage(pageNumber)
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit
    const endIndex = startIndex + dataLimit
    return data.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  return (
    <div>
      <h2>{title}</h2>

      {/* show the data */}
      <RenderComponent data={getPaginatedData()} />

      {/* show the pagination */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1 ? true : false}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? 'active' : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          disabled={currentPage === pages ? true : false}
        >
          next
        </button>
      </div>
    </div>
  )
}

export default Pagination
