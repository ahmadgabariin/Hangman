import React, { Component } from 'react'
import Letter from './Letter'

export class Letters extends Component {
  render() {
    const letterStatus = this.props.letterStatus
    return (
      <div>
          <div>Available Letters</div>
          { Object.keys(letterStatus).map(key => <Letter char = {key} class = { letterStatus[key] ? `used` : `not-used`} /> ) }
      </div>
    )
  }
}

export default Letters