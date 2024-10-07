import React from 'react'
import Li from './Li'
import { Link } from 'react-router-dom'
import Container from './Container'


const Navbar = () => {
  return (
    <>
      <nav className='absolute w-full top-[47px]'>
        <Container className='flex justify-between items-center'>
          <div className="logo">
            <Link className='font-semibold text-5xl text-[#000]' to='#'>Fresh</Link>
          </div>
          <ul className='flex items-center gap-14'>
            <Li litext='men' />
            <Li litext='women' />
            <Li litext='kids' />
            <Li litext='collection' />
            <Li litext='trends' />
          </ul>
          <div className="flex gap-3">
            <Link className='rounded-xl w-32 h-14 center border border-[#fdbb57] font-semibold text-2xl text-[#050505]' to=''>Login</Link>
            <Link className='rounded-xl w-32 h-14 center bg-[#fdbb57] font-semibold text-2xl text-[#050505]' to='#'>Sign Up</Link>
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Navbar