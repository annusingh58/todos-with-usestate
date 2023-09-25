// import logo from './logo.svg';
import './App.css';
import state, { useState } from 'react';



function App() {
  const[data,setData]=useState({ data:""})
  const[todo,setTodo]=useState([]);
  const[edit,setEditing]=useState(false);

   console.log(data);

  console.log(todo);
  console.log(edit);
  


  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const handleSubmit=()=>{
    setTodo([...todo,data])
  }

  const handleEditing=()=>{
    setEditing(true);

  }
  
  return (
    <>
    <div>Todo with usestate</div>
    <input type='text'  name='data' placeholder='enter name' onChange={handleChange} /> <br/>
     <button onClick={handleSubmit}>Add todos</button><br/>
     <button onClick={handleEditing}>Update</button> <br/>
     <button>Delete</button>
    
    </>
  );
}

export default App;
