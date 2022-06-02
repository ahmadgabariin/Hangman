import React, { Component } from 'react'

export class Letter extends Component {
    
    selectLetter = () => {
        this.props.selectLetter(this.props.char)
    }

    render() {
        return (
            <span className = {this.props.class} onClick = {this.selectLetter} >{this.props.char}  </span>
        )
    }
}

export default Letter