import React from 'react';
import Tendance from '../component/Tendances/Tendance';
import video1 from '../Assets/video1.mp4'; 
import video2 from '../Assets/video2.mp4'; 
import video3 from '../Assets/video3.mp4'; 
import video4 from '../Assets/video4.mp4';
import './CSS/VirtrineSmart.css'; // Assuming you have a CSS file for styling
const VirtrineSmart = (props) => {
     const videos = [
    {
      title: "Film Africain 1",
      preview: video1,
      views: 3500,
    },
    {
      title: "Film Africain 2",
      preview: video2,
      views: 2800,
    },
    {
      title: "Film Africain 3",
      preview: video3,
      views: 4700,
    },
     {
      title: "Film Africain 2",
      preview: video4,
      views: 2800,
    },
  ];

  return (
    <div>
      
      <Tendance videos={videos} />
    </div>
  );
};

export default VirtrineSmart;