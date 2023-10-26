import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Blogpage from './components/Blogpage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // ページ切り替えのハンドラ
  const handlePageChange = (pageName) => {
    setCurrentPage(pageName);
  };

  return (
    <div className="App">
      <Header />
      <Home />
      <Blogpage />
    </div>
  );
}

export default App;
