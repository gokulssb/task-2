import React, { useState } from 'react'
import Task from './componet/Task'

const Click = () => {

const[state,setState]=useState("gokul")


const handle=()=>{

  setState("harish")

console.log(state);


}

  return (
    <>
    <button onClick={handle}>click me</button>
    <p >{ state ? <p> This is true</p>: <p>This is undefine</p>}</p>


{state && 
<div>
  <h1>this is true</h1>
</div>
}

<Task/>
    </>

  )
}

export default Click


