import React from 'react';
import Navigation from '../global/Navigation';
import Content from '../global/Content';
import './App.css';

const App = () => {
  return (
    <main className="docs__container">
      <nav className="docs__nav">
        <Navigation />
      </nav>
      <section className="docs__item-list">
        <Content />
      </section>
    </main>
  );
};

export default App;