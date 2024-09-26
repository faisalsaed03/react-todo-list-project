import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import TodoCard from './components/TodoCard'

export default function App() {
  
  
  
  const [todos,setTodos] = useState([
   
  ])

  const [todoValue,setTodoValue] = useState("")

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:newList}))

  }


  function handleAddTodos(newTodo){
    const newTodoList = [...todos,newTodo]
    persistData(newTodoList)
    setTodos(newTodoList);

  }

  function deleteItem(index){
    const newTodoList = todos.filter((todo,todoIndex)=>{
      return     todoIndex !== index

    }
      

    )
    persistData(newTodoList)


    setTodos(newTodoList);

    }



    function handleEditTodo(index){
      const editedvalue = todos[index];
      setTodoValue(editedvalue);
      deleteItem(index);



    }



    useEffect(()=>{
      if(!localStorage){
        return
      }
      let localTodos = localStorage.getItem("todos")
      if(!localTodos){
        return
      }

      localTodos = JSON.parse(localTodos).todos
      setTodos(localTodos)

    },[])



    const handlekeyPress = (e) => {
      if (e.key ==='Enter'){
        handleAddTodos(todoValue)
        setTodoValue("")
      }
    }





  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue} handlekeyPress={handlekeyPress} />
      <TodoList deleteItem={deleteItem} todos={todos} handleEditTodo={handleEditTodo} />



    
    
    
    
    </>
  
      
  )
}

