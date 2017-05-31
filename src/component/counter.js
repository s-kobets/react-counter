import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const {input: { value, name }, parent} = this.props;

    return (
      <div>
        <div><strong>{name}</strong></div>
        { ((name === 'parent' && value > 1) || (name !== 'parent' && value !== 0)) &&
          <button onClick={this.decrement}>-</button>
        }
        <span>
          {value}
        </span>
        { ((name === 'children' && value < parent) || (name !== 'children' && value !== 9)) &&
          <button onClick={this.increment}>+</button>
        }
      </div>
    )
  }

  increment = () => {
    this.props.input.onChange(this.props.input.value + 1)
  }

  decrement = () => {
    this.props.input.onChange(this.props.input.value - 1)
  }
}

export default Counter