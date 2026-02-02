import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import { Routes, Route } from 'react-router-dom'
// import About from './routes/About'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <Routes>

      <Route path="/" element={
        <>
          <Navbar />
          <Manager />
        </>
      } />

    
      {/* <Route path="/about" element={<About />} /> */}

    </Routes>
    </>
  )
}

export default App
