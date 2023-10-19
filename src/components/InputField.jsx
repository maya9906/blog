import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import '../css/textfeild.css';


const CustomTextField = styled(TextField)({
  '& .MuiInputBase-root': {
    lineHeight: 'normal',
    textAlign: 'left',
    minHeight: '300px',
  },
});

function InputField({ onInputChange, onTitleChange }) {
  const [inputData, setInputData] = useState('');
  const [title, setTitle] = useState(''); // タイトル用のステートを追加

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputData(value);
    onInputChange(value);
  };

  const handleTitleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
    onTitleChange(value); // タイトルを親コンポーネントに送信
  };

  return (
    <div>
      <TextField
        id="title"
        className='textfeild'
        margin-top='2em'
        type="text"
        label="Title" // タイトル用のラベル
        fullWidth
        onChange={handleTitleChange} // タイトル用のインプットの変更を処理
      />
      <CustomTextField
        id="fullWidth"
        type="text"
        label="How was your day"
        value={inputData}
        fullWidth
        onChange={handleInputChange}
        variant="outlined"
        multiline
        maxRows={10}
        className='textfeild'
      />
    </div>
  );
}

export default InputField;
