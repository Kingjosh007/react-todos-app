/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
  render() {
    const { todo } = this.props;
    return (
      <li>{todo.title}</li>
    );
  }
}

export default TodoItem;
