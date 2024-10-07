import React from 'react'
import { IoIosStar } from "react-icons/io";

const BestCard = ({img,title,del,price}) => {
    return (
        <div className="card">
            <div className="rounded-t-[60px] w-96 h-[424px] overflow-hidden">
                <img className='w-full h-full object-cover' src={img} alt="" />
            </div>
            <div className="py-3 bg-[#fff]">
                <div className="flex items-center gap-2 ml-5">
                    <IoIosStar className='w-5 h-5 text-[#ffaf37]' />
                    <IoIosStar className='w-5 h-5 text-[#ffaf37]' />
                    <IoIosStar className='w-5 h-5 text-[#ffaf37]' />
                    <IoIosStar className='w-5 h-5 text-[#ffaf37]' />
                    <IoIosStar className='w-5 h-5 text-[#ffaf37]' />
                </div>
                <h3 className='ml-5 my-2 font-semibold text-[1.38rem] leading-7 text-[#000]'>{title}</h3>
                <div className="flex ml-5 gap-8">
                    <h3 className='font-normal text-2xl text-[#c4c4c4]'>{del}</h3>
                    <h3 className='font-normal text-2xl text-[#000]'>{price}</h3>
                </div>
            </div>
        </div>
    )
}

export default BestCard