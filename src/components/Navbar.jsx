import React from 'react'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='  bg-slate-900 text-white '>
      <div className="mycontainer flex  justify-between  items-center px-4 py-5 h-14">

      <Logo/>

        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/about">About</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-700 my-5 rounded-full flex justify-between px-1 gap-1 md:px-2 md:gap-2 items-center ring-1 '>
          <img className='invert w-8 md:w-10 p-1' src="/icons/github.svg" alt="github logo" />
          <span className='font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
