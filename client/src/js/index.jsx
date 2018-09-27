// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

import '@babel/polyfill'
import '../css/index.scss'
import '../html/index.html'

const todo = [
    {
      name: 'test01',
      description: 'samplesamplesample',
      done: false
    },
    {
      name: 'test02',
      description: 'samplesamplesample',
      done: false
    }
  ]


ReactDOM.render(<App todo={todo} />, document.getElementById('root'))