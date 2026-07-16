import React from 'react'

const Cards = () => {
  return (
    <>
   <div className='bg-amber-900 p-5 flex items-center justify-between  '>
    <div className='bg-blue-200 p-5 mx-15 w-50 h-50 '>
        <h1>IPHONE</h1>
        <p>This mobile is highly sequerd</p>
        <button>click me</button>
    </div>
    <div className='bg-blue-200 p-5 mx-15 w-50 h-50 '>
        <h1>HP</h1>
        <p>Gaming laptop</p>
        <button>click me</button>
    </div>
   < div className='bg-blue-200 p-5 mx-15 w-50 h-50 '>
        <h1>AC</h1>
        <p>High colling</p>
        <button>click me</button>
    </div>
   </div>
    </>
  )
}

export default Cards