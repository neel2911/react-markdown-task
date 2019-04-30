import React from 'react';
import marked from 'marked';
const Preview = (props) => {
  marked.setOptions({
    breaks: true,
  });
  const renderer = new marked.Renderer()
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }

  console.log(marked(props.textValue, { renderer: renderer }));
  return (
    <div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.textValue, { renderer: renderer }) }} />
    </div>
  )
}

export { Preview };