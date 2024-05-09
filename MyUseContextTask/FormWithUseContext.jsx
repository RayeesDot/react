import React, { useContext } from 'react';
import MyContext1 from './MyStore';

const FormWithUseContext = () => {
    const { editFun, deleteFun, data, handleChange, handleSubmit } = useContext(MyContext1);

  

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={data.name} placeholder='enter name' onChange={handleChange} />
                <input type='email' name='email' value={data.email} placeholder='enter email' onChange={handleChange} />
                <input type='password' name='password' value={data.password} placeholder='enter password' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>

            <p>Name is: {data.name}</p>
            <p>Email is: {data.email}</p>
            <p>Password is: {data.password}</p>
        </div>
    );
};

export default FormWithUseContext;
