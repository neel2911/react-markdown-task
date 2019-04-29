import React, { Component } from 'react';

const Editor = (props) => {
  return (
    <div>
      <textarea
        id="editor"
        className="form-control"
        rows="5"
        onChange={props.onEditorChangeHandler}
        value={props.textValue}
      ></textarea>
    </div>
  )
}

export default Editor;