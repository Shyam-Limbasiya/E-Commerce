// Footer.jsx

import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="logo-text">Your E-Commerce Store</h2>
          <p>
          Stay connected for updates on promotions, new arrivals, and exclusive offers.
          </p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> 123-456-789</span>
            <span><i className="fas fa-envelope"></i> info@example.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Your E-Commerce Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
