import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { NavLink } from 'react-router'

function Header() {


  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <>
      <header className={`${theme == 'light' ? 'bg-white' : 'bg-black'} shadow-md`}>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
          <h1 className='text-2xl font-bold text-blue-600'>React Hooks
          <span className='text-gray-300'>{theme}</span>
          </h1>
          <nav className='flex items-center gap-4'>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/useState">NumberCounter</NavLink>
            <NavLink to="/useeffect" >Random User</NavLink>


            <button className={`py-2 px-5 border rounded-md ${theme == 'light' ? 'text-black' : 'text-white'}`} onClick={toggleTheme}> Change Mode</button>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
