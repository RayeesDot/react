import React, { useEffect, useState } from 'react'

const UseEffect = () => {


const [counter,setCounter]=useState(0)
const [counter2,setCounter2]=useState(0)
const [counter23,setCounter23]=useState(0)
const [counterRefresh,setCounterRefresh]=useState(0)


const inc = ()=>{
    console.log('am fun 1');
    setCounter(counter+1)
}
const inc2 = ()=>{
    console.log('am fun 2');

    setCounter2(counter2+1)
}
const inc23 = ()=>{
    console.log('am fun 3');

    setCounter23(counter23+1)
}

 useEffect(() => {
    inc()
    
 }, [counter2]);
 
 const onRefresh=()=>{
 setCounterRefresh(counterRefresh+1)
 }
 useEffect(()=>{
    onRefresh()
 },[])  // iak barr chalega hi chalega

  return (
    <div>
      i am useEffect
      <p>conuter value ---- {counter}</p>
      <p>conuter2 value ---- {counter2}</p>
      <p>conuter23 value ---- {counter23}</p>
      <p>counterRefresh value -----{counterRefresh}</p>

      <button onClick={inc2}>update counter 2</button>
      <button onClick={inc23}>update counter 23</button>
    </div>
  )
}

export default UseEffect
