import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as storeActions } from './ducks'

class CounterSaga extends Component {
    render() {
        return (
            <div>
                <div><strong>adults</strong></div>
                <button onClick={this.decrement.bind(this, 'adults')}>-</button>
                <span>
                    {this.props.reducerCounter.adults.value}
                </span>
                <button onClick={this.increment.bind(this, 'adults')}>+</button>

                <div><strong>childrens</strong></div>
                <button onClick={this.decrement.bind(this, 'childrens')}>-</button>
                <span>
                    {this.props.reducerCounter.childrens.value}
                </span>
                <button onClick={this.increment.bind(this, 'childrens')}>+</button>

                <div><strong>infants</strong></div>
                <button onClick={this.decrement.bind(this, 'infants')}>-</button>
                <span>
                    {this.props.reducerCounter.infants.value}
                </span>
                <button onClick={this.increment.bind(this, 'infants')}>+</button>
            </div>
        )
    }

    increment(type) {
        this.props.actions.increment(type);
    }

    decrement(type) {
        this.props.actions.decrement(type);
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