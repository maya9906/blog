import Header from './components/Header';
import InputField from './components/InputField';
import Card from './components/Card'; // インポートするコンポーネント名を修正
import './App.css';
import React, { useState } from 'react';

function App() {
  const [data, setData] = useState(''); // dataの初期値を設定

  const handleInputChange = (inputData) => {
    setData(inputData);
  }

  return (
    <div className="App">
      <Header/>
      <InputField onInputChange={handleInputChange} />
      <Card inputData={data} />
    </div>
  );
}

export default App;
