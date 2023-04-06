import { useEffect, useState } from 'react'
import { usePagination, DOTS, ActiveDots } from './usePagination '

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  const [valid, setValid] = useState(false)

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }
 let lastPage = paginationRange[paginationRange.length - 1]

  const onNext = () => {
     if(currentPage === lastPage){
      setValid(true)
     }
     else{

       onPageChange(currentPage + 1)
     }
  }

  const onPrevious = () => {
    if (currentPage === 1) {
      setValid(true)
    }else{

      onPageChange(currentPage - 1)
    }
  }

 



  return (
    <ul
      className={
        'pagination-container cursor-pointer mt-2 py-2 flex flex-wrap justify-between gap-2'
      }
    >
      {/* Left navigation arrow */}
      <li
        onClick={onPrevious}
        disable={lastPage}
        className={`border-[#2B365A] border-2 text-[#2B365A] font-bold text-[14px] text-center w-[300px] md:w-[130px] duration-300 delay-150 ease-in-out hover:translate-y-2 hover:translate-x-2 p-3 px-5  rounded-md  
         ${currentPage ===1 ? 'invisible' : 'block'}`}
      >
        Previous
      </li>
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        // if (pageNumber === DOTS) {
        //   return (
        //     <li
        //       className=" text-orange-500 font-bold text-[25px] "
        //       onClick={() => onPageChange(pageNumber)}
        //     >
        //       &#8230; {DOTS}
        //     </li>
        //   )
        // }

        // Render our Page Pills
        return (
          <div className="">
            <li
              className=''
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber === currentPage ? ActiveDots : DOTS}
            </li>
          </div>
        )
      })}
      {/*  Right Navigation arrow */}

      <li
        className={
          'bg-[#2B365A] text-white font-bold text-[14px] text-center w-[300px] md:w-[130px] duration-300 delay-150 ease-in-out hover:translate-y-2 hover:translate-x-2 p-3 px-5  rounded-md '
        }
        onClick={onNext}
        disable={!valid}
      >
        Next
      </li>
    </ul>
  )
}

export default Pagination
