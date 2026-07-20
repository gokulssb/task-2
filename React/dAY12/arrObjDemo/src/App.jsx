import React, { useState } from 'react'

export const App = () => {

  const[arr,setArr]=useState(["Gokul","Harish","Lokesh"])
const clickChange=()=>{
    const data=[...arr]
  data[1]="ganesh"
  data.push("yeswanth")
  setArr(data)
}


const [arrobj,setArrobj]=useState([{name:"Gokul",course:"java"},{name:"Harish",course:"css"},{name:"LOkesh",course:"react"}])
  
const clickupdate=()=>{
const datas=arrobj.map((e,i)=>i===0?{...e,name:"ILAKIYA",course:"fullstack"}:e)

setArrobj(datas)

}


  return (
   <>
<div>
  
 <p>{arr.join("-")}</p>
   
   <button onClick={clickChange}>change</button>

   {arr.map((e,i)=>(
    <div key={i+1}>
      <h1>{e}</h1>
    </div>
   ))}


   </div>


   <div className='bg-amber-400 mx-15 p-5'>
    
   
   
<div className='flex bg-amber-800 p-3 roundered p-5 justify-between'>
  
   {arrobj.map((e,i)=>(
    <div key={i+1}>
      <h1>{e.name}</h1>
      <h1>{e.course}</h1>
    </div>
   ))}
</div>

<button className='bg-blue-400 rounded-2xl p-3' onClick={clickupdate}>change</button>
    
   </div>



   </>
  )
}
export default App
