import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Gallery.css';

import rose from '../assets/flowers/rose.jpg';
import tulip from '../assets/flowers/tulip.jpg';
import lily from '../assets/flowers/lily.jpg';
import daisy from '../assets/flowers/daisy.jpg';
import sunflower from '../assets/flowers/sunflower.jpeg';
import orchid from '../assets/flowers/orchid.jpg';

const Gallery = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if(!localStorage.getItem('name')){
      navigate('/login');
    }
  });
  const images = [rose, tulip, lily, daisy, sunflower, orchid];

  return (
    <div className="gallery_container">
      <h2>Our Flower Collection</h2>
      <div className="gallery_grid">
        {images.map((src, index) => (
          <div className="gallery_item" key={index}>
            <img src={src} alt={`Flower ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
