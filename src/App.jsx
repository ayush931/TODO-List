/* eslint-disable no-unused-vars */
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {

  // const [list, setList] = useState([
  //   {id: 1, todoData: 'todo 1', finished: false},
  //   {id: 2, todoData: 'todo 2', finished: false}
  // ])


  return (
      <>
        <AddTodo />
        <TodoList />
      </>
  )
}

export default App
