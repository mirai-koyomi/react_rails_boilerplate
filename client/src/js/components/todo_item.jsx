import React from 'react'
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader'

const TodoItem = ({ name, description, done }) => {
  const className = done? 'todo-list__item--done' : 'todo-list__item'

  return (
    <li className={className}>
      <p className="todo-list__name">{name}</p>
      <p className="todo-list__description">{description}</p>
    </li>
  )
}

TodoItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  done: PropTypes.bool,
};

TodoItem.defaultProps = {
  description: '',
  done: false
};

export default hot(module)(TodoItem)