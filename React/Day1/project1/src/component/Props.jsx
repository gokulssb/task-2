import React, { useState } from 'react'

const Props = () => {
    const[count,setCount]=useState(0);
    const arr=["gokul",101,"BSC",60,"lokesh",11,"BEE",65,"ganesh",111,"HTML",80,"harish",121,"BBA",70]
    
  return (
   <>
   <h1>Count:{count}</h1>
   <button onClick={() =>setCount(count+1)}>Increament</button>
   <button onClick={() =>setCount(count-1)}>Decreament</button>
   <button onClick={() =>setCount(0)}>Reset</button>
   <h1>student deatils</h1>

 <div>
      {arr.map((e,i)=>(
        <h1>{e}</h1>
      ))}
      <br />
 </div>


   
   </>
  )
}

export default Props