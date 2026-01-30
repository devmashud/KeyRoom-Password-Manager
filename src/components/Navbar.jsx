import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='  bg-slate-700 text-white '>
      <div className="mycontainer flex  justify-between  items-center px-4 py-5 h-14">

      <Logo/>

        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/about">About</a>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
