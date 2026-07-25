import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../content/blogPosts';
import './Blog.css';

function Blog() {
  return (
    <>
      <Header />
      <main className="blog-page">
        <section className="blog-hero">
          <h1>Blog</h1>
          <p>Stories, build logs, and updates from HamaraLabs.</p>
        </section>

        <section className="blog-list">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
              <span className="blog-card__date">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.intro}</p>
              <span className="blog-card__cta">Read article →</span>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Blog;
