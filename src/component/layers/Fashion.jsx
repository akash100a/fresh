import React from 'react'
import Container from './Container'
import Fashion1 from '../../../public/fashion.png'
import Fashion2 from '../../../public/fashion2.png'
import Fashion3 from '../../../public/fashion3.png'

const Fashion = () => {
    return (
        <div className='pb-[335px]'>
            <Container className='flex slg:justify-between flex-col slg:flex-row'>
                <div className='relative'>
                    <div className="w-[41.25rem] h-[42.88rem] rounded-tl-[150px] overflow-hidden bg-red-300">
                        <img src={Fashion1} alt="" />
                    </div>
                    <img className='absolute right-[-90px] top-[-48px] z-[-1]' src={Fashion2} alt="" />
                    <div className="w-full mt-3 slg:mt-0 slg:w-[49.56rem] slg:h-72 bg-[#feecc8] rounded-2xl slg:absolute slg:top-[614px] static slg:right-[-664px] z-[-1] slg:flex items-center px-[60px] justify-between">
                        <div className="">
                            <h2 className='font-bold text-[4.00rem] leading-none text-[#000] mb-[28px]'>2010</h2>
                            <p className='font-medium text-[1.75rem] leading-8 text-[#000]'>Founded</p>
                        </div>
                        <img className='hidden slg:block' src={Fashion3} alt="" />
                        <div className="">
                            <h2 className='font-bold text-[4.00rem] leading-none text-[#000] mb-[28px]'>5000+</h2>
                            <p className='font-medium text-[1.75rem] leading-8 text-[#000]'>Product Sold</p>
                        </div>
                        <img className='hidden slg:block' src={Fashion3} alt="" />
                        <div className="">
                            <h2 className='font-bold text-[4.00rem] leading-none text-[#000] mb-[28px]'>4500+</h2>
                            <p className='font-medium text-[1.75rem] leading-8 text-[#000]'>Best Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="right pl-[124px] mt-[71px]">
                    <h2 className='max-w-[437px] font-bold text-[4.00rem] leading-none text-[#000] mb-[63px]'>Best Fashion
                        Since 2010</h2>
                    <p className='max-w-[443px] font-semibold text-2xl text-[#000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                </div>
            </Container>
        </div>
    )
}

export default Fashion