import React, { Component } from 'react';


export default class Editor extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <textarea id="editor"></textarea>
      </div>
    )
  }

}