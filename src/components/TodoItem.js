/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => console.log('Clicked')}
        />
        {todo.title}
      </li>
    );
  }
}

export default TodoItem;
