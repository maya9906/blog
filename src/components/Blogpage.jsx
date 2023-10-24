// Blogpage.js
import React, { useState } from 'react';
import InputField from './InputField';
import CreateButton from './CreateButton';
import NasaImage from './NasaImage';
import '../App.css';
import Cards from './Cards';


function Blogpage() {
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState([]);

  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleCreateBlog = () => {
    if (data && title) {
      const newBlogContent = { text: data, title: title };
      setBlogContent([newBlogContent, ...blogContent]);
      setData('');
      setTitle('');
    }
  };

  return (
    <div className="App">
      <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
      <div className="btnsctn">
        <NasaImage />
        <CreateButton onClick={handleCreateBlog} />
      </div>
      <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '2em' }}>
        {blogContent.map((content, index) => (
          <Cards key={index} text={content.text} title={content.title} />
        ))}
      </div>

    </div>
  );
}

export default Blogpage;
