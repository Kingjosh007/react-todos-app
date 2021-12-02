import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from './Navbar';
import Header from './Header';
import InputTodo from './InputTodo';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/storage';
import { capitalize } from '../utils/stringManipulations';
import TodosList from './TodosList';
import About from '../pages/About';
import NotMatch from '../pages/NotMatch';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadedTodos = getFromLocalStorage('todos');
    if (loadedTodos) {
      setTodos(loadedTodos);
    } else {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setTodos(data.map((td) => {
            const newTodo = { ...td, title: capitalize(td.title) };
            return newTodo;
          }));
        });
    }
  }, [setTodos]);

  useEffect(() => {
    // storing todos items
    saveToLocalStorage('todos', todos);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: updatedTitle };
        }
        return todo;
      }),
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <>
              <div className="container">
                <div className="inner">
                  <Header />
                  <InputTodo addTodoProps={addTodoItem} />
                  <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                  />
                </div>
              </div>
            </>
      )}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
};

export default TodoContainer;
