import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class CounterSaga extends Component {
    render() {
        return (
            <div>
                <div><strong>adults</strong></div>
                {}
                <button onClick={this.decrement.bind(this, 'parent')}>-</button>
                <span>
                    {this.props.reducerCounter.parent}
                </span>
                <button onClick={this.increment.bind(this, 'parent')}>+</button>

                <div><strong>childrens</strong></div>
                <button onClick={this.decrement.bind(this, 'children')}>-</button>
                <span>
                    {this.props.reducerCounter.children}
                </span>
                <button onClick={this.increment.bind(this, 'children')}>+</button>

                <p>total: {this.props.reducerCounter.total}</p>
            </div>
        )
    }

    increment = (type) => {
        this.props.actions.increment(type)
    }

    decrement = (type) => {
        this.props.actions.decrement(type)
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