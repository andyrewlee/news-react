import React from 'react';

const Article = (props) => {
  return (
    <div>
      <h2>{props.author}</h2>
      <h2>{props.content}</h2>
    </div>
  );
};

export default Article;
