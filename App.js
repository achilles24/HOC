import React from 'react';
import VideoListWithData from './VideoListWithData'; // Adjust the path as necessary
import PhotoListWithData from './PhotoListWithData'; // Adjust the path as necessary

const App = () => {
  return (
    <div className="App">
      <h1>Video and Photo Lists</h1>
      <div className="lists-container">
        <VideoListWithData />
        <PhotoListWithData />
      </div>
    </div>
  );
};

export default App;
