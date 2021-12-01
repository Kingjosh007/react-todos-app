/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const InputTodo = (props) => {
  const [title, setTitle] = useState('');

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addTodoProps } = props;
    if (title.trim()) {
      addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
