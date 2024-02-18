/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { bindActionCreators } from 'redux'
import { addTodo, editTodo, deleteTodo, todoFinished} from './slices/todoSlice'

function App() {

  const dispatch = useDispatch()
  const actions = bindActionCreators({ addTodo, deleteTodo, editTodo, todoFinished }, dispatch)

  // const [list, setList] = useState([
  //   {id: 1, todoData: 'todo 1', finished: false},
  //   {id: 2, todoData: 'todo 2', finished: false}
  // ])


  return (
      <>
        <AddTodo addTodo={actions.addTodo} />
        <TodoList deleteTodo={actions.deleteTodo} editTodo={actions.editTodo} todoFinished={actions.todoFinished} />
      </>
  )
}

export default App
