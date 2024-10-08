import React, { useState } from 'react'
import Li from './Li'
import { Link } from 'react-router-dom'
import Container from './Container'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  let [open, Setopen] = useState(true);
  let handlerClick =()=>{
    Setopen(!open);
  }
  return (
    <>
      <nav className='absolute w-full slg:top-[47px] bg-slate-200 slg:bg-transparent py-5 z-[99999]'>
        <Container className='flex flex-col slg:flex-row slg:justify-between slg:items-center'>
          <div className="logo flex justify-between slg:block">
            <Link className='font-semibold text-5xl text-[#000]' to='#'>Fresh</Link>
            <button className='slg:hidden' onClick={handlerClick} type='button'>
              {
                open ? <GiHamburgerMenu className='text-[30px]' />:
                  <IoCloseSharp className='text-[30px]' /> 
              }
            </button>
          </div>
          <div className={ `slg:flex slg:flex-grow slg:visible slg:h-full ${open ? "invisible h-0" :"visible h-full"}`}>
            <ul className='my-4 gap-1 slg:my-0 mx-auto flex flex-col slg:flex-row slg:items-center slg:gap-14'>
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
          </div>
        </Container>
      </nav>
    </>
  )
}

export default Navbar