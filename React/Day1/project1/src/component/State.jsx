import React, { useState } from 'react'

const State = () => {
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const [show,setShow]=useState(false)

const sumitfor=(e)=>{
    e.preventDefault
    setShow(true);
}

  return (
  <>
    <form onSubmit={sumitfor}>
      
      <label htmlFor="">name</label>
      <input type="text" onChange={(e)=>setName(e.target.value)} />

      <label htmlFor="">email</label>
      <input type="email" onChange={(e)=>setEmail(e.target.value)} />

            <label htmlFor="">password</label>
      <input type="password" onChange={(e)=>setPassword(e.target.value)} />

  <button type='submit'>register</button>

    </form>

    {show &&(
        <div>
            <h1>user details</h1>
            <p>{name}</p>
            <p>{email}</p>
            <p>{password}</p>
        </div>
    )}

  </>
  )
}

export default State