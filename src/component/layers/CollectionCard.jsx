import React from 'react'
import { Link } from 'react-router-dom'

const CollectionCard = ({ img, text }) => {
    return (
        <>
            <div className='relative'>
                <div className='rounded-2xl slg:w-80 slg:h-96 overflow-hidden'>
                    <img className='w-full h-full object-cover' src={img} alt="" />
                </div>
                <Link className='absolute left-1/2 bottom-10 -translate-x-1/2 font-normal text-2xl text-[#000] rounded-2xl slg:w-[300px] w-[90%] center h-14 bg-[#fff] inline-block' to=''>{text}</Link>
            </div>
        </>
    )
}

export default CollectionCard