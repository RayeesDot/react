import React, { useEffect, useState } from 'react'

const Localstorage = () => {

const data ={name:"abvdsfdddddddddddsfsfsdcd"}
const [localData,setLocalData]=useState({})
const setData =()=>{
    localStorage.setItem('value',JSON.stringify(data))
}
const getData =()=>{
   const value= JSON.parse( localStorage.getItem('value'))
   setLocalData(value)
   console.log(value);
}
const removeData =()=>{
    localStorage.removeItem('value') 
   
}


useEffect(()=>{
    getData()
},[])
  return (
    <div>
<p>{localData?.name}</p>
        <button onClick={setData}>setData</button>
        <button onClick={getData}>getData</button>
        <button onClick={removeData}>removeData</button>
      
    </div>
  )
}

export default Localstorage
