import React, { Component } from 'react'
import ReactDOM from 'react-dom'
const isTimeStamp = require('./isTimeStamp.js')

class App extends Component {
  constructor() {
      super()
      this.state = {input: undefined, output: ""}
  }
    
  printToScreen(json) {
      //Check that input was valid
      if (json.natural === null) {
          //Print error message
          const errorMsg = "Please enter valid timestamp or date (p.s. don't forget to add a comma in your dates)"
          this.setState({output: errorMsg})
      }
      //If input is a timestamp, return number
      else if (isTimeStamp(this.state.input)) {
          this.setState({output: json.natural})
      }
      else {this.setState({output: json.unix})}
  }

  handleSubmit() {   
    //Create correct url
    const url = "https://dry-river-67944.herokuapp.com/" + this.state.input
    fetch(url)
      .then(response => response.json())
      .then(json => this.printToScreen(json))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Timestamp Microservice</h2>
        </div>
        <p className="App-intro">
          Converts a Unix timestamp (2365145258) to a natural language date (December 16, 2016) and vice versa.
        </p>
        <input type="text" onChange={(event) => this.setState({input: event.target.value})}/> <br/>
        <button className="button" onClick={() => this.handleSubmit()}> Submit </button>
        <p> {this.state.output} </p>
      </div>
    );
  }
}

function run() {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

if (window.addEventListener) {
    window.addEventListener('DOMContentLoaded', run);
} 
else {
    window.attachEvent('onload', run);
}