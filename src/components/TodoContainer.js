import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      todos: [],
    };

    handleChange = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo, completed: !todo.completed,
            };
          }
          return todo;
        }),
      }));
    };

    delTodo = (id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.filter((todo) => todo.id !== id),
      }));
    };

    addTodoItem = (title) => {
      const { todos } = this.state;
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      if (todos.find((td) => td.title === title)) {
        alert('A to-do item already has this title. Please change it');
      } else {
        this.setState({
          todos: [...todos, newTodo],
        });
      }
    };

    setUpdate = (updatedTitle, id) => {
      this.setState((prevState) => ({
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo, title: updatedTitle,
            };
          }
          return todo;
        }),
      }));
    }

    render() {
      const { todos } = this.state;
      return (
        <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList
              todos={todos}
              handleChangeProps={this.handleChange}
              deleteTodoProps={this.delTodo}
              setUpdateProps={this.setUpdate}
            />
          </div>
        </div>
      );
    }
}
export default TodoContainer;
