import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='bg-amber-300 flex justify-between items-center p-5'>
        <div className='bg-amber-50 p-2 rounded-2xl mx-15'>
            logo
        </div>
        <div className='flex gap-5'>
            <Link to="/home">HOME</Link>
            <Link to="/banner">BANNER</Link>
        </div>
    </div>
    </>
  )
}

export default Navbar