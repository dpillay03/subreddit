import React from 'react';
import Main from './Main';
import RedditLogo from '../../src/assets/reddit.webp'
import './style.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={RedditLogo} />
        <h1>Subreddit Search Engine</h1>

      </header>
        <Main />
    </div>
  );
}

