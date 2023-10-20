import React, { useState } from 'react';
import '../css/textfeild.css';

function InputField({ onInputChange, onTitleChange }) {
  const [inputData, setInputData] = useState('');
  const [title, setTitle] = useState('');
  const inputLimit = 200; // コンテンツの制限文字数
  const titleLimit = 30; // タイトルの制限文字数

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length <= inputLimit) {
      setInputData(value);
      onInputChange(value);
    }
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    if (value.length <= titleLimit) {
      setTitle(value);
      onTitleChange(value);
    }
  };

  return (
    <div className='inputbox'>
      <h2>Hey, what happened today?</h2>
      <input
        id="title"
        className='textfeild'
        type="text"
        placeholder='Title'
        value={title}
        onChange={handleTitleChange}
      />
      <p>Remaining {titleLimit - title.length} characters</p>
      <textarea
        id="fullWidth"
        className='textfeild'
        value={inputData}
        onChange={handleInputChange}
        placeholder='How was your day'
      />
      <p>Remaining  {inputLimit - inputData.length} characters</p>
    </div>
  );
}

export default InputField;



// import React, { useState } from 'react';
// // import { TextField } from '@mui/material';
// // import { styled } from '@mui/system';
// import '../css/textfeild.css';


// // const CustomTextField = styled(TextField)({
// //   '& .MuiInputBase-root': {
// //     lineHeight: 'normal',
// //     textAlign: 'left',
// //     minHeight: '300px',
// //     color: 'purple',
// //   },
// // });

// function InputField({ onInputChange, onTitleChange }) {
//   const [inputData, setInputData] = useState('');
//   const [title, setTitle] = useState(''); // タイトル用のステートを追加

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setInputData(value);
//     onInputChange(value);
//   };

//   const handleTitleChange = (event) => {
//     const value = event.target.value;
//     setTitle(value);
//     onTitleChange(value); // タイトルを親コンポーネントに送信
//   };

//   return (
//     <div className='inputbox'>
//       <h2>Hey, what happened today?</h2>
//       <input
//         id="title"
//         className='textfeild'
//         margin-top='2em'
//         type="text"
//         label="Title" // タイトル用のラベル
//         placeholder='Title'
        
//         title={title}
//         onChange={handleTitleChange} // タイトル用のインプットの変更を処理
//         />
//       <input
//         id="fullWidth"
//         type="text"
//         label="How was your day"
//         value={inputData}
//         onChange={handleInputChange}
//         variant="outlined"       
//         className='textfeild'
//         placeholder='How was your day'
//       />
//     </div>
//   );
// }

// export default InputField;
