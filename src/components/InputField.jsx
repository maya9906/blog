// InputField.js
import React, { useState } from 'react';
import '../css/textfeild.css';

function InputField({ onInputChange, onTitleChange }) {
  const [inputData, setInputData] = useState('');
  const [title, setTitle] = useState('');
  const inputLimit = 200;
  const titleLimit = 30;

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
        title={title}
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
