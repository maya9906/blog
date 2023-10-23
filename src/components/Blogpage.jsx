// Blogpage.js
import InputField from './InputField'; 
import Cards from './Cards'; 
import CreateButton from './CreateButton'; 
import ImageUpload from './ImageUpload'; 
import '../App.css'; 
import React, { useState } from 'react';

function Blogpage() {
  const [data, setData] = useState('');
  const [title, setTitle] = useState(''); // タイトルのステートを追加
  const [blogContent, setBlogContent] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  const handleTitleChange = (title) => {
    setTitle(title); // タイトルを更新
  };

  const handleCreateBlog = () => {
    if (data && title) {
      const newBlogContent = { text: data, image: selectedImage, title: title }; // タイトルを追加
      setBlogContent([...blogContent, newBlogContent]);
      setData('');
      setSelectedImage(null);
      setTitle(''); // タイトルをリセット
    }
  };

  const handleImageSelect = (file) => {
    setSelectedImage(file);
  };

  return (
    <div className="App">
      <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
      <div className='btnsctn'>
        <ImageUpload onImageSelect={handleImageSelect} />
        {selectedImage && !blogContent.length && (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '300px' }} />
        )}
        <CreateButton onClick={handleCreateBlog} />
      </div>
      <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px',marginBottom:'2em' }}>
        {blogContent.map((content, index) => (
          <Cards style={{ display: 'block', margin: '0 auto'}} key={index} text={content.text} image={content.image} title={content.title} />
        ))}
      </div>
    </div>
  );
}


export default Blogpage;
