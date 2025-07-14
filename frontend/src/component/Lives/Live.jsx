import React from "react";
import "./Live.css";
import liveCover from "../../Assets/live-cover.jpg";
import { FaPlay } from "react-icons/fa";

const Live = () => {
  // Données temporaires — à remplacer plus tard par des données du backend
  const liveChannels = [ 
    {
      id: 1,
      title: "Chaîne 1",
      description: "Programme en cours: Émission spéciale",
      thumbnail: liveCover,
    },
    {
      id: 2,
      title: "Chaîne 2",
      description: "Programme en cours: Émission spéciale", 
      thumbnail: liveCover, 
    },
    {
      id: 3,
      title: "Chaîne 3",
      description: "Programme en cours: Émission spéciale",
      thumbnail: liveCover,
    },
    {
      id: 4,
      title: "Chaîne 4",
      description: "Programme en cours: Émission spéciale",
      thumbnail: liveCover,
    },
    {
      id: 5,
      title: "Chaîne 4",
      description: "Télé réalitée",
      thumbnail: liveCover,
    },
  ];

  return (
    <div className="live-section">
      <div className="section-header">
        <h2>En Direct</h2>
        <a href="/live" className="voir-tout">Voir tout</a>
      </div>

      <div className="live-grid">
        {liveChannels.map((channel) => (
          <div className="live-card" key={channel.id}>
            <div className="card-image">
              <img src={channel.thumbnail} alt={channel.title} />
              <span className="live-badge">LIVE</span>
            </div>
            <div className="card-content">
              <h3>{channel.title}</h3>
              <p>{channel.description}</p>
              <button className="watch-button">
                <FaPlay className="play-icon" /> Regarder 
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;
