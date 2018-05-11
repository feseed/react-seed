/*
 * @Author: gauseen 
 * @Date: 2018-05-10 11:02:06 
 * @Last Modified by:   gauseen 
 * @Last Modified time: 2018-05-10 11:02:06 
 */
// docs https://github.com/huzidaha/react-naive-book

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Header from './components/Header'
import Content from './components/Content'

function createStore (reducer) {
  let state = null
  const listeners = []
  const subscribe = (listener) => listeners.push(listener)
  const getState = () => state
  const dispatch = (action) => {
    state = reducer(state, action)
    listeners.forEach((listener) => listener())
  }
  dispatch({}) // 初始化 state
  return { getState, dispatch, subscribe }
}

const themeReducer = (state, action) => {
  if (!state) return {
    themeColor: 'red'
  }
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, themeColor: action.themeColor }
    default:
      return state
  }
}

const store = createStore(themeReducer)

class App extends Component {
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext () {
    return { store }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
      </div>
    );
  }
}

export default App;
