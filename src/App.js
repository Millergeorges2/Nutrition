import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state = {
    pageTwoDisplay: 'none',
    questions: [{}]
  }
  this.startButton = this.startButton.bind(this);
}

startButton(){
  document.getElementById('pageOne').style.display = 'none';
  this.setState({
    pageTwoDisplay: ''
  })
}
  render() {
    return (
      <div>
        <div id="pageOne">
          <h1 style={{ fontSize: 40 + 'px' }} className="title">Nutrition Trivia</h1>
          <p className="title">By Miller Georges</p>
          <div id="startContainer">
            <button onClick={this.startButton} id="startButton">
              click here to start!
          </button>
          </div>
        </div>
        <div style={{display: this.state.pageTwoDisplay}} className='pageTwo'>
          <h1 style={{ textAlign: 'center', fontSize: 40 + 'px'}} className='title'>Enter the questions for your trivia here!</h1>
          <input className='questionInput'/>
        </div>
      </div>
    );
  }
}

export default App;
