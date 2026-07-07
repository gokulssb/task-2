import React from 'react'
import img from "../assets/images.jpg"
import "../App.css"
const Cards = () => {
  return (
    <>
    <div className='p-3'>
        <div className='bg-amber-200 text-balck p-5 flex justify-between' >
            <div className='flex flex-col text-center gap-2'>
               <img src={img} className='h-50 hover:scale-110 transition duration-300' alt="" />
                <h2>PUMA</h2>
                <p>MRP 999</p>
                <button className='bg-sky-300 text-black rounded-2xls'>Buy Now</button>
            </div>
             <div className='flex flex-col text-center gap-2'>
                   <img src={img} className='h-50 hover:scale-110 transition duration-300' alt="" />
                <h2>PUMA</h2>
                <p>MRP 999</p>
                <button className='bg-sky-300 text-black rounded-2xls'>Buy Now</button>
            </div>
             <div className='flex flex-col text-center gap-2'>
                  <img src={img} className='h-50 hover:scale-110 transition duration-300' alt="" />
                <h2>PUMA</h2>
                <p>MRP 999</p>
                <button className='bg-sky-300 text-black rounded-2xls hover:bg-fuchsia-200'>Buy Now</button>
            </div>
             <div className='flex flex-col text-center gap-2'>
                <img src={img} className='h-50 hover:scale-110 transition duration-300' alt="" />
                <h2>PUMA</h2>
                <p>MRP 999</p>
                <button className='bg-sky-300 text-black rounded-2xls'>Buy Now</button>
            </div>
             <div className='flex flex-col text-center gap-2'>
                 <img src={img} className='h-50 hover:scale-110 transition duration-300' alt="" />
                <h2>PUMA</h2>
                <p>MRP 999</p>
                <button className='bg-sky-300 text-black rounded-2xls'>Buy Now</button>
            </div> <div className='flex flex-col text-center gap-2'>
                   <img src={img} className='h-50 hover:scale-110 transition duration-300' alt="" />
                <h2>PUMA</h2>
                <p>MRP 999</p>
                <button className='bg-sky-300 text-black rounded-2xls'>Buy Now</button>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default Cards

