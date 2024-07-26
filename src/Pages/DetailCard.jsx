import React from 'react'
import { RxCross2 } from 'react-icons/rx'

const DetailCard = ({ image, heading, content, color, close }) => {
    return (
        <div className='w-full h-full flex justify-center items-center select-none'>
            <div style={{ borderColor: color }} className={` relative md:m-0 m-2 w-full max-h-[95vh] overflow-auto bg-[#fff]/80 dark:bg-[#000]/80 border-2 p-4 md:max-w-[60%] grid grid-cols-12 gap-4`}>

                <div onClick={() => close()} className='absolute cursor-pointer top-0 right-0 bg-red-400 hover:bg-red-500 p-1'><RxCross2 /></div>

                <img loading='lazy' style={{backgroundColor: `${color}33`, borderColor: `${color}CC`}} className='border col-span-12 md:col-span-5 p-2 rounded-md h-full object-contain' src={image} alt="image" srcset="" />

                <div className="col-span-12 md:col-span-7">
                    <h1 style={{ color: color }} className='font-bold text-2xl'>{heading}</h1>
                    <p className=''>
                        {content}
                    </p>
                </div>

            </div>
        </div>
    )
}

export default DetailCard