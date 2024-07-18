import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { Button } from "./Button";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our newsletter to recieve our latest news
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline" buttonSize="btn--medium">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h6>About Us</h6>
            <Link to="/services">Services</Link>
            <Link to="/products">Products</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h6>Find Us</h6>
            <Link to="/testimonial">Testimonial</Link>
            <Link to="/sign-up">Contact Us</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h6>Usefull Links</h6>
            <Link to="/sign-up">Privacy Policy</Link>
            <Link to="/sign-up">Terms and Condiitons</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              React Craft <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">React Craft © 2024</small>
          <div className="social-icons">
            <Link
              to="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="social-icon-link instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              to="https://linkedin.com"
              target="_blank"
              aria-label="Linkedin"
              className="social-icon-link linkedin"
            >
              <i className="fab fa-linkedin" />
            </Link>
            <Link
              to="https://youtube.com"
              target="_blank"
              aria-label="Linkedin"
              className="social-icon-link youtube"
            >
              <i className="fab fa-youtube" />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              aria-label="Linkedin"
              className="social-icon-link twitter"
            >
              <i className="fab fa-twitter" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
