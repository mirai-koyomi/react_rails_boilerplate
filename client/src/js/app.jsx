// @flow
import * as React from 'react';
import imgAppLogo from '../img/logo.svg'
import TodoList from './components/todo_list'
import { hot } from 'react-hot-loader'

type Props = {
  todo: Array<any>,
}


/**
 * This is MyClass.
 * @reactProps {object} todo - this is prop1
 */
class App extends Component<Props> {
  constructor(props: Props) {

  }
  render() {
    const { todo, test } = props

    return (
      <div className="app">
        <div className="app__header">
          <img src={ imgAppLogo } alt="logo" className="app__logo"/>
        </div>

        <div className="app__contents">
          <TodoList test={ test } items={ todo } />
        </div>
      </div>
    )
  }
}

export default hot(module)(App)