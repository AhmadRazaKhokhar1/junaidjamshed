"use client"
import { useState } from "react"

export default function Client() {
    const [counter, setCounter] = useState(0)
  return (
    <div><button onClick={()=>{
        setCounter(prev => prev+1)
    }}>{counter}</button></div>
  )
}
