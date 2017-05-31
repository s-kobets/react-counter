import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import initialValues from './initialValues'
import Counter from './counter'

class Counters extends Component {
  render() {
    const {parent, total} = this.props

    return (
      <div>
        <Field
          name="parent"
          component={Counter}
        />
        <Field
          name="children"
          component={Counter}
          parent={parent}
        />

        <p>Total: {total}</p>
      </div>
    )
  }
}

// Decorate the form component
const CountersForm = reduxForm({
  form: 'counters',
  initialValues,
})(Counters);

const selector = formValueSelector('counters')

const mapStateToProps = (state) => {
  const parent = selector(state, 'parent')
  const total = selector(state, 'total')

  return {
     parent,
     total
  }
}
export default connect(mapStateToProps)(CountersForm);