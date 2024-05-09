import React, { useState } from 'react';

const Form2 = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [array, setArray] = useState([]);
    const [EditIndex,setEditIndex] = useState(null)

    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       if(EditIndex === null){
        setArray([...array, user]);
       }
        else{
          debugger
        const  UpdateArray = [...array]
        debugger
        UpdateArray[EditIndex]=user
        debugger
        setArray(UpdateArray)
        debugger
        setEditIndex(null) // get back to submit button
       }
debugger

        setUser({ name: '', email: '', password: '' }); // Reset form inputs after submission
    };

    const handleEdit = (index) => {
        setUser(array[index]); // Set the form fields with the data of the item being edited
        setEditIndex(index)
    
    };

    const handleRemove = (index)=>{
    const newArray = [...array];
        newArray.splice(index, 1);
        setArray(newArray);
    } 
     

    const nameValid = () => {
        if (user.name.length < 4) {
          alert("name are not valid")
          setUser({
            ...user,
            name: ''
          });
        }
    
      }
    
      const isValidEmail = () => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const res = emailPattern.test(user.email);
        if (res) {
          
        }
        else {
    
          alert('email  not vaild ')
          setUser({
            ...user,
            email: '' 
          });
        }
      };
    
      const isValidPassword = () => {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,16}$/;
        const re = passwordRegex.test(user.password);
        if (re) {
          // Password is valid
        } else {
          alert('Password must contain one digit, one lowercase letter, one uppercase letter, one special character (@#$%^&+=), no space, and it must be 8-16 characters long');
          setUser({
            ...user,
            password: '' // Set password to empty string
          });
        }
      };
      
    
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="enter name" value={user.name} onBlur={nameValid} onChange={handleChange} />
                <input type="text" name="email" placeholder="enter email" value={user.email} onBlur={isValidEmail} onChange={handleChange} />
                <input type="text" name="password" placeholder="enter password" value={user.password} onBlur={isValidPassword} onChange={handleChange} />
                <button type="submit">{EditIndex===null?'submit':'update'}</button>
            </form>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {array.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                                   <td><button onClick={() => handleEdit(index)}>Edit</button></td>
                            <td><button onClick={()=> handleRemove(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Form2;