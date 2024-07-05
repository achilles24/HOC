import React from 'react';
import withDataFetching from './withDataFetching';
import VideoList from './VideoList'; // Assuming VideoList is defined

const VideoListWithData = withDataFetching('https://api.example.com/videos')(VideoList);

export default VideoListWithData;
