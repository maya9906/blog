// Cards.jsx
import React from 'react';

function Card({ text, image }) {
  return (
    <div className="blog-card">
      {image && <img src={URL.createObjectURL(image)} alt="Selected" style={{ maxWidth: '300px' }} />}
      <p>{text}</p>
    </div>
  );
}

export default Card;
