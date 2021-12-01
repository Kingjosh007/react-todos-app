import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { capitalize } from '../utils/stringManipulations';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      todos: [],
    };

    // Life cycle methods
    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.setState({
            todos: data.map((td) => {
              const newTodo = { ...td };
              newTodo.title = capitalize(td.title);
              return newTodo;
            }),
          });
        });
    }

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
