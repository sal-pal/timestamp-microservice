import React, { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
      super()
      this.state = {input: undefined}
  }
    
  handleSubmit() {
    //Create correct url
    const url = "https://dry-river-67944.herokuapp.com/" + this.state.input
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App" marginTop="200px">
        <div className="App-header">
          <h2>Timestamp Microservice</h2>
        </div>
        <p className="App-intro">
          Converts a Unix timestamp (2365145258) to a natural language date (December 16, 2016) and vice versa.
        </p>
        <form>    
          <input type="text" onChange={(event) => this.setState({input: event.target.value})}/> <br/>
          <input type="submit" onSubmit={() => this.handleSubmit()}/>
        </form>
      </div>
    );
  }
}

export default App;
