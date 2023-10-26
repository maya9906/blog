import React from 'react';
import '../css/header.css';
import '../css/home.css';
import homeImage from '../imgs/home.png';


function Header() {
  return (
    <section className='home'>
      <div className='imgsection'>
        <img className='homeimg' src={homeImage} alt="Home" />
      </div>
      <div className='titlesection'>
        <p className='urw'>Your Words, Your World</p>
        <h1 className='cp'>Let's Blog the Universe</h1>
        <p className='bcp'>Discover the power of blogging and engage with like-minded individuals.</p>
        <button className='wbtn' onClick={handleButtonClick}>Write a blog</button>
      
      </div>
    </section>
  );
}

export default Home;
