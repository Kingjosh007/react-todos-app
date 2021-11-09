/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class InputTodo extends Component {
  state = {
    title: '',
  };

  onChange = (e) => {
    console.log('Hello');
  }

  render() {
    const { title } = this.state;
    return (
      <form>
        <input
          type="text"
          placeholder="Add Todo..."
          value={title}
          onChange={this.onChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
