import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class CounterSaga extends Component {
    render() {
        const {reducerCounter: {parent, children, total}} = this.props

        return (
            <div>
                <div><strong>parents</strong></div>
                { (parent > 1) &&
                    <button onClick={this.decrement.bind(this, 'parent')}>-</button>
                }
                <span>
                    {parent}
                </span>
                { (parent < 9) &&
                  <button onClick={this.increment.bind(this, 'parent')}>+</button>
                }
                <div><strong>childrens</strong></div>
                { (children > 0) &&
                    <button onClick={this.decrement.bind(this, 'children')}>-</button>
                }
                <span>
                    {children}
                </span>
                { (parent > children) &&
                  <button onClick={this.increment.bind(this, 'children')}>+</button>
                }
                <p>Total: {total}</p>
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