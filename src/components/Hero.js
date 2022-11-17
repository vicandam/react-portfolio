import React from "react";
import { Link } from "react-router-dom";
import socialLinks from "../constants/social_links";

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm vic</h1>
            <h4>freelance web and mobile Developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map((link) => {
                return (
                  <a href={link.url} key={link.id} className="social-link">
                    {link.icon}
                  </a>
                );
              })}
            </div>
          </div>
        </article>
        <div className="hero-image-wrapper hero-image-wrapper-constrained hero-img">
          <div className="hero-img-container">
            <img
              style={{ maxWidth: "100%", display: "block", position: "static" }}
              src="images/hero.svg"
              alt="portfolio"
              className="hero-img"
              placeholder="blurred"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Hero;
