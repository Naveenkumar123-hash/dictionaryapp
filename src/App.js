import React from 'react'
import Navbar from './Components/Navbar'
import Dictionary from './Components/Dictionary'
import History from './Components/History'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Dictionary/>} />
        <Route path="*" element={<Dictionary/>} />
        <Route path="/history" element={<History/>}/>
      </Routes>
    </div>
  )
}

export default App