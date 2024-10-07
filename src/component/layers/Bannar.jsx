import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import Bannarimg from '../../../public/bannar.jpg'
import Bannarillus from '../../../public/bannarillus.png'

const Bannar = () => {
    return (
        <>
            <div className="bannar bg-[#fae3b6] pt-[236px] pb-[185px]">
                <Container className='flex justify-between items-center'>
                    <div className="left">
                        <h1 className='max-w-[556px] font-semibold text-[4.00rem] leading-none text-[#000]'>Find The Best Fashion Style
                            For You</h1>
                        <p className='max-w-[530px] font-normal text-[1.38rem] leading-7 text-[#000] mt-[38px] mb-[76px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. </p>
                        <Link className='font-semibold text-2xl text-[#fff] rounded-xl py-[25px] px-[91px] bg-[#000]' to='#'>SHOP NOW</Link>
                    </div>
                    <div className="right relative">
                        <div className="rounded-none w-[33.44rem] h-[40.19rem] bg-red-100 rounded-bl-[195px] overflow-hidden relative z-10">
                            <img src={Bannarimg} alt="" />
                        </div>
                        <img className='absolute right-[470px] top-[400px] z-0' src={Bannarillus} alt="" />
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Bannar