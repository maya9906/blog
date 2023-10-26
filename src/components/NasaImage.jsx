import React, { useState } from 'react';
import axios from 'axios';
import { NASA_API_KEY } from '../config'; // Import NASA API key from a configuration file
import '../css/cbtn-ubtn.css';

function NasaImage({ handleGetImage }) {
  // State to hold the fetched NASA image data
  const [imageData, setImageData] = useState(null);

  // Function to fetch a random NASA image
  const fetchRandomNasaImage = async () => {
    try {
      // Generate a random date within the range of NASA's Astronomy Picture of the Day (APOD) data
      const randomDate = getRandomDate();

      // Send a GET request to the NASA API with the API key and random date
      const response = await axios.get(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${randomDate}`
      );

      // Extract NASA image data from the API response
      const nasaImageData = response.data;
      console.log('Received NASA image data:', nasaImageData);

      // Set the retrieved image data in the component's state
      setImageData(nasaImageData);

      // Pass the NASA image data to the parent component using the provided handleGetImage function
      handleGetImage(nasaImageData);
    } catch (error) {
      console.error('Error fetching NASA image:', error);
    }
  };

  // Function to generate a random date within the APOD date range
  const getRandomDate = () => {
    const start = new Date(1999, 10, 6); // APOD started on this date
    const end = new Date();
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    // Format the random date in ISO 8601 date-only format
    return randomDate.toISOString().split('T')[0];
  };

  return (
    <div className='image-upload-container'>
      {/* Button to fetch a random NASA image */}
      <button className='select-button' onClick={fetchRandomNasaImage}>Get Random NASA Image</button>

      {imageData && (
        // Display NASA image and its title if image data is available
        <div>
          <p className='titleofimg'>{imageData.title}</p>
          <img className='nasaimg' src={imageData.url} alt={imageData.title} />
        </div>
      )}
    </div>
  );
}

export default NasaImage;
