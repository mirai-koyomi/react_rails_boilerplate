import React, { Component } from 'react';
import PropTypes from 'prop-types';
import imgAppLogo from '../img/logo.svg'
import TodoList from './components/todo_list'
import { hot } from 'react-hot-loader'

/**
 * This is MyClass.
 * @reactProps {object} todo - this is prop1
 */
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todo: props.todo
    }
  }

  render() {
    const { todo } = this.state

    return (
      <div className="app">
        <div className="app__header">
          <img src={ imgAppLogo } alt="logo" className="app__logo"/>
        </div>

        <div className="app__contents">
          <TodoList items={ todo } />
        </div>
      </div>
    )
  }
}

App.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      done: PropTypes.bool,
    })).isRequired,
};

export default hot(module)(App)