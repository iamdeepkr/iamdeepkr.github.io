import React from 'react'
import './Experience.css'

const ExperienceRow = (props) => {
  return (
    <>
      <div className='card w-full md:w-[48%] dark:bg-[#ffffff2c] bg-[#e6e6e6] p-4 md:p-6 flex md:flex-row flex-col gap-4 items-center hover:shadow-xl shadow-md border border-gray-300 dark:border-gray-600 hover:scale-105 transition-all duration-300 ease-in-out'>

        <div className='flex items-center justify-center flex-col w-full md:w-[30%]'>
          <div className='flex justify-center mb-5'>
            <img  draggable="false"src={props?.image} className='md:w-[7vw] w-[5rem] h-[3rem] p-1 object-contain bg-white' alt="" srcset="" />
          </div>
          <div className='-mt-5 font-semibold text-center'>
            {props?.title}
          </div>
          <div className='flex flex-row items-center text-xs md:text-sm gap-1 md:gap-2 mt-2 '>
            <span>
              ({props?.fDate}
            </span>
            <span>-</span>
            <span>
              {props?.tDate})
            </span>
          </div>
        </div>

        <div className='flex flex-col w-full md:w-[65%] md:border-l pl-4'>
          <span className='font-bold uppercase border-b pb-1 mb-2'>
            {props?.post}
          </span>
          <span className='mb-2 w-full text-sm'>
            {props?.desc}
          </span>
          <span className='font-semibold italic'>
            {props?.skill}
          </span>
        </div>

      </div>
    </>
  )
}

export default ExperienceRow