import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      groceries: ['salami', 'butter', 'bread', 'eggs']
    }
  }
  
  // addGroceries(val){
  //   this.setState({
  //     groceries: val
  //   })
  // }

  render(){
    const groceryList = this.state.groceries.map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })
  
    return (
      <div className="App">
        {groceryList}
      </div>
    );
  }
}

export default App;
