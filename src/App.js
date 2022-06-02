import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Score } from './components/Score';
import Solution from './components/Solution';
import Letters from './components/Letters';
import EndGame from './components/EndGame';



class App extends Component {
  constructor () {
    super ()
    this.state = {
      letterStatus : this.generateLetterStatuses() ,
      solution : {
        word : `BYTES` ,
        hint : `The Hint` ,
      },
      score : 100 ,
      gameOver : false 
    }
  }

  generateLetterStatuses () {
    let letterStatus = {}
    for (let i = `A`.charCodeAt() ; i <= `Z`.charCodeAt() ; i++) {
      letterStatus[String.fromCharCode(i)] = false
    }
    return letterStatus
  }

  selectLetter = letter => {
    if ( ! this.state.letterStatus[letter]) {
      let score = this.state.score
      let word = this.state.solution.word
      let duplictedLetterStatus = {...this.state.letterStatus}
      duplictedLetterStatus[letter] = true
      word.includes(letter) ? this.state.score = score + 5 : this.state.score = score - 20
      if (this.state.score <= 0) {
        this.state.score = 0
        alert(`you gonna die!`)
        this.setState({
          letterStatus : duplictedLetterStatus ,
          gameOver : true
        })
      } else {
          this.setState({
          letterStatus : duplictedLetterStatus
        } , () => {
          let result = word.split(``).every(char => this.state.letterStatus[char])
          if (result) {
            this.setState({
              gameOver : true
            })
          }
        })
      }

    }

      
  

  }

  render () {
   
    if (! this.state.gameOver) {
      return (
        <div className='container'> 
          <Score score = {this.state.score} />
          <Solution letterStatus = {this.state.letterStatus} solution = {this.state.solution}/>
          <Letters letterStatus = {this.state.letterStatus} selectLetter = {this.selectLetter} />
        </div>
      )
    } else {
      return (
        <div className='container'>
          <EndGame score = {this.state.score}/>
        </div>
      )
    }
  }
}

export default App;
