import React, { Component } from 'react';

import classes from './App.module.css';

import logo from '../assets/logo.svg';

import AddTodoItem from '../components/AddTodoItem/AddTodoItem';
import TodoListItems from '../components/TodoListItems/TodoListItems';

class App extends Component {
  state = {
    todoListItems: [],
    currentItemCounter: 0
  }

  addTodoItemHandler = (todoItem) => {
    // console.log("todoItem: ", todoItem);
    if(todoItem) {
      const todoListItems = [...this.state.todoListItems];
      const currentItemCounter = this.state.currentItemCounter;

      todoListItems.push({id: currentItemCounter+1, todoItem: todoItem});
      this.setState({todoListItems: todoListItems, currentItemCounter: currentItemCounter+1});
    }
    // console.log("todoListItems: ", this.state.todoListItems);
  }

  removeTodoItemHandler = (itemId) => {
    // console.log("itemId: ", itemId);
    if(itemId) {
      const todoListItems = [...this.state.todoListItems];
      const currentItemCounter = this.state.currentItemCounter;

      const itemIndex = this.state.todoListItems.findIndex(item => {
        return item.id === itemId;
      });


      todoListItems.splice(itemIndex, 1);
      this.setState({todoListItems: todoListItems});
    }
    // console.log("todoListItems: ", this.state.todoListItems);
  }

  render() {
    let todoListItems = <TodoListItems 
      itemsList={this.state.todoListItems} 
      remove={this.removeTodoItemHandler}
    />;

    return (
      <div>
        <h1 className={classes.h1}>To Do List Manager</h1>
        <AddTodoItem 
          add={this.addTodoItemHandler} />
        {todoListItems}
      </div>
    );
  }
}

export default App;
