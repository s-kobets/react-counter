import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class CounterSaga extends Component {
    render() {
        return (
            <div>
                <button onClick={this.decrement.bind(this)}>-</button>
                <span>
                    {this.props.reducerCounter.counter}
                </span>
                <button onClick={this.increment.bind(this)}>+</button>
            </div>
        )
    }

    increment() {
        this.props.actions.increment();
    }

    decrement() {
        const counter = this.props.reducerCounter.counter;
        if (counter > 0) {
            this.props.actions.decrement();
        }
    }
}

const mapStateToProps = (state) => {
  return {
    reducerCounter: state.reducerCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      actions: bindActionCreators(storeActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterSaga); 