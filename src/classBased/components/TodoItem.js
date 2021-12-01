/* eslint-disable react/prop-types */
import React from 'react';
import styles from './TodoItem.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class TodoItem extends React.Component {
// eslint-disable-next-line react/state-in-constructor
state = {
  editing: false,
};

componentWillUnmount() {
  console.log('Cleaning up...');
}

handleEditing = () => {
  this.setState({
    editing: true,
  });
};

handleUpdatedDone = (e) => {
  if (e.key === 'Enter') {
    this.setState({ editing: false });
  }
};

render() {
  const {
    todo,
    handleChangeProps,
    deleteTodoProps,
    setUpdateProps,
  } = this.props;

  const { editing } = this.state;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  return (
    <li className={styles.item}>
      <div onDoubleClick={this.handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
        <button
          type="button"
          onClick={() => deleteTodoProps(todo.id)}
        >
          Delete
        </button>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={todo.title}
        onChange={(e) => {
          setUpdateProps(e.target.value, todo.id);
        }}
        onKeyDown={this.handleUpdatedDone}
      />
    </li>
  );
}
}

export default TodoItem;
