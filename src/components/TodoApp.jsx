import React from 'react';

export default class TodoApp extends React.Component {
  getItems() {
    return this.props.todos || [];
  }
  render() {
    return <div>
      <section id="todoapp">
        <TodoList todos={this.props.todos} />
      </section>
    </div>
  }
}