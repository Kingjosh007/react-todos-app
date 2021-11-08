import React from 'react';
import Header from './Header';
import TodosList from './TodosList';

// eslint-disable-next-line react/prefer-stateless-function
class TodoContainer extends React.Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },
      ],
    };

    render() {
      const { todos } = this.state;
      return (
        <div>
          <Header />
          <TodosList todos={todos} />
        </div>
      );
    }
}
export default TodoContainer;
