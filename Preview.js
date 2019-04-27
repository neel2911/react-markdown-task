import React from 'react';

const Preview = (props) => {
  return (
    <div>
      <div>Happy coding !!</div>
      <div id="preview" dengerouslySetInnerHTML={{ _html: props.editorText }}> </div>
    </div>
  )
}

export default Preview;