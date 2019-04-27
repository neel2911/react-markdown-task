import React from 'react';

const Preview = (props) => {
  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: props.editorText }} />
    </div>
  )
}

export { Preview };