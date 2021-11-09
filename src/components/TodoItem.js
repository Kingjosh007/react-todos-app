/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
handleEditing = () => {
  console.log('Edit mode activated');
};

render() {
  const {
    todo,
    handleChangeProps,
    deleteTodoProps,
  } = this.props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <div onDoubleClick={this.handleEditing}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <button
        type="button"
        onClick={() => deleteTodoProps(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}
}

export default TodoItem;
