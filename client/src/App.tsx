import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomepageGaming from './Pages/HomepageGaming'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
      <Navbar />
      <Routes>
       
          <Route path="/" element={<HomepageGaming/>} />
        
      </Routes>
    </div>
  )
}

export default App
