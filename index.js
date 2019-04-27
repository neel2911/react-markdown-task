import React, { Component } from 'react';
import { render } from 'react-dom';
import { Preview } from './Preview';
import Editor from './Editor';
import './style.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      editorText: 'dsfsf'
    };
  }

  getEditorText = (inputText) => {
    this.setState({ editorText: inputText });
    console.log(this.state.editorText);
  }

  render() {
    return (
      <div>
        <Preview editorText={this.state.editorText} />
        <Editor defaultText={this.state.editorText} emitInputText={this.getEditorText} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
