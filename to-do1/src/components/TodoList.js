import React from 'react'

function TodoList(props) {

  const removeHandler = (event) => {
    props.onDeleteItem(props.index)
  }

  return (
    <li>
        {props.item}
        <div onClick={removeHandler}>Remove</div>
    </li>
  )
}

export default TodoList