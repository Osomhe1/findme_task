
import { useState } from 'react'
import InterestCard from './InterestCard'

export default function Carousel({ datas, RenderComponent, title, pageLimit, dataLimit }) {

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
    return datas.slice(startIndex, endIndex)
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1)
  }

  const data = [
    {
      id: 1,
      img: `https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDZ8fGJ1c2luZXNzfGVufDB8fHx8MTY4MDM1OTEyOA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Business',
    },
    {
      id: 2,
      img: `https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDV8fGZvb2R8ZW58MHx8fHwxNjgwNDI2Nzk1&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Food',
    },
    {
      id: 3,
      img: `https://images.unsplash.com/photo-1590516913922-145f420f9474?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDl8fGZhc2hpb24lMjB8ZW58MHx8fHwxNjgwNDQwNDkx&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Fashion',
    },
    {
      id: 4,
      img: `https://images.unsplash.com/photo-1516937941344-00b4e0337589?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fGZhY3Rvcnl8ZW58MHx8fHwxNjgwNDMzMTkz&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Factory',
    },
    {
      id: 5,
      img: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fG1vZGVsfGVufDB8fHx8MTY4MDM3Mzk5MQ&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Model',
    },
    {
      id: 6,
      img: `https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDR8fGNoYXJpdHl8ZW58MHx8fHwxNjgwNDE4MTQ3&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Charity',
    },
    {
      id: 7,
      img: `https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDEwfHxFZHVjYXRpb258ZW58MHx8fHwxNjgwNDQwNjY1&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Education',
    },
    {
      id: 8,
      img: `https://images.unsplash.com/photo-1593313637552-29c2c0dacd35?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDEyfHxjb25zdHJ1Y3Rpb258ZW58MHx8fHwxNjgwNDI1Mzk1&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Construction',
    },
    {
      id: 9,
      img: `https://images.unsplash.com/photo-1543436115-0d6fbe97ece0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fHRocmlmdHxlbnwwfHx8fDE2ODA0NDA3OTk&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Thrift sales',
    },
    {
      id: 10,
      img: `https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDd8fGd5bXxlbnwwfHx8fDE2ODA0NDA4NDM&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Gym',
    },
    {
      id: 11,
      img: `https://images.unsplash.com/photo-1512061942530-e6a4e9a5cf27?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fEhvc3BpdGFsaXR5fGVufDB8fHx8MTY4MDQ0MDg4Nw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Hospitality',
    },
    {
      id: 12,
      img: `https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDZ8fGJ1c2luZXNzfGVufDB8fHx8MTY4MDM1OTEyOA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Business',
    },
    {
      id: 13,
      img: `https://images.unsplash.com/photo-1520452112805-c6692c840af0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fHBvbGl0aWNzfGVufDB8fHx8MTY4MDQzMjA2Mw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Politics',
    },
    {
      id: 14,
      img: `https://images.unsplash.com/photo-1521791136064-7986c2920216?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDN8fHNlcnZpY2VzfGVufDB8fHx8MTY4MDQ0MDk5Ng&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Services',
    },
    {
      id: 15,
      img: `https://images.unsplash.com/photo-1644363832001-0876e81f37a9?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fG5mdHxlbnwwfHx8fDE2ODA0MjI1MzE&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'NFT',
    },
    {
      id: 16,
      img: `https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fEFydHN8ZW58MHx8fHwxNjgwNDQxMTE1&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Arts',
    },
    {
      id: 17,
      img: `https://images.unsplash.com/photo-1581368135153-a506cf13b1e1?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fENyZWF0b3JzfGVufDB8fHx8MTY4MDQ0MzkyNA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Creators',
    },
    {
      id: 18,
      img: `https://images.unsplash.com/photo-1584799580661-53b7c6b99430?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDZ8fERlbGl2ZXJ5fGVufDB8fHx8MTY4MDQ0Mzg4NQ&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Deliveri',
    },
    {
      id: 19,
      img: `https://images.unsplash.com/photo-1528357136257-0c25517acfea?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fHJlbGlnaW9ufGVufDB8fHx8MTY4MDQ0Mzg0NA&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Religion',
    },
    {
      id: 20,
      img: `https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fGUtYXBwfGVufDB8fHx8MTY4MDQ0Mzc5NQ&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'E-app',
    },
    {
      id: 21,
      img: `https://images.unsplash.com/photo-1505751172876-fa1923c5c528?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDEwfHxoZWFsdGh8ZW58MHx8fHwxNjgwMzcyMTk2&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Health',
    },
    {
      id: 22,
      img: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDR8fEZpbmFuY2V8ZW58MHx8fHwxNjgwNDQzNzEx&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Finance',
    },
    {
      id: 23,
      img: `https://images.unsplash.com/photo-1581888227599-779811939961?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDJ8fHBldCUyMGNhcmV8ZW58MHx8fHwxNjgwMzc1NzQw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Pet Care',
    },
    {
      id: 24,
      img: `https://images.unsplash.com/photo-1582407947304-fd86f028f716?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fFJlYWwlMjBFc3RhdGV8ZW58MHx8fHwxNjgwNDA3NTgy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Real Estate',
    },
    {
      id: 25,
      img: `https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDl8fHNob3BwaW5nc3xlbnwwfHx8fDE2ODA0NDM1NzU&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Shoppings',
    },
    {
      id: 26,
      img: `https://images.unsplash.com/photo-1484807352052-23338990c6c6?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDZ8fGJvb2tpbmdzfGVufDB8fHx8MTY4MDQ0MzUzNw&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Bookings',
    },
    {
      id: 27,
      img: `https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDR8fFJlc3R1cmFudHxlbnwwfHx8fDE2ODA0NDM0ODk&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Resturants',
    },
    {
      id: 28,
      img: `https://images.unsplash.com/photo-1589470288084-ecad61835772?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDF8fG1hcmtldHN8ZW58MHx8fHwxNjgwNDQzNDM2&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Markets',
    },
    {
      id: 29,
      img: `https://images.unsplash.com/photo-1515169067868-5387ec356754?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDEyfHxFdmVudHN8ZW58MHx8fHwxNjgwNDQzNDAy&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Events',
    },
    {
      id: 30,
      img: `https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDE3fHxNdXNpY3xlbnwwfHx8fDE2ODA0Mzg0MDM&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Music',
    },
    {
      id: 31,
      img: `https://images.unsplash.com/photo-1568882393281-0d690ca62d64?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDM4fHxQbGFjZXN8ZW58MHx8fHwxNjgwNDQzMzE0&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Places',
    },
    {
      id: 32,
      img: `https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?crop=entropy&cs=srgb&fm=jpg&ixid=Mnw3MjAxN3wwfDF8c2VhcmNofDZ8fHRlY2h8ZW58MHx8fHwxNjgwNDMzMjM4&ixlib=rb-4.0.3&q=85&q=85&fmt=jpg&crop=entropy&cs=tinysrgb&w=450`,
      descp: 'Tech',
    },
  ]

  return (
    <div className="content">
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto px- py-2 lg:px- lg:pt-1">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w gap-1 flex-wrap">
              {data.map((item, id) => (
                <div class="w-ful p- md:p-">
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
          <RenderComponent data={getPaginatedData()} />

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
      </section>
    </div>
  )
}
