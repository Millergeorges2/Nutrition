import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pageTwoDisplay: 'none',
      questions: [{}]
    }
    this.startButton = this.startButton.bind(this);
    this.addQuestionButton = this.addQuestionButton.bind(this);
    this.pageTwoNext = this.pageTwoNext.bind(this);
  }


  startButton() {
    document.getElementById('pageOne').style.display = 'none';
    this.setState({
      pageTwoDisplay: ''
    })
  }

  addQuestionButton() {
    let inpt = document.createElement('input');
    inpt.className = 'questionInput'
    document.getElementById('questionSection').appendChild(inpt);
  }

  pageTwoNext(){
    
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
        <div style={{ display: this.state.pageTwoDisplay }} className='pageTwo'>
          <h1 style={{ textAlign: 'center', fontSize: 40 + 'px' }} className='title'>Enter the questions for your trivia here!</h1>
          <div id='questionSection'>
            <input className='questionInput' placeholder='1' />
            <input className='questionInput' placeholder='2' />
            <input className='questionInput' placeholder='3' />
            <input className='questionInput' placeholder='4' />
            <input className='questionInput' placeholder='5' />
            <input className='questionInput' placeholder='6' />
          </div>
          <button onClick={this.addQuestionButton} className='questionInput'> Click here to add Additional Questions!</button>
          <button onClick={this.pageTwoNext} className='questionInput'>Click here to continue!</button>
        </div>
      </div>
    );
  }
}

export default App;
