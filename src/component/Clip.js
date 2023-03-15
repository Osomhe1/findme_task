import React from 'react'
import{BiShow} from 'react-icons/bi'
// import {  BsThreeDotsVertical } from 'react-icons/bs'
import './Clip.css'

export default function Clip() {
  const post = [
    {
      id: 1,
      img: 'https://s3-alpha-sig.figma.com/img/8fa5/ca33/1535a7ae8abbc27c84cc738dedd68609?Expires=1679875200&Signature=ZXniJ4T3-d5FsmpjMKPt5i37fzaJEL6YmlDob79BtV8xdUIu9fnvH0wt~vIBiDIz8pEx0hfI2xNpWE3lI39~-kw-KsZCJyGkgs1u73x0P3ijqyMGExjEsT4lwUZAnK7ANnxSp4n63zSYhfrWs8xr4pWYmA7NdNbzM-tUFwYjj7JqjRkVoo1LsQacrwQK9r942vesfcceCP26D2KZz0wKlX~yeE1mEIKYqn-e-PJr4-aPwr0DDCY5cbwHysrYs6C5tZZAbqgEi5wx82B5PnM59C7BZnUQ6wujxPEAv~RgvebrBKzwJ3GFn0P~G0Bip2g5i8BHt3ORW78Yp6AKb8Cpag__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: true,
      views: 100,
      time: '2 mins ago',
      status: '_____________________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 2,
      img: 'https://s3-alpha-sig.figma.com/img/d958/c8a6/c04764140922ecd0d1aa8071625aad61?Expires=1679875200&Signature=nYxCMrm-dZfK8nQentLRX1dlB~ty~QqfKr7curShoDx17pcvXMHwVJPBxyY9RhRMjuIEHix-WV8I1J-0xj1dG0~c4KrkLZEe~sXpYnEuuo0N-w6BJc9rlS1pVSU9qiApX704oYds4mR~bkdzqjMHw1LarF6ay-7h6Tej6sSW-ISxvGJP4Wbay2ZBHMD88ATfTe6AuMO6c5Dem9x36l1xUxOa29kp4zkXB7PExftda8M-gBnMN0NjKj5hOqq4HcZdZe4hqIUdiXPOSj1FJqZ7lm7MMAGCMHDZ-6yKFwhXtSz5EAUfDjfT2dlAis0vl15r4~EA5k13ymiznEhYOY1f1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '______ _______ _______',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 3,
      img: 'https://s3-alpha-sig.figma.com/img/9566/3e19/649cfd4d6f266b617e06e2cba99a107f?Expires=1679875200&Signature=isevbcfP319TJh0m~otHEIL0ffTXiDIQ1QfqjCUsFf2Xl5aikaf9ARkLF7u9jtUZDNxKyOhMM3igsKi9KvoRvKQ2uVEoypzw2UAuO2QKEF0xelpTXlfLr06kgGtct-0QsGg9Z1PsqwcGxAi56E7kxvJ-m92BUJkSurJ79PyqHVqCf8FkDDi6v7CCafrUhU9q8p83lwZtFiByIiuHEdxmBccKTz3dAQIofxtUSvlETEAxE7cefymmi1-AVLoq~3olTDYFe5HVwQTp-9OBYSbF2B05Ps1Nm-rsqoE6nPNZ7KJClUpyefycJLRIfSHTIFiYEVRDWanYT7x7yGfTB5kdCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '____ _____ ____ _____',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 4,
      img: 'https://s3-alpha-sig.figma.com/img/cae3/4c99/a277785eb03fd6666c8fba7e0fca430c?Expires=1679875200&Signature=j9MtL8ZM2suwrhhdsHnIgj6sOihQwSuVM7Z1WmlC6ZcDndrgVHBJbMsEUP4eOcghRW1eqVoKEbFhjLqUqkOx87KxukUm2SvcfYbqJfEkiwR6XHSeJ7~CNFQESxaQpeujFwiQ3ildC3aYg5tOYfoH-Y1N~d3lnvzjzysKDtRvPETZBHi-RY9U5PbyHbhoSmgZwUKftqx8xZTz8exhI4qCIVkZA1-XFxxK71i55HVW1w51k5XEKzEQp9VqtgNFLzTG40tGqS4QV2iDbwQ6qdezOAFSt7Zd0ynPoNpROxQ3IHhLCQ2kX9X1b1F4pNUova3yHpAq~2jSDvuf85pwHnh9wg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '____ _____ ____ _____',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 5,
      img: 'https://s3-alpha-sig.figma.com/img/bf4b/8038/f7da6ff9a4269b59d9ee2a31b39c4e15?Expires=1679875200&Signature=kb~Mk-8TF~7rbTy592yk4XWS2T7nIUvMnnzPBPmviPU-3LcdlBh6qAgb3ZQ6DrUqpLi7TjnJb8obLsdTbcQSCyAXj9UR396aeykhNWGQ2jEANEEKfcBvFB2Vx7763oYUdhNF~BE2GW2BoRvpWxh1oxvXT3uoSEjq5fVaYzwBPpW8d0oxUg6tNDdQD52c4Nl3BJ8R5iBHYy8JZ4tevyijylAKu8L24MBszpLU7az1vXiVXuTtMnz2eSHeshH~faPKnuOyaZCFd3JvzsFhFaDxHL~A-vc7UnO-5VJJ2-UhWGwjhpqsaEt4M12g0pH~wY97~3Tpd-f5KFEbeD6JmJtgBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '________ _________ _________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 6,
      img: 'https://s3-alpha-sig.figma.com/img/6e30/91d2/a8065611831ddc4e08dd44184431a605?Expires=1679875200&Signature=PXYe3tCdj1WBQv9jiYnn0RwVJmD8ywXEYp67NwYPls71Pge~X7emJqnh~fJJWJztzWgxV7Njpfs3KtLqYNTKTlXa-SQbFYD2BFqGpZ0JCYVWo0cEfDT1NNFHdZT-lOjvaQxSML6BzivMa-3Mz4bGAlUDuk0YuSBPTL0zsHqhpYCrKRM2fqKkt7MQq88m-XGsi2BhPSwk8jQkfIsokK-HuncF3NK52e1Gkj0NexmFN9R-jSifOXf5nLctdnYojEqVT4FhuJWY6AU2hIUBHAJAauz-pQVyBhHBTYlNygwvhhxQawHz0oCDmoFnm0BvaY6bic~sXGQyV-Rbo-K~sU4YQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '____ _____ ____ _____',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 7,
      img: 'https://s3-alpha-sig.figma.com/img/6e30/91d2/a8065611831ddc4e08dd44184431a605?Expires=1679875200&Signature=PXYe3tCdj1WBQv9jiYnn0RwVJmD8ywXEYp67NwYPls71Pge~X7emJqnh~fJJWJztzWgxV7Njpfs3KtLqYNTKTlXa-SQbFYD2BFqGpZ0JCYVWo0cEfDT1NNFHdZT-lOjvaQxSML6BzivMa-3Mz4bGAlUDuk0YuSBPTL0zsHqhpYCrKRM2fqKkt7MQq88m-XGsi2BhPSwk8jQkfIsokK-HuncF3NK52e1Gkj0NexmFN9R-jSifOXf5nLctdnYojEqVT4FhuJWY6AU2hIUBHAJAauz-pQVyBhHBTYlNygwvhhxQawHz0oCDmoFnm0BvaY6bic~sXGQyV-Rbo-K~sU4YQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: true,
      views: 10,
      time: '2 mins ago',
      status: '_____________________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 8,
      img: 'https://s3-alpha-sig.figma.com/img/6e30/91d2/a8065611831ddc4e08dd44184431a605?Expires=1679875200&Signature=PXYe3tCdj1WBQv9jiYnn0RwVJmD8ywXEYp67NwYPls71Pge~X7emJqnh~fJJWJztzWgxV7Njpfs3KtLqYNTKTlXa-SQbFYD2BFqGpZ0JCYVWo0cEfDT1NNFHdZT-lOjvaQxSML6BzivMa-3Mz4bGAlUDuk0YuSBPTL0zsHqhpYCrKRM2fqKkt7MQq88m-XGsi2BhPSwk8jQkfIsokK-HuncF3NK52e1Gkj0NexmFN9R-jSifOXf5nLctdnYojEqVT4FhuJWY6AU2hIUBHAJAauz-pQVyBhHBTYlNygwvhhxQawHz0oCDmoFnm0BvaY6bic~sXGQyV-Rbo-K~sU4YQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '__________ __________',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 9,
      img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      status: '____ _____ ____ _____',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
    {
      id: 10,
      img: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      seen: false,
      views: 0,
      time: '2 mins ago',
      //   status: 3,
      status: '____ _____ ____ _____',
      imgPic: `https://images.unsplash.com/photo-1678101629507-10cb3ba27fd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8UzRNS0xBc0JCNzR8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    },
  ]


  return (
    <div className="bg-gray-200">
      <section>
        <div className="border-b-2 border-[#E4E4E4] ">
          <nav className="w-[100%] md:w-[70%] lg:w-[50%] m-auto p-">
            <ul className="flex w-full justify-between font-semibold ">
              <li className="border-b-4 border-[#2B365A] text-[#2B365A] p-4">
                Gallary
              </li>
              <li className="text-[#545361] p-4">Publish</li>
              <li className="text-[#545361] p-4">About</li>
              <li className="text-[#545361] p-4">Contact</li>
            </ul>
          </nav>
        </div>
      </section>
      <section>
        <div className="flex item-center justify-between w-[90%] m-auto  py-6">
          <div className="">
            <h1 className="text-[#2B365A] font-semibold border-l-4 p-2  border-l-[#41E233]">
              Clip
            </h1>
            <p className="text-[#999999] p-2">
              SHowing here are clip of people you are connected with.
            </p>
          </div>
          <div className="text-[#999999]">
            <h1>Manage</h1>
          </div>
        </div>
      </section>

      <section>
        {/* <div className="grid relative w-5/6 p-4 m-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap- "> */}
        <div className="flex flex-grow relative mx  w-[90%] overflow-clip p-4 m-auto   gap- ">
          {post?.map((x) => (
            <div className="m-2  relative">
              <div
                className="wrapper_header overflow-hidden  max-w-   relatives rounded-[6px] "
                style={{
                  // backgroundColor:'red',
                  height: '222px',
                  width: '150px',
                  backgroundImage: `url(${x.img})`,
                  overflow: 'hidden',
                  //   objectFit: 'cover',
                }}
              >
                <div className="top-[0%] absolute px-1 text-[#d9d9d9] text-l flex w-full justify-between items-center ">
                  <p className="w-[100%]  flex-grow ">{x.status} </p>
                </div>
                <div className="top-[15%] absolute px-4 text-gray-400 w-full flex items-center justify-between ">
                  <div className="">
                    <img src={x.imgPic} className="w-[24px] h-[24px]" alt="" />
                  </div>
                  <p>
                    <svg
                      width="3"
                      height="18"
                      viewBox="0 0 3 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 3C2.32843 3 3 2.32843 3 1.5C3 0.671573 2.32843 0 1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3Z"
                        fill="white"
                      />
                      <path
                        d="M1.5 11C2.32843 11 3 10.3284 3 9.5C3 8.67157 2.32843 8 1.5 8C0.671573 8 0 8.67157 0 9.5C0 10.3284 0.671573 11 1.5 11Z"
                        fill="white"
                      />
                      <path
                        d="M1.5 18C2.32843 18 3 17.3284 3 16.5C3 15.6716 2.32843 15 1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18Z"
                        fill="white"
                      />
                    </svg>
                  </p>
                </div>
                <div className="top-[50%] absolute px-4 text-[#fff] text-sm ">
                  <p className="text-ce ">No caption Needed</p>
                  <p>{x.time} </p>
                </div>
                {x.seen ? (
                  <>
                    <div className="top-[80%] text-md right-3 absolute text-[#fff]">
                      {/* <BiShow className=" " /> */}
                      <BiShow className="mx-auto" />
                      <p className="text-[#fff]  ">{x?.views} view </p>
                    </div>
                  </>
                ) : 
                null}

                <div className="bg-[#D9D9D inner_wrapp rounded-b-2xl absolute  lg:h-[5rem] ">
                  <div className=" text-center items-center mx-3">
                    <div className="m-o">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
