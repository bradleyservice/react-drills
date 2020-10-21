import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      birds: ['bluejay', 'cardinal', 'mockingbird', 'chickadee', 'crow'],
      filterString: ''
    }
  }

  handleChange(filter){
    this.setState({
      filterString: filter
    })
  }

  render(){
    const filteredBirds = this.state.birds
    .filter((e, i) => {
      return e.includes(this.state.filterString)
    })
    .map((e, i) => {
      return <h2 key={i}>{e}</h2>
    });

    return (
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} input='text' />
        {filteredBirds}
      </div>
    );
  }
}

export default App;
