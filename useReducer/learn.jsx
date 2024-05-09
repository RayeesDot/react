import React, { useReducer } from 'react'

const LearnUsereducer = ()=>
{
    const reducer=(state,action)=>{
      switch(action){
      case "inc" : return state+1
      case "dec" : return state-1
      default : return state
      }
    }
   const [state, dispatch] = useReducer(reducer,0)
   console.log(state)

   return (
    <>
    <p>{state}</p>
    <button onClick={()=>dispatch("inc")}>inc</button>
    <button onClick={()=>dispatch("dec")}>dec</button>
    </>
   )
  
}
export default LearnUsereducer