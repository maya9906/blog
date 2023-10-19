import React from 'react';
import '../css/header.css';
function Header() {
  return (
    <section className='home'>
      <div className='imgsection'>
        <img></img>
      </div>
      <div className='titlesection'>
        <p>Your Words, Your World</p>
        <h1>Let's Blog the Universe</h1>
        <p>Your stories, your passion, your audience - all in one place.</p>
      </div>

      <button>Write a blog</button>
    </section>
    
  );
}

export default Header;
