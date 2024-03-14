import React from 'react';
import './BackgroundVideo.css';
import truckingVideo from '../assets/trucking.mp4'; 

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src={truckingVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;