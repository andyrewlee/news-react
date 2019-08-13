import React, { useState } from 'react';
import Article from './Article';
import ArticleCounter from './ArticleCounter'
 
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=61dbc3b8b96c46868cb2ff68f404483d';

const Articles = () => {
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
    <>
      <ArticleCounter articleCount={articles.length}  />
      {renderArticles()}
    </>
  );
};

export default Articles;
