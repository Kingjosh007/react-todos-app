/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const trimedTitle = title.trim();
    // eslint-disable-next-line react/prop-types
    const { addTodoProps } = this.props;

    if (trimedTitle) {
      addTodoProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write an item');
    }
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
