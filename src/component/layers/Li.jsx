import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({litext,lito}) => {
  return (
    <li><Link className='opacity-90 font-semibold text-2xl text-[#000] capitalize' to={lito}>{litext}</Link></li>
  )
}

export default Li