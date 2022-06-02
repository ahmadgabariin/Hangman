import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Score } from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';



class App extends Component {
  constructor () {
    super ()
    this.state = {
      letterStatus : this.generateLetterStatuses() ,
      solution : {
        word : `BYTES` ,
        hint : `The Hint` ,
      },
      score : 1
    }
  }

  generateLetterStatuses () {
    let letterStatus = {}
    for (let i = `A`.charCodeAt() ; i <= `Z`.charCodeAt() ; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    console.log(letterStatus)
    return letterStatus
  }

  render () {
   
    return (
      <div> 
        <Score score = {this.state.score} />
        <Solution letterStatus = {this.state.letterStatus} solution = {this.state.solution}/>
        <Letters letterStatus = {this.state.letterStatus}/>
      </div>
    )
  }
}

export default App;
