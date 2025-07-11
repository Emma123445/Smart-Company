import React from 'react';
import './Accueil.css';
import Video from '../../Assets/video.mp4';

const Accueil = () => {
    // constnavigate = useNavigate();
    return (
        <div className="video-container">
                {/* <BsArrowLeft onClick={() => navigate(-1)} /> */}
            <video autoPlay loop muted className="background-video">
                <source src={Video} type="video/mp4" />
                Votre navigateur ne supporte pas les vidéos HTML5.
            </video>

            <div className="video-overlay">
                <h1>Bienvenue sur Smart TV</h1>
                <p>
                  Votre destination de divertissement ultime. Découvrez un monde de <br/>
                   contenus exceptionnels, en direct et à la demande.
                </p>
                <button className="start-btn">Commencer</button>
            </div>
        </div>
    );
};

export default Accueil;
