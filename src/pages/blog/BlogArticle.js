import React from 'react';
import { Link, useParams } from 'react-router-dom';
import NotFound from '../not-found/NotFound';
import ARTICLES from './articles';
import './BlogArticle.css';

function BlogArticle() {
  const { slug } = useParams();
  const article = ARTICLES.find((item) => item.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <main className="blog-article">
      <div className="blog-article__layout">
        <Link to="/blog" className="blog-article__back">
          ← Back
        </Link>
        <iframe
          src={article.src}
          title={article.title}
          className="blog-article__frame"
        />
      </div>
    </main>
  );
}

export default BlogArticle;
