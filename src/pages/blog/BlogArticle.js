import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
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
    <>
      <Header />
      <main className="blog-article">
        <Link to="/blog" className="blog-article__back">
          ← Back to all articles
        </Link>
        <iframe
          src={article.src}
          title={article.title}
          className="blog-article__frame"
        />
      </main>
      <Footer />
    </>
  );
}

export default BlogArticle;
