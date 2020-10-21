import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  
  handleAddItem(){
    this.setState({
    list: [...this.state.list, this.state.input],
    input: ''
  })
  }

  handleInputChange(val){
    this.setState({input: val})
  }

  render(){
    let list = this.state.list.map((e, i) => {
      return <Todo key={i} newItem={e} />
    })
    return (
      <div className="App">
        <h1>My To-Do List:</h1>
        <div>
          <input type='text' placeholder='Add more stuff...' 
          value={this.state.input} onChange={(e) => this.handleInputChange(e.target.value)} />
          <button onClick={this.handleAddItem} >Add</button>
        </div>
        <br />
        {list}
      </div>
    );
  }
}

export default App;
