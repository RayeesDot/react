 import React from 'react'
 
 const ChildToP = ({func1}) => {
    const data = "hsavbfdsnmb fkjm"
    const data2 = "parent mai melainge"
   return (
     <div>
       <button onClick={()=>func1(data,data2)}>send data</button>
     </div>
   )
 }
 
 export default ChildToP
 