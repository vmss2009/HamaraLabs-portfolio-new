import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ARTICLES from './articles';
import './BlogList.css';

function BlogList() {
  return (
    <>
      <Header />
      <main className="blog-list">
        <section className="blog-list__hero">
          <h1>Blog</h1>
          <p>Stories, updates, and behind-the-scenes from HamaraLabs.</p>
        </section>

        {ARTICLES.length === 0 ? (
          <p className="blog-list__empty">No articles yet — check back soon.</p>
        ) : (
          <section className="blog-list__grid">
            {ARTICLES.map((article) => (
              <Link to={`/blog/${article.slug}`} className="blog-card" key={article.slug}>
                <span className="blog-card__date">{article.date}</span>
                <h2>{article.title}</h2>
                <p>{article.intro}</p>
                <span className="blog-card__cta">Read article →</span>
              </Link>
            ))}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default BlogList;
