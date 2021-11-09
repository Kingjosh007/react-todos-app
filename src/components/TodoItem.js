/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
        <button type="button">Delete</button>
      </li>
    );
  }
}

export default TodoItem;
