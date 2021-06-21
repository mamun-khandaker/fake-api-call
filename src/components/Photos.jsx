import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Photos = () => {
  
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false)

  const getPhotos = async () => {
    try {
      setLoader(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonResponse = await response.json();
      setPhotos(jsonResponse.slice(0, 100));
      setLoader(false);
    } 
    catch (err) {
      alert(err.message);
      setLoader(false);
    }
  };
  
  useEffect(() => {
    getPhotos();
  }, []);

  const deleteItem = (id) => {
    setPhotos(photos.filter(photo => photo.id !== id))
  }

  return (
    <div className="photos">
      <h1 className="photos-title">Photo list</h1>
      <h5 className="photos-count">Total photos: {photos.length}</h5>

      <ul>
        {loader ?
          <div className="loader"></div>
          :
          photos.map(photo => (
            <li key={photo.id}>
              <NavLink to={`/photos/${photo.id}`}>{photo.title}</NavLink>
              <button type="button" className="button-delete" onClick={() => deleteItem(photo.id)}>+</button>
            </li>
          ))          
        }
      </ul>
    </div>
  )
}

export default Photos;
