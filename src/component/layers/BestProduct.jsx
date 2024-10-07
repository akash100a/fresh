import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom';

import Best1 from '../../../public/best1.png'
import Best2 from '../../../public/best2.png'
import BestCard from './BestCard';

const BestProduct = () => {
  return (
    <div className='pt-[36px] pb-[191px] bg-[#cfa485]'>
      <Container className='flex justify-between'>
        <div>
          <h2 className='max-w-[437px] font-bold text-[4.00rem] leading-none text-[#fff] mb-[43px]'>Best Seller Product</h2>
          <p className='font-bold text-2xl text-[#fff] max-w-[437px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus.</p>
          <Link to='#' className='rounded-xl w-80 h-20 bg-[#000] mt-[40px] center font-semibold text-2xl text-[#fff]'>Learn MORE</Link>
        </div>
        <div className='flex items-start gap-8 mt-[26px]'>
          <BestCard img={Best1} title='Sweater Shirt' del='$45.99' price='$35.99'/>
          <BestCard img={Best2} title='Pants fashion' del='$55' price='$44.99'/>

        </div>
      </Container>
    </div>
  )
}

export default BestProduct