import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import { Provider } from 'react-redux'
// import createHistory from 'history/createBrowserHistory'

import { Header } from './components/Header'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {/*<Main />*/}
      </div>
    );
  }
}

export default App;