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
  const [newBlog, setNewBlog] = useState(null);
  const [image, setImage] = useState(null);

  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleCreateBlog = () => {
    if (data && title) {

      const newBlogContent = { text: data, title: title, nasaImageData: image };
      setBlogContent([newBlogContent, ...blogContent]);
      setData('');
      setTitle('');

      // 新しいブログが作成されたとき、newBlogステートを設定
      setNewBlog(newBlogContent);
    }
  };

  const handleDeleteBlog = (index) => {
    // ブログを削除
    const updatedBlogContent = [...blogContent];
    updatedBlogContent.splice(index, 1);
    setBlogContent(updatedBlogContent);
  };
  
  function handleGetImage(img){
    setImage (img)
  }

  return (
    <div className="App">
      <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
      <div className="btnsctn">
        <NasaImage handleGetImage={handleGetImage} />
        <CreateButton onClick={handleCreateBlog} />
      </div>
      <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '2em' }}>
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