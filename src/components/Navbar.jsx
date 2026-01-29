import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-around px-4 bg-pink-200 h-13'>
        <div className="logo font-bold">KeyRoom</div>
        <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="/about">About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
