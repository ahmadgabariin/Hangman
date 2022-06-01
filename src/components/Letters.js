import React, { Component } from 'react'
import Letter from './Letter'

export class Letters extends Component {
  render() {
    return (
      <div>
          <div>Available Letters</div>
          <div> <Letter/> </div>
      </div>
    )
  }
}

export default Letters