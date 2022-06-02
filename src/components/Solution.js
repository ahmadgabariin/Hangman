import React, { Component } from 'react'
import Letter from './Letter'

export class Solution extends Component {
  render() {
    let letterStatus = this.props.letterStatus
    let word = this.props.solution.word
    let hint = this.props.solution.hint
    return (
      <div>
            { word.split(``).map( char => <Letter char = { letterStatus[char] ? char : `_` }  />  ) }
            <div>
              <em>{hint}</em>
            </div>
      </div>
    )
  }
}

export default Solution