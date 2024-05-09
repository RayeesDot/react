// import { type } from '@testing-library/user-event/dist/type'
import React, { useReducer } from 'react'

const UseReducer = () => {

    const reducer = (value,dispatch)=>{
debugger
switch (dispatch.type) {

    
    case "inc":
    return value+1;



    case "dec":
    return value-1;



    default:
        break;
}

    }
    const [ data,dispatch]=useReducer(reducer,0) // initial value 0 and reducer function is defined above

    const fun1 = (value)=>{
        dispatch({
            type:value
        })
        
    }


  return (
    <div>
      <p>couter value {data}</p>


      <button onClick={()=>fun1('inc')}>inc</button>
      <button onClick={()=>fun1('dec')}>dec</button>
    </div>
  )
}

export default UseReducer
