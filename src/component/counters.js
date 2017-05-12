import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import initialValues from './initialValues'
import Counter from './counter'

class Counters extends Component {
  render() {
    return (
      <div>
        <Field
          name="parent"
          component={Counter}
          parent={this.props.parent}
        />
          <Field
            name="children"
            component={Counter}
            parent={this.props.parent}
          />
          <Field
            name="infant"
            component={Counter}
            parent={this.props.parent}
          />

          <p>Total: {this.props.total}</p>
        </div>
    )
  }
}

// Decorate the form component
const CountersForm = reduxForm({
  form: 'counters',
  initialValues,
  /* if children all less or equal parent */
  onChange(values) {
    const {parent, infant} = values

    if (parent < infant) {
      values.infant = parent
    }
  },
})(Counters);

const selector = formValueSelector('counters')

const mapStateToProps = (state) => {
  const {parent, children, infant} = selector(state, 'parent', 'children', 'infant')

  return {
    parent,
    total: parent + children + infant,
  }
}

export default connect(mapStateToProps)(CountersForm);