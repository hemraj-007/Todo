import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import axios from 'axios'
function App() {
  const [todos,setTodos]=useState([]);
  useEffect(()=>{
    const fetchTodos = async () => {
      const response = await axios.get('http://localhost:3000/todos');
      setTodos(response.data.todos);
    };
    fetchTodos();
  },[todos])


  return(
    <div>
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
