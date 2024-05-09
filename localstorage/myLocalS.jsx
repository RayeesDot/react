
import React,{useEffect, useState} from 'react'
// import Localstorage from './Localstorage'

const MyLocalStorage = () => {
    localStorage.setItem("keyName","ValueRayees")
    localStorage.setItem("keyRollNO","786")
    const RollNo =   localStorage.getItem("keyRollNO")
    const username = localStorage.getItem("keyName")

    const varname = {name:"rayees"}
    const [localData1,setLocalData] = useState({})
    const setFun=()=>{
       localStorage.setItem('key3',JSON.stringify(varname))
    }
    const getFun=()=>{
      const data= JSON.parse(localStorage.getItem('key3'))
      setLocalData(data)
    }
    const removeData =()=>{
      localStorage.removeItem('key3') 
     
  }


  useEffect(()=>{
    getFun()
  },[])
  console.log(username, localStorage.getItem("keyRollNO"));

  return (
    <div>
  <p>{username}</p>
  <p>{RollNo}</p>
  <p>{localData1?.name}</p>   {/* In JavaScript, the `?.` is called the optional chaining operator. It's used to access properties of an object when it's uncertain whether the object or any of its nested properties are null or undefined. In your example, `{localData1?.name}`, it means "access the `name` property of `localData1` if `localData1` is not null or undefined; otherwise, return undefined without throwing an error." This helps to avoid errors like "cannot read property 'name' of null" or "cannot read property 'name' of undefined" by gracefully handling cases where the object might not be fully defined. */}
  <button onClick={setFun}>setData</button>
  <button onClick={getFun}>getData</button>
  <button onClick={removeData}>removeData</button>
    </div>
  )
}

export default MyLocalStorage

