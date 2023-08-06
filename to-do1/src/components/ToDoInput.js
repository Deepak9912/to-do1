import { useState } from 'react'

function ToDoInput(props) {

    const [enteredTodo, setEnteredTodo] = useState('');

    const inputHandler = (event) => {
        setEnteredTodo(event.target.value);
    }

    const buttonHandler = () => {
      props.onInputHandler(enteredTodo);
      setEnteredTodo('');

    }

  return (
    <div>
        <input type="text" value={enteredTodo} placeholder='Enter todo' onChange={inputHandler} />
        <button onClick={buttonHandler}>+</button>
    </div>
  )
}

export default ToDoInput