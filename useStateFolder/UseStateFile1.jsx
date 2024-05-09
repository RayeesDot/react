import { useState } from "react";

import React from 'react'

const UseState = () => {
    const [count,setCount]=useState(0)
    const [sizeAndPad,setPadding] = useState(7)
    const incFunc=()=>{
        setCount(count+1)
        setPadding(sizeAndPad+5)
    }
    const decFunc = ()=>{
        setCount(count-1)
        setPadding(sizeAndPad-5)
    }
    const resetFunc = ()=>{
        setCount(0)
        setPadding(7)
    }
  return (
    <div>
    <button style={{padding: sizeAndPad,fontSize:sizeAndPad, background:'#ff'+sizeAndPad+sizeAndPad}} onClick={incFunc}>inc</button>
    <button onClick={decFunc} >dec</button>
    <button onClick={resetFunc}>reset</button>
    <p>{count}</p>
    </div>
  )
}

export default UseState
