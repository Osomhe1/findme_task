import { useMemo } from "react"

export const DOTS = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="6.14991"
      cy="6.14991"
      r="6.14991"
      transform="matrix(1 0 0 -1 0.339844 12.2998)"
      fill="#C4C4C4"
    />
  </svg>
)

export const ActiveDots = <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.14991" cy="6.14991" r="6.14991" transform="matrix(1 0 0 -1 0 12.2998)" fill="#2B365A"/>
</svg>



export const usePagination = ({ totalCount, pageSize, currentPage, siblingCount=1, }) => {
     const paginationRange = useMemo(() => {
       // Our implementation logic will go here
       const totalPageCount = Math.ceil(totalCount / pageSize)

        const range = (start, end) => {
          let length = end - start + 1
          /*
  	Create an array of certain length and set the elements within it from
    start value to end value.
  */
          return Array.from({ length }, (_, idx) => idx + start)
        }

       // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
       const totalPageNumbers = siblingCount + 5

       /*
      Case 1:
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
       if (totalPageNumbers >= totalPageCount) {
         return range(1, totalPageCount)
       }

       /*
    	Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
    */
       const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
       const rightSiblingIndex = Math.min(
         currentPage + siblingCount,
         totalPageCount
       )

       /*
      We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
    */
       const shouldShowLeftDots = leftSiblingIndex > 2
       const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

       const firstPageIndex = 1
       const lastPageIndex = totalPageCount

       /*
    	Case 2: No left dots to show, but rights dots to be shown
    */
       if (!shouldShowLeftDots && shouldShowRightDots) {
         let leftItemCount = 3 + 2 * siblingCount
         let leftRange = range(1, leftItemCount)

         return [...leftRange, DOTS, totalPageCount]
       }

       /*
    	Case 3: No right dots to show, but left dots to be shown
    */
       if (shouldShowLeftDots && !shouldShowRightDots) {
         let rightItemCount = 3 + 2 * siblingCount
         let rightRange = range(
           totalPageCount - rightItemCount + 1,
           totalPageCount
         )
         return [firstPageIndex, DOTS, ...rightRange]
       }

       /*
    	Case 4: Both left and right dots to be shown
    */
       if (shouldShowLeftDots && shouldShowRightDots) {
         let middleRange = range(leftSiblingIndex, rightSiblingIndex)
         return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
       }

      
     }, [totalCount, pageSize, siblingCount, currentPage])
     

     return paginationRange
}