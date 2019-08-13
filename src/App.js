import React, { useState } from 'react';
import './App.css';

const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=61dbc3b8b96c46868cb2ff68f404483d';

const Article = (props) => {
  return (
    <div>
      <h2>{props.author}</h2>
      <h2>{props.content}</h2>
    </div>
  );
};

const ArticleCounter = (props) => {
  return (
    <h1>{props.articleCount} articles</h1>
  )
}

const App = () => {
  const [articles, setArticles] = useState([]);

  fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      setArticles(res.articles);
    });

  const renderArticles = () => {
    const renderedArticles = [];
    for (let i = 0; i < articles.length; i += 1) {
      const currentArticle = articles[i];
      renderedArticles.push(
        <Article
          key={currentArticle.id}
          author={currentArticle.author}
          content={currentArticle.content}
        />
      );
    }

    if (articles.length === 0) {
      return 'Loading...';
    }

    return renderedArticles;
  };

  return (
    <div className="App">
      <ArticleCounter articleCount={articles.length}  />
      {renderArticles()}
    </div>
  );
}

export default App;
