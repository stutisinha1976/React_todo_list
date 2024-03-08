import { useState } from "react"
import "./styles.css"
export default function App() {
  const [newItem, setNewItem]=useState(" ")
  const [todos, setTodos]=useState([])
  function handleSubmit(e){
    e.preventDefault()
    setTodos(currentTodos=>{
      return [
        ...currentTodos,
        {
          id:crypto.randomUUID(),
          text: newItem,
          completed: false
        },
      ]
    })
    setNewItem(" ")
  }
  function toggleTodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id===id){
          return {...todo,completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>!todo.completed)
    })
  }
  return(
    <>
   <form onSubmit={handleSubmit} className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"> New Item </label>
        
        <input 
        value={newItem} 
        onChange={(e)=>setNewItem(e.target.value)}
        id="item" 
        type="text" 
        
        />
        </div>
        <button className="btn">Add</button>
     
    
    </form>
    <h1 className="header">To-do List</h1>
    <ul className="list">
     { todos.map (todo=> {
      return <li key={todo.id}>
        <label>
        <input type="checkbox" checked={todo.completed}
        onChange={e=>toggleTodo (todo.id,e.target.checked)} />
        {todo.text}
        </label>
        <button onClick={()=> deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
    
      </li>
       })}
    </ul>
    </>
  )
}