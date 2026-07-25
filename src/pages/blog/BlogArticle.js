import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NotFound from '../not-found/NotFound';
import ARTICLES from './articles';
import './BlogArticle.css';

const MIN_READABLE_PX = 15;
const TARGET_PX = 17;

// Articles pasted straight from a Google Docs HTML export carry a `doc-content`
// marker on <body> and hardcode a narrow, print-width column (~468pt) plus
// tiny 10pt body text. Left alone, that reads as a cramped, shrunk column
// inside our much wider iframe, so widen it and bump any text rendering
// below normal reading size back up.
function normalizeGoogleDocsExport(doc) {
  const body = doc.body;
  if (!body || !body.classList.contains('doc-content')) return;

  body.style.maxWidth = '100%';
  body.style.width = 'auto';
  body.style.boxSizing = 'border-box';
  body.style.padding = '32px clamp(16px, 5vw, 56px) 56px';

  body.querySelectorAll('p, li, span').forEach((el) => {
    if (el.closest('h1, h2, h3, h4, h5, h6')) return;
    const computedSize = parseFloat(doc.defaultView.getComputedStyle(el).fontSize);
    if (computedSize && computedSize < MIN_READABLE_PX) {
      el.style.fontSize = `${TARGET_PX}px`;
    }
  });
}

function BlogArticle() {
  const { slug } = useParams();
  const article = ARTICLES.find((item) => item.slug === slug);
  const iframeRef = useRef(null);
  const observerRef = useRef(null);
  const rafRef = useRef(null);
  const [height, setHeight] = useState(400);

  useEffect(() => {
    setHeight(400);
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [slug]);

  if (!article) {
    return <NotFound />;
  }

  const handleLoad = () => {
    const doc = iframeRef.current && iframeRef.current.contentDocument;
    if (!doc) return;

    normalizeGoogleDocsExport(doc);

    // Defer to the next frame so the height update doesn't fire synchronously
    // inside the ResizeObserver callback (avoids the benign but noisy
    // "ResizeObserver loop completed with undelivered notifications" error).
    const updateHeight = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const newHeight = doc.documentElement.scrollHeight;
        setHeight((prev) => (prev !== newHeight ? newHeight : prev));
      });
    };
    updateHeight();

    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new ResizeObserver(updateHeight);
    observerRef.current.observe(doc.documentElement);
  };

  return (
    <>
      <Header />
      <main className="blog-article">
        <Link to="/blog" className="blog-article__back">
          ← Back to all articles
        </Link>
        <header className="blog-article__header">
        </header>
        <iframe
          ref={iframeRef}
          src={article.contentPath}
          title={article.title}
          className="blog-article__frame"
          style={{ height }}
          onLoad={handleLoad}
        />
      </main>
      <Footer />
    </>
  );
}

export default BlogArticle;
