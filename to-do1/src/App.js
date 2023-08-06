import { useState } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInput';
import TodoList from './components/TodoList';

function App() {

  const [todoList, setTodoList] = useState([]);

  const addList = (inputText) => {
    setTodoList([...todoList, inputText]);
  } 

  const deleteItem = (key) => {
    let newListTodo = [...todoList];
    newListTodo.splice(key, 1);
    setTodoList([...newListTodo]);
  };

  return (
    <div>
      <ToDoInput onInputHandler={addList} />
      {todoList.map((listItem, i) => {
        return (
          <TodoList item={listItem} key={i} index={i} onDeleteItem={deleteItem} />
        )
      })}
    </div>
  );
}

export default App;
