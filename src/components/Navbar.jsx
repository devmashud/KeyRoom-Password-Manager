import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-4 bg-pink-200 '>
        <div className="logo font-bold">KeyRoom</div>
        <ul>
            <li className='flex gap-4'>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
