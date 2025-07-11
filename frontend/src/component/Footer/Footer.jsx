import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaApplePay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section brand">
          <h2>SmartTV</h2>
          <p>La meilleure plateforme de streaming pour tous vos contenus préférés.</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        <div className="footer-section">
          <h4>Liens rapides</h4>
          <ul>
            <li>Accueil</li>
            <li>Films</li>
            <li>Séries</li>
            <li>Live</li>
            <li>Ma Liste</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Aide</li>
            <li>Compte</li>
            <li>Centre média</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Légal</h4>
          <ul>
            <li>Conditions d'utilisation</li>
            <li>Politique de confidentialité</li>
            <li>Cookies</li>
            <li>Informations légales</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SmartTV. Tous droits réservés.</p>
        <div className="footer-bottom-right">
          <span>Moyens de paiement :</span>
          <FaCcVisa />
          <FaCcMastercard />
          <FaPaypal />
          <FaApplePay />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
