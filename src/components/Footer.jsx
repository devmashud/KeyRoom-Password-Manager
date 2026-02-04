import React from 'react'
import Logo from './Logo'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mb-[-5px] ">
  <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

    {/* Brand */}
    <div>
      <h2 className="text-2xl font-bold text-white"><Logo/></h2>
      <p className="mt-3 text-sm text-gray-400">
        Securely store and manage your passwords in one safe place.
      </p>
    </div>

    {/* Links */}
    <div>
      <h3 className="text-white font-semibold mb-3">Quick Links</h3>
      <ul className="space-y-2 text-sm">
        <li><a href="/" className="hover:text-amber-400 transition">Home</a></li>
        <li><a href="/about" className="hover:text-amber-400 transition">Manager</a></li>
        <li><a href="#" className="hover:text-amber-400 transition">Privacy</a></li>
        <li><a href="#" className="hover:text-amber-400 transition">Support</a></li>
      </ul>
    </div>

    {/* Info */}
    <div>
      <h3 className="text-white font-semibold mb-3">Security</h3>
      <p className="text-sm text-gray-400">
        Your credentials stay private. Built with modern web security practices.
      </p>
    </div>

  </div>

  {/* Bottom bar */}
  <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
    © {new Date().getFullYear()} KeyRoom — All rights reserved.
  </div>
</footer>

  )
}

export default Footer
