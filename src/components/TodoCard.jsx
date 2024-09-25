import React from 'react'

export default function TodoCard(props) {

const {children,deleteItem,index} = props

  return (
    <li className='todoItem' >
      <div className='actionsContainer'>

        {children}

        <button >
        <i  class="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={()=>deleteItem(index)}>
        <i class="fa-solid fa-trash"></i>
        </button>


      </div>
   

</li>
    )
}
