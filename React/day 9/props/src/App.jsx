import React from 'react'
import Navbar from './compontents/Navbar'
import Product from './compontents/Product'
import { Route, Routes } from 'react-router-dom'
import Cards from './compontents/Cards'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/home' element={<Product/>}/>
       <Route path='/banner' element={<Cards/>}/>

    </Routes>
    
  
    </>
  )
}

export default App