import React, { Component } from 'react';
import { render } from 'react-dom';
import { Preview } from './Preview';
import Editor from './Editor';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {

  defaultText = `
    # This is main Header..! (h1 size)
    
    ## This is sub header..! (h2 size)
    ### This is smaller sub header (h3 size)
    There\'s also [links](https://www.freecodecamp.com)
    Heres some code, \`<div></div>\`, between 2 backticks
    - And of course there are lists.
      - Some are bulleted.
        - With different indentation levels.
          - That look like this. 
    > Block Quotes!
    ![React Logo w/ Text](https://goo.gl/Umyytc)
    You can also make text **bold**... whoa!
    Or _italic_.
    Or... wait for it... **_both!_**
    `;

  constructor() {
    super();
    this.state = {
      textValue: this.defaultText
    };
  }

  onEditorChangeHandler = (e) => {
    this.setState({ textValue: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>Welcome to react Markdown Preview</h1>
        <Editor textValue={this.state.textValue} onEditorChangeHandler={this.onEditorChangeHandler} />
        <Preview textValue={this.state.textValue} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
