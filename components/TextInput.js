import React, { Component } from 'react'
import TextDisplay from './TextDisplay'

class TextInput extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      inputText: 'some text'
    }
  }

  deleteLastLetter () {
    this.setState({
      inputText: this.state.inputText.substring(0, this.state.inputText.length - 1)
    })
  }

  handleChange (event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render () {
    return (
      <div>
        <input
          type='text'
          placeholder='This is text'
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} deleteLastLetter={this.deleteLastLetter.bind(this)} />
      </div>
    )
  }
}

export default TextInput
