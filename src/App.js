import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';

function App() {
  return (
    <div className="App">

      <TodoCounter />
      <TodoSearch />

      <TodoList>  
        <TodoItemoItem />
        <TodoItem />
        <TodoItem />
      </TodoList>

      <CreateTodoButtonodoButton />
    </div>
  );
}

export default App;
