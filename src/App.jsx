import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoCard from './components/TodoCard'

export default function App() {
  
  
  
  const [todos,setTodos] = useState([
   
  ])

  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    setTodos(newTodoList);

  }

  function deleteItem(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return     todoIndex !== index

    }
      

    )
    setTodos(newTodoList);

    }




    
    




  








  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos}/>
      <TodoList deleteItem={deleteItem} todos={todos}/>



    
    
    
    
    </>
  
      
  )
}

