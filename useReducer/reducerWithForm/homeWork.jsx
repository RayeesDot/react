import { type } from '@testing-library/user-event/dist/type';
import React, { useReducer } from 'react';

const UseReducerWithForm1 = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "inputValue":
                return {
                    ...state,
                    [action.fieldName]: action.value
                };
            case "addToArr":


                if (state.editIndex === null) {

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
                    return {
                        ...state,
                        array: newArray
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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' value={data.email} onChange={handleChange} />
                <input type='text' name='name' value={data.name} onChange={handleChange} />
                <input type='password' name='password' value={data.password} onChange={handleChange} />
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

export default UseReducerWithForm1;
