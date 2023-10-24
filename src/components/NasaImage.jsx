import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NASA_API_KEY } from '../config'; // config.jsからAPIキーをインポート

function NasaImage() {
  const [imageData, setImageData] = useState(null);
  const [date, setDate] = useState('');

  // useEffect 関数の使用を明示的に示す
  useEffect(() => {
    const fetchNasaImage = async () => {
      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`
        );
        setImageData(response.data);
      } catch (error) {
        console.error('Error fetching NASA image:', error);
      }
    };

    fetchNasaImage();
  }, [date]);

  const getRandomDate = () => {
    const start = new Date(1995, 5, 16); // APOD started on this date
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
  };

  const handleGetRandomImage = () => {
    const randomDate = getRandomDate();
    setDate(randomDate);
  };

  return (
    <div>
      <button onClick={handleGetRandomImage}>Get Random NASA Image</button>
      {imageData && (
        <div>
          <h2>{imageData.title}</h2>
          <img src={imageData.url} alt={imageData.title} />
          <p>{imageData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default NasaImage;
