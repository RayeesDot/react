// import Password from 'antd/es/input/Password'
import React, { useState } from 'react'

const Form = () => {
// method 1

// const [data,setData]=useState({
//     name:'',
//     email:'',
//     password:''
// })

 

// const handleChange = (e)=>{
//     console.log(e);
// setData({
//     ...data,
//     [e.target.name]:e.target.value
// })
// }

 

// method 2
const [ name,setName]=useState('')
const [ email,setEmail]=useState('')
const [ password,setPassword]=useState('')

const changeName = (e)=>{
    setName(e.target.value)
}
const changeEmail = (e)=>{
    setEmail(e.target.value)
}
const changepass = (e)=>{
    setPassword(e.target.value)
}
console.log({name,email,password});
  return (
    <div>

        <form >

            <input type="text" name="name" placeholder='name'  onChange={changeName}/>
            <input type="text" name="email" placeholder='email'  onChange={changeEmail}/>
            <input type="text" name="password"  placeholder='password' onChange={changepass}/>
{/* <button>submit</button> */}
        </form>
        {/* <h1>{name}</h1> */}
    </div>
  )
}

export default Form
