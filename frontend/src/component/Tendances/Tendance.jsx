import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Tendance.css";
// import video from "../../Assets/video.mp4"; 
import { FaPlay, FaPlus } from "react-icons/fa"; 

const Tendance = ({ videos = [] }) => { 
  return (
    <div className="trending-slider">
      <h2>Tendance</h2>
      <Swiper spaceBetween={15} slidesPerView={4}>
        {videos.map((video, index) => (
          <SwiperSlide key={index}> 
            <div className="video-card">
              <video
                src={video.preview}
                muted
                loop
                preload="metadata"
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => e.target.pause()}
              />
              <div className="videooverlay">
                <h3>{video.title}</h3>
                <p>{video.views}+ vues</p>
                <div className="actions">
                  <button><FaPlay /></button>
                  <button><FaPlus /></button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Tendance;
