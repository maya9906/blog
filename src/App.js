// App.js
import Header from './components/Header';
import InputField from './components/InputField';
import Card from './components/Cards';
import CreateButton from './components/CreateButton';
import ImageUpload from './components/ImageUpload';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState('');
  const [blogContent, setBlogContent] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  const handleCreateBlog = () => {
    if (data) { // 画像が選択されていなくてもブログカードが生成されるように変更
      const newBlogContent = { text: data, image: selectedImage };
      setBlogContent([...blogContent, newBlogContent]);
      setData('');
      setSelectedImage(null);
    }
  };

  const handleImageSelect = (file) => {
    setSelectedImage(file);
  };

  return (
    <div className="App">
      <Header />
      <InputField onInputChange={handleInputChange} value={data} />
      <CreateButton onClick={handleCreateBlog} />
      <ImageUpload onImageSelect={handleImageSelect} />
      {selectedImage && !blogContent.length && (
        <img src={URL.createObjectURL(selectedImage)} alt="Selected" style={{ maxWidth: '300px' }} />
      )}
      {blogContent.map((content, index) => (
        <Card key={index} text={content.text} image={content.image} />
      ))}
    </div>
  );
}

export default App;
