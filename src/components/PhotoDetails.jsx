import React, { useState, useEffect } from 'react';

const PhotoDetails = ({ match }) => {

  const [photos, setPhoto] = useState([]);
  const [loader, setLoader] = useState(false)

  const getPhoto = async () => {
    try {
      setLoader(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const jsonResponse = await response.json();
      setPhoto(jsonResponse);
      setLoader(false);
    }
    catch (err) {
      alert(err.message);
      setLoader(false);
    }
  };
  
  useEffect(() => {
    getPhoto();
  }, [])

  return (
    <div className="photo-details">
      <h1>Photo details</h1>

      <ul>
        {loader ? 
          <div className="loader"></div>
          :
          photos.filter(photo => photo.id === parseInt(match.params.id)).map(photo => (
            <React.Fragment key={photo.id}>
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
            </React.Fragment>
          ))
        }
      </ul>
    </div>
  )
}

export default PhotoDetails;
