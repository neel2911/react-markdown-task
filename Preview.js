import React from 'react';
import marked from 'marked';
const Preview = (props) => {
  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.editorText) }} />
    </div>
  )
}

export { Preview };