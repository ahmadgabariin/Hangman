import React, { Component } from 'react'

export class EndGame extends Component {
  render() {
    let score = this.props.score
    return (
      score <= 0 ? <div><h1 className='low-score'>Game Over</h1></div> :<div><h1 className='high-score'>Congratulations</h1></div>
    )
  }
}

export default EndGame