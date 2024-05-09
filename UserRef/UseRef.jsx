import React, {useRef} from 'react';

const UseRef = () => {
const inputRef = useRef()
const h1Ref = useRef()


const changeVlaue = ()=>{
    inputRef.current.style.background ="red"
    inputRef.current.style.padding ="10px"
    inputRef.current.focus()
    h1Ref.current.innerHTML = "new dfsdfsdfsd text"
}


  return (
    <div>

        <input type='text' placeholder='enter name' ref={inputRef} />
        <h1 ref={h1Ref}>old text</h1>
        <button onClick={changeVlaue}>change</button>
      
    </div>
  )
}

export default UseRef
