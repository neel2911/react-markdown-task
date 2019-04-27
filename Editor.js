import React, { Component } from 'react';


export default class Editor extends Component {
  constructor() {
    super();
    this.state = {
      editorText: ''
    }
  }

  onEditorHandler = (e) => {
    this.setState({ editorText: e.target.value });

    setTimeout(() => {
      this.props.emitInputText(this.state.editorText);
    }, 0)
  }

  render() {
    return (
      <div>
        <textarea id="editor" onInput={this.onEditorHandler} value={this.props.defaultText}></textarea>
      </div>
    )
  }

}