import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      
      <nav className='w-full shadow-md bg-white'>
        <Link to="/program"></Link>
        <div className='max-w-7xl mx-auto flex justify-between items-center py-4 px-6"'>
          <ul className='hidden md:flex gap-8 font-medium'>
            <li>Home</li>
            <li>About</li>
            <li>Training</li>
            <li className='text-orange-500'>Program</li>
            <li>Contact</li>
            <li>More</li>
          </ul>
          <div className='flex gap-3'>
            <button className='bg-blue-500 text-white px-5 py-2 rounded'>Verify Certificate</button>


            <button className='bg-orange-500 text-white px-5 py-2 rounded'>Register Now</button>
          </div>

        </div>
      </nav>


    </div>
  )
}

export default Navbar
