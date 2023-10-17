// InputField.js (入力フィールドコンポーネント)
import React, { useState } from 'react';

function InputField({ onInputChange }) {
  const [inputData, setInputData] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputData(value);
    onInputChange(value); // 親コンポーネントにデータを送信
  }

  return (
    <input
      type="text"
      placeholder="入力してください"
      value={inputData}
      onChange={handleInputChange}
    />
  );
}

export default InputField;
