import React, { useState } from 'react'

export const App = () => {
  const[theme,setTheme]=useState(true)

const [arr,setArr]=useState([1,2,3,4,5])

const [obj,setObj]=useState({name:"gokul",age:22,course:"java"})

  const changeTheme=()=>{
    setTheme(false)
  }

  const change=()=>{
    
     const copy=[...arr.reverse()]
    copy[2]=19
    copy.push(34)

setArr(copy)
  }


const changeName=()=>{

setObj({...obj,name:"harish"})

console.log(setObj);

}

const changetext=()=>{
  setObj({...obj,course:"node"})
}
 






  return (
  <>
  <p>{theme}</p>
  <p className={theme?"bg-amber-400":"bg-blue-300"}>{theme?"this is true":"this is false"}</p>
  <button onClick={changeTheme}>CLICK ME</button>
<div className='gap-10 bg-amber-400 p-3 mx-15 '>
  <div>
    <p>{arr}</p>
    <button className=' bg-amber-200 w-80 text-black rounded-2xl' onClick={change}>click change</button>
  </div>

  <div>
    {arr.map((e,i)=>(
      <div key={i+1}>
<h1>{e}</h1>
      </div>
    ))}
  </div>
  </div>
<div className='flex p-5 bg-blue-900 mx-10 '>
  <div className=' bg-amber-900 p-4 w-50 gap-10 mx-50'>
    <div className='p-3 bg-blue-300 items-center justify-center'>
      <p>{obj.name}</p>
      
            <button className='bg-amber-100 text-10 rounded-2xl p-1 '  onClick={changeName}>click change</button>
    </div>
  </div>

  
  <div className=' bg-amber-900 p-4 w-50 gap-10 mx-50'>
    <div className='p-3 bg-blue-300 items-center justify-center'>
      <p>{obj.course}</p>
            <button className='bg-amber-100 text-10 rounded-2xl p-1 '  onClick={changetext}>click change</button>
    </div>
  </div>
  </div>





  </>
  )
}
export default App
