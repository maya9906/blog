// NasaImage.js
import React, { useState } from 'react';
import axios from 'axios';
import { NASA_API_KEY } from '../config';
import '../css/cbtn-ubtn.css';

function NasaImage({handleGetImage}) {
  const [imageData, setImageData] = useState(null);

  const fetchRandomNasaImage = async () => {
    console.log('Button clicked!');
    try {
      const randomDate = getRandomDate();
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${randomDate}`
      );
      const nasaImageData = response.data;
      console.log('Received NASA image data:', nasaImageData);
      setImageData(nasaImageData); // 画像データを設定
      handleGetImage(nasaImageData);
    } catch (error) {
      console.error('Error fetching NASA image:', error);
    }
  };

  const getRandomDate = () => {
    const start = new Date(1999, 10, 6); // APOD started on this date
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
  };

  return (
    <div className='image-upload-container'>
      <button className='select-button' onClick={fetchRandomNasaImage}>Get Random NASA Image</button>
      {imageData && (
        <div>
          <p className='titleofimg'>{imageData.title}</p>
          <img className='nasaimg' src={imageData.url} alt={imageData.title} />
        </div>
      )}
    </div>
  );
}

export default NasaImage;
