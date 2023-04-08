
import {  useMemo,  useState } from 'react'
import InterestCard from './InterestCard'
import Pagination from './Pagenation'
import { data } from './utilities/data'


// let PageSize = 32


export default function Carousel() {

   const [currentPage, setCurrentPage] = useState(1)

    const screenWidth = window.innerWidth

    // Adjust the number of items per page based on the screen size
  const adjustedItemsPerPage =
    screenWidth < 768 ? 10 : screenWidth < 900 ? 28 : screenWidth < 1281 ? 30 : 32

   
   
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * adjustedItemsPerPage
    const lastPageIndex = firstPageIndex + adjustedItemsPerPage
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])




  return (
    <div className="content">
      <section className="overflow-hidden text-neutral-700">
        <div className="container mx-auto  py-2  lg:pt-1">
          <div className="-m-1 flex flex-wrap md:-m-2">
            <div className="flex w gap-3 md:gap-1 flex-wrap">
              {currentTableData.map((item, id) => (
                <div className="w-ful p- md:p-">
                  <InterestCard
                    key={item.id}
                    alt="gallery"
                    description={item.descp}
                    className="block h-full w-full rounded-xl object-cover object-center"
                    imageUrl={item.img}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* <Pagination /> */}
          <Pagination
            className=""
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={adjustedItemsPerPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
       
      </section>
    </div>
  )
}
