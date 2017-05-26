import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import initialValues from './initialValues'
import Counter from './counter'

class Counters extends Component {
  render() {
    console.log(this.props.parent)
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

          <p>Total: {this.props.values && this.props.values.total}</p>
        </div>
    )
  }
}

// Decorate the form component
const CountersForm = reduxForm({
  form: 'counters',
  initialValues,
})(Counters);

export default connect()(CountersForm);