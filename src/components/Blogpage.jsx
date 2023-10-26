import React, { useState } from 'react';
import InputField from './InputField';
import CreateButton from './CreateButton';
import NasaImage from './NasaImage';
import '../App.css';
import '../css/card.css';
import Cards from './Cards';

function Blogpage() {
  // Initialize state variables
  const [data, setData] = useState('');
  const [title, setTitle] = useState('');
  const [blogContent, setBlogContent] = useState([]);
  const [newBlog, setNewBlog] = useState(null);
  const [image, setImage] = useState(null);

  // Handler for blog content input
  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  // Handler for blog title input
  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  // Handler for creating a new blog
  const handleCreateBlog = () => {
    if (data && title) {
      // Create new blog content
      const newBlogContent = { text: data, title: title, nasaImageData: image };
      // Add the new blog to the existing blog content
      setBlogContent([newBlogContent, ...blogContent]);
      // Reset the form
      setData('');
      setTitle('');
      // Set the newBlog state when a new blog is created
      setNewBlog(newBlogContent);
    }
  };

  // Handler for deleting a blog
  const handleDeleteBlog = (index) => {
    // Delete a blog
    const updatedBlogContent = [...blogContent];
    updatedBlogContent.splice(index, 1);
    setBlogContent(updatedBlogContent);
  };

  // Handler for getting NASA images
  function handleGetImage(img){
    setImage(img);
  }

  return (
    <div className="App">
      <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
      <div className="btnsctn">
        <NasaImage handleGetImage={handleGetImage} />
        <CreateButton onClick={handleCreateBlog} />
      </div>
      <div className="cards-grid" style={{ display: 'grid', gap: '20px', marginBottom: '2em' }}>
        {/* Display blog content */}
        {blogContent.map((content, index) => (
          <Cards
            key={index}
            text={content.text}
            title={content.title}
            nasaImageData={content.nasaImageData}
            onDelete={() => handleDeleteBlog(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Blogpage;
