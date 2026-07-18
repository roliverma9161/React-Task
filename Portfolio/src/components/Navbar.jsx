import React from 'react'
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
        <nav className='w-full'>
            <Link to="/home"></Link>
            <Link to="/about"></Link>
            <Link to="/skills"></Link>
            <Link to="/project"></Link>
            <Link to="/contact"></Link>
            <div className='max-w-7xl mx-auto flex justify-between py-6 px-20'>
                <h1 className=' text-black font-bold'>Portfolio</h1>
                <ul className=' md:flex text-black gap-8 font-bold items-center'>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contct Me</li>
                </ul>
                <button className='bg-black px-7 py-3 text-white'> Resume ↓</button>
                <button className='bg-black px-7 py-3 text-white'>register</button>

            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
