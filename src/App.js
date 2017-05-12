import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from './component/counters'
import CounterSaga from './component/counterSaga'
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  render() {    
    return (
      <Provider store={store}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <ul className="App-intro">
            <li>Children all less or equal</li>
            <li> max counter 9</li>
          </ul>

          <Counters />

          <p className="App-intro">
            state control sagas
          </p>
          <div><strong>parent</strong></div>
          <CounterSaga />
          <div><strong>children</strong></div>
          <CounterSaga />
          <div><strong>infants</strong></div>
          <CounterSaga />
        </div>
      </Provider>
    );
  }
}

export default App;
