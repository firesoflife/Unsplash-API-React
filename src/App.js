import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Heading from './components/Heading';
import UnsplashImage from './components/UnsplashImage';
import Loader from './components/Loader';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = 'https://api.unsplash.com/';
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=25`)
      .then((res) => setImages([...images, ...res.data]));
  }, []);

  return (
    <div className='App'>
      <Heading />
      <Loader />
      {images.map((image) => (
        <UnsplashImage url={image.urls.small} key={image.id} />
      ))}
    </div>
  );
}

export default App;
