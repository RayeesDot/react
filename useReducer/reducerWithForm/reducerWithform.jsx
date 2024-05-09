// Importing necessary modules and libraries
// import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

// Functional component for managing form state using useReducer hook
const UseReducerWithForm = () => {

    // Reducer function to handle state updates based on actions
    const reducer = (state, action) => {

        switch (action.type) {

            // Action type for updating input values
            case "inputValue":

                // Updating state with the new value for the specified field
                return {
                    ...state,
                    [action.fieldName]: action.value
                }

            // Default case if action type doesn't match
            default:
                break;
        }

    }

    // Initializing state using useReducer hook with the reducer function
    const [data, dispatch] = useReducer(reducer, {
        email: '',      // Initial state for email field
        name: '',       // Initial state for name field
        password: '',   // Initial state for password field
        // array: []    // Potential future state for an array (homework)
    })

    // Function to handle input changes and dispatch corresponding actions
    const handleChange = (e) => {

        // Dispatching an action to update input value based on input name
        dispatch({
            type: 'inputValue',
            fieldName: e.target.name,
            value: e.target.value
        })
    }

    // Logging the current state for debugging purposes
    console.log(data);

    // Rendering form inputs and displaying current state values
    return (
        <div>
            <form>
                {/* Input field for email */}
                <input type='email' name='email' onChange={handleChange} />
                {/* Input field for name */}
                <input type='text' name='name' onChange={handleChange} />
                {/* Input field for password */}
                <input type='password' name='password' onChange={handleChange} />
            </form>
            {/* Displaying current email value */}
            <p>email is : {data.email}</p>
            {/* Displaying current name value */}
            <p>name is :{data.name}</p>
            {/* Displaying current password value */}
            <p>password is :{data.password}</p>
        </div>
    )
}

// Exporting the component for use in other parts of the application
export default UseReducerWithForm
