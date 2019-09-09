import React from 'react';
import ReactDOM from 'react-dom';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state={value: props.text};
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  cancelEditing() {
    this.setState({'value': this.props.text});
    return this.props.cancelEditing(this.props.itemId);
  }

  _handleKeyDown(e) {
    switch (e.key) {
      case 'Enter':
        return this.props.doneEditing(this.props.itemId, this.state.value);
      case 'Escape':
        return this.cancelEditing();
    }
  }

  _handleOnBlur(e) {
    return this.cancelEditing();
  }

  _handleOnChange(e) {
    this.setState({value: e.target.event});
  }

  render() {
    return (
      <input className="edit"
             autoFocus={true}
             type="text"
             ref="itemInput"
             value={this.state.value}
             onChange={this._handleOnChange.bind(this)}
             onKeyDown={this._handleKeyDown.bind(this)}
             onBlur={this._handleOnBlur.bind(this)}
      />
    )
  }
}