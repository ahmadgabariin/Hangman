import React, { Component } from 'react'

export class Solution extends Component {
  render() {
    return (
      <div>
            {[`_` , `_` , `_` , `_`].map(char => <span >{`${char}`} </span> )}
            <div>
              <em>Hint</em>
            </div>
      </div>
    )
  }
}

export default Solution