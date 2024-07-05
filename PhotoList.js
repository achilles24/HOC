import React from 'react';

const PhotoList = ({ photos }) => {
  return (
    <div>
      <h2>Photo List</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
