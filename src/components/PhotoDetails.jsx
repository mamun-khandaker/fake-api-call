import React, { useState, useEffect } from 'react';

const PhotoDetails = ({ match }) => {

  const [photo, setPhoto] = useState([]);

  const getPhoto = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonResponse = await response.json();
      setPhoto(jsonResponse);
    }
    catch (err) {
      alert(err.message);
    }
  };
  
  useEffect(() => {
    getPhoto();
  }, [])

  return (
    <div className="photo-details">
      <h1>Photo details</h1>

      <ul>
        {
          photo.filter(photo => photo.id == match.params.id).map(photo => (
            <>
              <li>
                <strong>Album ID</strong>: {photo.albumId}
              </li>
              <li>
                <strong>Photo ID</strong>: {photo.id}
              </li>
              <li>
                <strong>Title</strong>: {photo.title}
              </li>
              <li>
                <strong>Thumbnail</strong>: <br />
                <img src={photo.thumbnailUrl} alt="large" />
              </li>
              <li>
                <strong>Full image</strong>: <br />
                <img src={photo.url} alt="large" />
              </li>
            </>
          ))
        }
      </ul>
    </div>
  )
}

export default PhotoDetails;
