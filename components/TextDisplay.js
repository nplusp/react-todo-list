import React, { Component } from 'react'

class TextDisplay extends Component {
  constructor (props, context) {
    super(props, context)
  }

  handleClick () {
    this.props.deleteLastLetter()
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)} >
          Delete last letter
        </button>
        <div>I'm displaying text: {this.props.text}</div>
      </div>
    )
  }
}

export default TextDisplay
