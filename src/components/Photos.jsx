import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Photos = () => {
  
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonResponse = await response.json();
      setPhotos(jsonResponse);
    } 
    catch (err) {
      alert(err.message);
    }
  };
  
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="photos">
      <h1 className="photos-title">Photo list</h1>

      <ul>
        {photos.map(photo => (
          <li key={photo.id}><NavLink to={`/photos/${photo.id}`}>{photo.title}</NavLink></li>
        ))}
      </ul>
    </div>
  )
}

export default Photos;
