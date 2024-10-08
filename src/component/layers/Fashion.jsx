import React from 'react'
import Container from './Container'
import Fashion1 from '../../../public/fashion.png'
import Fashion2 from '../../../public/fashion2.png'
import Fashion3 from '../../../public/fashion3.png'

const Fashion = () => {
    return (
        <div className='pb-[335px]'>
            <Container className='flex slg:justify-between flex-col slg:flex-row'>
                <div className='xl:relative'>
                    <div className="slg:w-[30rem] xl:w-[41.25rem] slg:h-[38rem] xl:h-[42.88rem] rounded-tl-[150px] overflow-hidden">
                        <img className='w-full h-full object-cover' src={Fashion1} alt="" />
                    </div>
                    <img className='absolute right-[101px] xl:right-[-90px] top-[-48px] z-[-1]' src={Fashion2} alt="" />
                    <div className="slg:w-[30rem] mt-3 xl:mt-0 py-4 xl:py-0 xl:w-[49.56rem] xl:h-72 bg-[#feecc8] rounded-2xl slg:absolute slg:left-[410px] slg:top-1/2 xl:top-[614px] static xl:right-[-664px] z-[-1] flex items-center px-[60px] justify-between gap-3 slg:gap-0">
                        <div className="">
                            <h2 className='font-bold text-[2rem] xl:text-[4.00rem] leading-none text-[#000] mb-1 xl:mb-[28px]'>2010</h2>
                            <p className='font-medium xl:text-[1.75rem] text-[1rem] leading-8 text-[#000]'>Founded</p>
                        </div>
                        <img className='hidden slg:block' src={Fashion3} alt="" />
                        <div className="">
                            <h2 className='font-bold text-[2rem] xl:text-[4.00rem] leading-none text-[#000] mb-1 xl:mb-[28px]'>5000+</h2>
                            <p className='font-medium xl:text-[1.75rem] text-[1rem] leading-8 text-[#000]'>Product Sold</p>
                        </div>
                        <img className='hidden slg:block' src={Fashion3} alt="" />
                        <div className="">
                            <h2 className='font-bold text-[2rem] xl:text-[4.00rem] leading-none text-[#000] mb-1 xl:mb-[28px]'>4500+</h2>
                            <p className='font-medium xl:text-[1.75rem] text-[1rem] leading-8 text-[#000]'>Best Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="xl:pl-[124px] pl-10 mt-[71px]">
                    <h2 className='xl:max-w-[437px] font-bold text-[4.00rem] leading-none text-[#000] mb-[63px]'>Best Fashion
                        Since 2010</h2>
                    <p className='xl:max-w-[443px] font-semibold text-2xl text-[#000]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                </div>
            </Container>
        </div>
    )
}

export default Fashion