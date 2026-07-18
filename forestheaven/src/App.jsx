import React from "react";
import logo from "./logo1.png";
import bons from "./bons.png";
import fts from "./fts2.jpg";
function App() {
  return (
    <>
      <div className="header">
        <nav className="navbar">
          <section className="logo-section">
            <img src={logo} alt="https://foresthaven.in/img/logo1.png"/>
          </section>

          <ul className="nav-links">
            <li><a href="#">About</a></li>
            <li><a href="#">Highlights</a></li>
            <li><a href="#">Sandalwood</a></li>
            <li><a href="#">Benifits</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <button className="book-btn">Book Site Visit</button>
        </nav>
        <div className="hero">
          <div className="hero-section">
            <img src={bons} alt="https://foresthaven.in/img/bons.png"/>

          </div>
        </div>
        <section className="about">
        <div className="about-heading">
          <h1>About Forest Haven</h1>
          <p>Living, Growing Investment</p>
          <span></span>
        </div>
        <div className="about-container">
          <div className="about-text">
          <p>
            Welcome to Forest Haven - a unique luxury farmhouse community
            nestled in the serene landscapes of Dodamarg, Sindhudurg,
            just 18 km from Mopa Airport, Goa.
          </p>
          <p>
            Developed by Shivansh Builders & Promoters Pvt. Ltd.,
            Forest Haven is thoughtfully designed for those who seek
            peace, privacy, and prosperity.
          </p>
           <p>
            But Forest Haven is more than just a farmhouse-it's a living,
            growing investment. Every plot includes a professionally managed
            sandalwood plantation.
          </p>
          <div className="special-box">
            <h5>
              What Makes Forest Haven Special?
            </h5>
             <ul>
              <li>1-acre freehold farmhouse plots</li>
              <li>Fully equipped luxury bamboo cottages with jacuzzis</li>
              <li>Sandalwood tree farming integrated into each plot</li>
              <li>Proximity to Goa, yet in untouched beauty</li>
              <li>Ideal for eco-tourism and wellness retreats</li>
              <li>Managed maintenance and rental support</li>
            </ul>
          </div>
          </div>
          <div className="image-card">
            <img src={fts} alt="fts2.jpg"/>
          <div className="image-text">
            <h1>
              Come home to Forest Haven.
            </h1>

            <p>
              Discover a place where modern luxury meets untouched nature.
            </p>
          </div>
          </div>
        </div>
        </section>
        <div>Highlights</div>
        <div>Sandalwood</div>
        <div>Benifits</div>
        <div>Gallery</div>
        <div>FAQ</div>
        <div>Contact</div>
      </div>
    </>
  );
}

export default App;
