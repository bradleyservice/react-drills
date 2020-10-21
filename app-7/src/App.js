import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import NewTask from './NewTask';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: []
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleAddItem(item){
    this.setState({list: [...this.state.list, item]})
  }

  render(){
    return (
      <div className='App'>
        <h1>My CRAZY To-Do List:</h1>
        <NewTask item={this.handleAddItem} />
        <List inventory={this.state.list} />
      </div>
    );
  }
}

export default App;
