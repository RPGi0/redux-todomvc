import React from 'react';

import TextInput from './TextInput'

export default class TodoItem extends React.Component {
  render() {
    return (
      <li className="todo">
        <div className="view">
          <input type="checkbox" className="toggle"/>
          <label htmlFor="">
            {this.props.text}
          </label>
          <button className="destroy"></button>
          <TextInput />
        </div>
      </li>
    )
  }
}