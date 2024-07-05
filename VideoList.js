import React from 'react';

const VideoList = ({ videos }) => {
  return (
    <div>
      <h2>Video List</h2>
      <ul>
        {videos.map(video => (
          <li key={video.id}>
            <img src={video.thumbnailUrl} alt={video.title} />
            <p>{video.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
