/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class InputTodo extends Component {
  state = {
    title: '',
  };

  render() {
    const { title } = this.state;
    return (
      <form>
        <input type="text" placeholder="Add Todo..." value={title} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
