// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';




function App() {
  const[data,setData]=useState({ data:""})
  const[todo,setTodo]=useState([]);
  const[edit,setEditing]=useState(false);

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTodo((prevTodo) => [...prevTodo, data]);   
  }

  const handleEditing=()=>{
    setEditing(true);

  }
  console.log(data);  
  console.log(todo);
  return (
    <>
    <div>Todo with usestate</div>
    <input type='text'  name='data' placeholder='enter name' onChange={handleChange} /> <br/>
     <button onClick={handleSubmit}>Add todos</button><br/>
     <button onClick={handleEditing}>Update</button> <br/>
     <button>Delete</button>

      <h1>To Do List:</h1>
      <div>
        {todo?.length ? (<>
          <div>{todo.map((e,i) => (
            <div key={i}>{e.data}</div>
          ))}</div>
        </>) : (<><div>No Todo's found.</div></>)}
      </div>
    </>
  );
}

export default App;
