import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const categories = [
    {
      id: 'homeschoolers',
      title: 'Home Schoolers',
      path: '/homeschoolers',
      color: '#f6936b',
      darkColor: '#e67a50'
    },
    {
      id: 'students',
      title: 'School Going Students',
      path: '/students',
      color: '#ffd15f',
      darkColor: '#f5c34a'
    },
    {
      id: 'atls',
      title: 'ATLs and Makerspaces',
      path: '/atls',
      color: '#63b46b',
      darkColor: '#4aa460'
    }
  ];

  return (
    <>
      <Header />
      
      <div className="category-selection">
        <div className="category-buttons">
          {categories.map(category => (
            <Link
              key={category.id}
              to={category.path}
              className="category-btn"
              style={{ 
                background: `linear-gradient(135deg, ${category.darkColor}, ${category.color})`,
                boxShadow: `0 8px 24px ${category.color}40`
              }}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Home;
