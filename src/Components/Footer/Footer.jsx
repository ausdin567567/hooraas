import React from 'react';
import './Footer.css';
import { FaInstagram, FaTiktok, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-logo">
          <h4>UVA HooRaas</h4>
        </div>
        <div className="social-links">
          <a
            href="https://www.instagram.com/hooraasatuva/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@uva.hooraas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.facebook.com/HooRaasattheUniversityofVirginia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
