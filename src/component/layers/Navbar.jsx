import React from 'react'
import Li from './Li'
import { Link } from 'react-router-dom'
import Container from './Container'


const Navbar = () => {
  return (
    <>
      <nav>
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
        <div className="flex">
          <Link>Login</Link>
          <Link>Sign Up</Link>
        </div>
        </Container>
      </nav>
    </>
  )
}

export default Navbar