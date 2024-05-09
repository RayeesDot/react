import React from 'react'

import MyContext from './Store'
const Wrapper = ({children}) => {
const name = "Shiven tdi"

const func1 = ()=>{
    alert('asdfgh')
}


  return (
    <MyContext.Provider   value={{name,func1}}>
      {children}
    </MyContext.Provider>
  )
}

export default Wrapper
