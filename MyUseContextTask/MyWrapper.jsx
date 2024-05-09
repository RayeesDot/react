import React, {useEffect, useReducer} from 'react';
import MyContext1 from './MyStore';
import { useNavigate } from 'react-router-dom';

const Wrapper1 = ({ children }) => {
    const name = "rayees";

    const navigate =useNavigate()
    const func1 = () => {
        alert('asdfgh');
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "inputValue":
                return {
                    ...state,
                    [action.fieldName]: action.value
                };
            case "addToArr":
                if (state.editIndex === null) {
                    localStorage.setItem('arrayData', JSON.stringify([...state.array, action.value]))
                    return {
                        ...state,
                        array: [...state.array, action.value],
                        email: '',
                        name: '',
                        password: '',
                    };
                } else {
                    const updateArray = state.array;
                    updateArray[state.editIndex] = action.value;
                    localStorage.setItem('arrayData', JSON.stringify(updateArray))
                    return {
                        ...state,
                        array: updateArray,
                        email: '',
                        name: '',
                        password: '',
                        editIndex: null
                    };
                }
            case "edit":
                const editData = state.array[action.indexValue];
                return {
                    ...state,
                    ...editData,
                    editIndex: action.indexValue
                };
            case "delete":
                const newArray = state.array.filter((item, index) => index !== action.indexValue);
                localStorage.setItem('arrayData', JSON.stringify(newArray))
                return {
                    ...state,
                    array: newArray
                };
            case "saveData":
                const LocalArray = JSON.parse(localStorage.getItem('arrayData')) || [];
                return {
                    ...state,
                    array: LocalArray
                };
            default:
                return state;
        }
    };

    const [data, dispatch] = React.useReducer(reducer, {
        email: '',
        name: '',
        password: '',
        array: [],
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

    const editFun = async(index) => {
        
       await dispatch({
            type: 'edit',
            indexValue: index
        })
        navigate('/Form-useContext')
    };

    const deleteFun = (index) => {
        dispatch({
            type: "delete",
            indexValue: index
        })
    };
    useEffect(() => {
        dispatch({
            type: 'saveData'
        });
    }, []);

    return (
        <MyContext1.Provider value={{ name, func1, data, editFun, deleteFun, handleChange, handleSubmit }}>
            {children}
        </MyContext1.Provider>
    );
};

export default Wrapper1;
