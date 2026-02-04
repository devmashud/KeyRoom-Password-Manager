import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
// import About from './routes/About'
// import About from '../pages/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col relative mb-[-20px]">

      {/* GLOBAL BACKGROUND */}
      <div className="absolute inset-0 -z-10 w-full bg-green-100 
        bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),
             linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] 
        bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 m-auto 
          h-[310px] w-[310px] rounded-full 
          bg-fuchsia-400 opacity-20 blur-[100px]" />
      </div>

      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Manager />} />
        </Routes>
      </main>

      <Footer />

    </div>
  )
}

export default App
