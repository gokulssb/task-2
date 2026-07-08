import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Help from './components/Help'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/id' element={<About/>}/>
      <Route path='/help' element={<Help/>}/>

     
    </Routes>
    </>
  )
}

export default App