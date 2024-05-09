// import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const UseReducerWithObj = () => {

    const reducer = (value, dispatch) => {
        debugger
        switch (dispatch.type) {


            case "inc":
                return {
                    ...value,
                    counter: value.counter + 1,
                    padding: value.counter + 5
                }



            case "dec":
                return {
                    ...value,
                    counter: value.counter - 1,
                    padding:value.counter - 5
                }

            case "reset":
                return {
                    ...value,
                    counter: 0,
                    padding : 5
                }

            case "color":
                debugger
                return {
                    ...value,
                    color: dispatch.value
                }



            default:
                break;
        }

    }
    const [data, dispatch] = useReducer(reducer, {
        counter: 0, // initial value
        color: 'green', // initial value
        padding: 5 //initial value
    })


    const fun1 = (value) => {
        dispatch({
            type: value
        })

    }
    const colorchange = () => {
        dispatch({
            type: "color",
            value: 'red'
        })

    }


    return (
        <div>
            <p style={{ background: data.color }}>counter value {data.counter}</p>


            <button onClick={() => fun1('inc')} style={{ padding: data.padding }}>inc</button>
            <button onClick={() => fun1('dec')}>dec</button>
            <button onClick={() => fun1('reset')} >reset</button>
            <button onClick={colorchange}>color change</button>
        </div>
    )
}

export default UseReducerWithObj
