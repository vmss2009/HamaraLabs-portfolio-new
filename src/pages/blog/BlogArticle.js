import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import blogPosts from '../../content/blogPosts';
import './Blog.css';

function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (!post) return;

    let cancelled = false;
    setStatus('loading');

    fetch(`/blog/articles/${post.slug}/article.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load article');
        return res.text();
      })
      .then((text) => {
        if (cancelled) return;
        setContent(text);
        setStatus('loaded');
      })
      .catch(() => {
        if (!cancelled) setStatus('error');
      });

    return () => {
      cancelled = true;
    };
  }, [post]);

  if (!post) {
    return (
      <>
        <Header />
        <main className="blog-page">
          <section className="blog-hero">
            <h1>Article not found</h1>
            <Link to="/blog" className="blog-back">← Back to blog</Link>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="blog-page">
        <article className="blog-article">
          <Link to="/blog" className="blog-back">← Back to blog</Link>
          <span className="blog-article__date">{post.date}</span>

          {status === 'loading' && <p>Loading article…</p>}
          {status === 'error' && <p>Sorry, this article couldn't be loaded.</p>}
          {status === 'loaded' && (
            <div className="blog-article__body">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

export default BlogArticle;
