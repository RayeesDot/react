// import { type } from '@testing-library/user-event/dist/type';
import React, { useEffect, useReducer } from 'react';

const UseReducerWithForm1WitihLocalS = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "inputValue":
                return {
                    ...state,
                    [action.fieldName]: action.value
                };
            case "addToArr":


                if (state.editIndex === null) {

                    localStorage.setItem('arrayData',JSON.stringify( [...state.array, action.value]))

                    return {
                        ...state,
                        array: [...state.array, action.value],
                        email: '',
                        name: '',
                        password: '',
                    };

                }
                else {
                    const updateArray = state.array
                    updateArray[state.editIndex] = action.value
                    localStorage.setItem('arrayData',JSON.stringify(updateArray))
                    return {
                        ...state,
                        array: updateArray,
                        email: '',
                        name: '',
                        password: '',
                        editIndex: null
                    }
                }
            case "edit":
                const editData = state.array[action.indexValue]
                return {
                    ...state,
                    ...editData,
                    editIndex: action.indexValue
                }
                case "delete":
                    const newArray = state.array.filter((item, index) => index !== action.indexValue);
                   localStorage.setItem('arrayData',JSON.stringify(newArray))        //  To set the updated array data into local storage after deleting a value
                    return {
                        ...state,
                        array: newArray
                }   

                case "saveData":
                   const LocalArray = JSON.parse( localStorage.getItem('arrayData')) || [] // agar kabi null hoga toh or-part chalega bina kisi error ke
                    return {
                        ...state,
                        array: LocalArray
                }   

                

            default:
                return state;
        }
    };


    
    const [data, dispatch] = useReducer(reducer, {
        email: '',
        name: '',
        password: '',
        array: [], // Initialize array in state
        editIndex: null
    });



    const handleChange = (e) => {
        dispatch({
            type: 'inputValue',
            fieldName: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'addToArr',
            value: {
                email: data.email,
                name: data.name,
                password: data.password
            }
        });
    };


    const editFun = (index) => {
        dispatch({
            type: 'edit',
            indexValue: index
        })
    }

    const deleteFun = (index)=>{
        dispatch({
            type: "delete",
            indexValue : index
        })
    }
    console.log(data);
    useEffect(()=>{

        dispatch({
            type:'saveData'
        })

    },[])

    
    return (
        <div>
            <h1>Topic Form with localStorage</h1>
            <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={data.name} placeholder='enter name' onChange={handleChange} />
                <input type='email' name='email' value={data.email} placeholder='enter email' onChange={handleChange} />
                <input type='password' name='password' value={data.password} placeholder='enter password' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <p>Name is: {data.name}</p>
            <p>Email is: {data.email}</p>
            <p>Password is: {data.password}</p>
            <ul>
                {data.array.map((item, index) => (
                    <li key={index}>{`Name: ${item.name}, Email: ${item.email}, Password: ${item.password}`} <button onClick={() => editFun(index)}>edit</button><button onClick={() => deleteFun(index)}>delete</button></li>
                ))}
            </ul>
        </div>
    );
};

export default UseReducerWithForm1WitihLocalS;



