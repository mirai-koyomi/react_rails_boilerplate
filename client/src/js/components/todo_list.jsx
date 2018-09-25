import React, { Component } from 'react'
import PropTypes from 'prop-types';
import TodoItem from './todo_item'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.items = props.items
  }

  render() {
    const todoItems = this.items.map( ({name, description, done}) => {
      return <TodoItem key={name} name={name} description={description} done={done} />
    })

    return (
      <ul className="todo-List">
        {todoItems}
      </ul>
    )
  }
}

TodoList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      done: PropTypes.bool,
    })).isRequired,
};

export default TodoList