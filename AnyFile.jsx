import React, { useContext} from 'react';
import MyContext from './UseContext/Store';

const AnyFile = () => {
    const {name,func1}= useContext(MyContext)
useContext(MyContext)
  return (
    <div>
        <h2><span style={{color:'green'}}>{name}</span> form UseContext</h2>
        <button onClick={func1}>click</button>
    </div>
  )
}

export default AnyFile
