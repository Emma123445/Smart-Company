import React, { useState } from 'react';
import './Navbar.css';
import userImg from '../../Assets/user.png'; // Adjust the path as necessary
import {
  FaCircle,
  FaAngleDown,
  FaEnvelope,
  FaHeart,
  FaSlidersH,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar-container">
      <nav className="navbar">
        <h1 className="logo">Smart Tv</h1>

        {/* Mobile toggle button */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar-list ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Accueil</a></li>
          <li><a href="/cinema">Cinéma</a></li>
          <li><a href="/musique">Musique</a></li>
          <li><a href="/documentaire">Documentaire</a></li>
          <li><a href="/sport">Sport</a></li>
          <li><a href="/live">Live</a></li>
          <li><a href="/divertissement">Divertissement</a></li>
          <li><a href="/info">Info</a></li>
        </ul>
      </nav>

      <div className="profile-dropdown">
        <div className="profile-dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <div className="profile-img">
            <img src={userImg} alt="user" />
            <FaCircle className="status-icon" />
          </div>
          <span className="profile-name">
            Emmanuel<FaAngleDown />
          </span>
        </div>

        <ul className={`profile-dropdown-list ${dropdownOpen ? 'open' : ''}`}>
          <li className="profile-dropdown-list-item">
            <a href="/profile"><FaUser /> Mon Profil</a>
          </li>
          <hr />
          <li className="profile-dropdown-list-item">
            <a href="/historique"><FaEnvelope /> Historique</a>
          </li>
          <hr />
          <li className="profile-dropdown-list-item">
            <a href="/favoris"><FaHeart /> Favoris</a>
          </li>
          <hr />
          <li className="profile-dropdown-list-item">
            <a href="/settings"><FaSlidersH /> Paramètres</a>
          </li>
          <hr />
          <li className="profile-dropdown-list-item">
            <a href="/aide"><FaQuestionCircle /> Aide</a>
          </li>
          <hr />
          <li className="profile-dropdown-list-item">
            <a href="/logout"><FaSignOutAlt /> Déconnexion</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
