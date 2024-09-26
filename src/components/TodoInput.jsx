import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos,setTodoValue,todoValue,handlekeyPress} = props


  return (
    <header>
      
      <input onKeyDown={handlekeyPress} value={todoValue}  type="text" onChange={(e)=>{
        setTodoValue(e.target.value)
      }} placeholder='Enter todo......' />
      <button onClick={()=>{handleAddTodos(todoValue) 
      setTodoValue('');
      
    
    }}>Add</button>

    </header>
    
  )
}
