// save form data in localStorage and then render it by 'useEffect' after refresh
// import { type } from '@testing-library/user-event/dist/type'
import React, { useEffect, useReducer } from 'react'
const reducer = (state, action) => {

    switch (action.type) {

        case "inputValue":

            return {
                ...state,
                [action.fieldName]: action.value
            }

        default:
            break;
    }

}

const UseReducerWithFormWithLocalStorage = () => {
    const [data, dispatch] = useReducer(reducer, {
        email: '',
        name: '',
        password: '',
    }) // initial states and reducer function is defined above

useEffect(()=> {
localStorage.setItem('formData',JSON.stringify(data))
},[data])

    const handleChange = (e) => {

        dispatch({
            type: 'inputValue',
            fieldName: e.target.name,
            value: e.target.value

        })

    }

    console.log(data);


    return (
        <div>
            <form>
                <input type='email' name='email' onChange={handleChange} />
                <input type='text' name='name' onChange={handleChange} />
                <input type='password' name='password' onChange={handleChange} />
            </form>
            <p>email is : {data.email}</p>
            <p>name is :{data.name}</p>
            <p>password is :{data.password}</p>
        </div>
    )
}

export default UseReducerWithFormWithLocalStorage
