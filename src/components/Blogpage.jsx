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

  const handleInputChange = (inputData) => {
    setData(inputData);
  };

  const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
  };

  const handleCreateBlog = () => {
    if (data && title) {
      const newBlogContent = { text: data, title: title, nasaImageData: null };
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
  
  return (
    <div className="App">
      <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
      <div className="btnsctn">
        <NasaImage />
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
        {newBlog && newBlog.nasaImageData !== null && (
          <Cards text={newBlog.text} title={newBlog.title} nasaImageData={newBlog.nasaImageData} />
        )}
      </div>
    </div>
  );
}

export default Blogpage;

// import React, { useState } from 'react';
// import InputField from './InputField';
// import CreateButton from './CreateButton';
// import NasaImage from './NasaImage';
// import '../App.css';
// import Cards from './Cards';

// function Blogpage() {
//   const [data, setData] = useState('');
//   const [title, setTitle] = useState('');
//   const [blogContent, setBlogContent] = useState([]);
//   const [newBlog, setNewBlog] = useState(null);

//   const handleInputChange = (inputData) => {
//     setData(inputData);
//   };

//   const handleTitleChange = (newTitle) => {
//     setTitle(newTitle);
//   };

//   const handleCreateBlog = () => {
//     if (data && title) {
//       const newBlogContent = { text: data, title: title, nasaImageData: null };
//       setBlogContent([newBlogContent, ...blogContent]);
//       setData('');
//       setTitle('');

//       // 新しいブログが作成されたとき、newBlogステートを設定
//       setNewBlog(newBlogContent);
//     }
//   };

//   return (
//     <div className="App">
//       <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
//       <div className="btnsctn">
//         <NasaImage />
//         <CreateButton onClick={handleCreateBlog} />
//       </div>
//       <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '2em' }}>
//         {blogContent.map((content, index) => (
//           <Cards key={index} text={content.text} title={content.title} nasaImageData={content.nasaImageData} />
//         ))}
//         {newBlog && newBlog.nasaImageData !== null && (
//           <Cards text={newBlog.text} title={newBlog.title} nasaImageData={newBlog.nasaImageData} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Blogpage;


// // // Blogpage.js
// // import React, { useState } from 'react';
// // import InputField from './InputField';
// // import CreateButton from './CreateButton';
// // import NasaImage from './NasaImage';
// // import '../App.css';
// // import Cards from './Cards';


// // function Blogpage() {
// //   const [data, setData] = useState('');
// //   const [title, setTitle] = useState('');
// //   const [blogContent, setBlogContent] = useState([]);

// //   const handleInputChange = (inputData) => {
// //     setData(inputData);
// //   };

// //   const handleTitleChange = (newTitle) => {
// //     setTitle(newTitle);
// //   };

// //   const handleCreateBlog = () => {
// //     if (data && title) {
// //       const newBlogContent = { text: data, title: title };
// //       setBlogContent([newBlogContent, ...blogContent]);
// //       setData('');
// //       setTitle('');
// //     }
// //   };

// //   return (
// //     <div className="App">
// //       <InputField onInputChange={handleInputChange} onTitleChange={handleTitleChange} />
// //       <div className="btnsctn">
// //         <NasaImage />
// //         <CreateButton onClick={handleCreateBlog} />
// //       </div>
// //       <div className="cards-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '2em' }}>
// //         {blogContent.map((content, index) => (
// //           <Cards key={index} text={content.text} title={content.title} />
// //         ))}
// //       </div>

// //     </div>
// //   );
// // }

// // export default Blogpage;
