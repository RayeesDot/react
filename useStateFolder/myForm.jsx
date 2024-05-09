import React, {useState} from 'react'
const Form1 =()=>{
    const [user,setUser] = useState(
        {
             name : '',
             email : '',
             password :''
        }
    )

 
    console.log(user);
    const handleChange=(event)=>{
        setUser({
                ...user,
                [event.target.name]:event.target.value
            } )

    }

     const [array,setArray]=useState([]) //In React, state allows you to store and manage component-specific data. In this case, array seems to be used to store an array of objects, where each object represents the user input (name, email, password) from the form.


    const handleSubmit =(event)=>{
        event.preventDefault();

   setArray([
    ...array,
    user
   ])
       
    }

    console.log(array);

    return(
        <>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='enter name'  onChange={handleChange}   />
        <input type="text" name='email' placeholder='enter email'   onChange={handleChange} />
        <input type="text" name='password' placeholder='enter password'onChange={handleChange} />
 
        <button type='submit' >submit</button>
      </form>
      <h1>{user.name}</h1>
      <h1>{user.email}</h1>

      <table>
        <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
        </tr>
        {array.map((item,index)=>(<tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
            <td><button>edit</button></td>
        </tr>))}
      </table>
      </>
    )
}
export default Form1