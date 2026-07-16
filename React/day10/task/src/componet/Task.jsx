import React, { useState } from 'react'

const Task = () => {

const [count,setCount]=useState(0)
 const link=()=>{
    setCount(count+1)
 }
  return (
    <>
    <button onClick={link}>UPDATE COURSE</button>
    <p>{count}</p>
    <Light/>
    </>
  )
}

export default Task


const Light = () => {

const [theme,setTheme]=useState("light mode")
 const toggle=()=>{
    if(theme ==="light mode"){
        setTheme("Dark mode")
    }else{
         setTheme("light mode")
        
    }
 }
  return (
    <>
    <button onClick={toggle}>color change</button>
    <p>{theme}</p>
    </>
  )
}