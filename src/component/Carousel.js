
import { useMemo, useState } from 'react'
import InterestCard from './InterestCard'
import Pagination from './Pagenation'
import { data } from './utilities/data'


let PageSize = 32

export default function Carousel() {

   const [currentPage, setCurrentPage] = useState(1)


const currentTableData = useMemo(() => {
  const firstPageIndex = (currentPage - 1) * PageSize
  const lastPageIndex = firstPageIndex + PageSize
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
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </section>
    </div>
  )
}
