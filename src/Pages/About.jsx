// src/Pages/About.jsx
import React from 'react';
import Title from '../Components/Title/Title';
import About from '../Components/About/About';
import './About.css';
import hooraas1 from '../assets/hooraas1.jpg';
import hooraas2 from '../assets/hooraas2.jpg';
import hooraas3 from '../assets/hooraas3.jpg';
import hooraas4 from '../assets/hooraas4.jpg';

const seasonImages = [
  { src: hooraas1, alt: 'HooRaas 2019-20 Season: Farming',},
  { src: hooraas2, alt: 'HooRaas 2023-24 Season: Movie Theater' },
  { src: hooraas3, alt: 'HooRaas 2021-22 Season: Minions' },
  { src: hooraas4, alt: 'HooRaas 2018-19 Season: Game of LIFE' }
];

const AboutPage = () => {
  return (
    <div className="container about-page">
      {/* Page heading */}
      <Title title="About Us" subTitle="Learn Our Story" />

      {/* Shared About section (same as Home) */}
      <About />

      {/* Extra content only on /about */}
      <section className="extra-about">

        <h3>Our History</h3>
        <p>
        Founded in 2008, HooRaas has grown to be a nationally competitive garba-raas dance team each year. Every year, we dance ot fresh sets and craft unforgettable themes, including our Dora and Minion themes recently. We've been privileged to compete at Raas All Stars, the national collegiate raas-garba championship, a total of 6 times. With 69 bid points that we have earned by placing at big competitions, we are the 4th ranked team nationally as of the 2025 season. We can't wait to continue dancing and bring on new sets.
        </p>

        <h3>Slogan</h3>
        <p>
        Hoo let the Raas out? Hoo Hoo HooRaas! (X2) Hoo what? HooRaas! Hoo what? HooRaas! Hoooo what? HOOOORAAS!
        </p>

        <h3>Throughout the Years</h3>
        <div className="years-gallery">
          {seasonImages.map(({ src, alt }, idx) => (
            <div key={idx} className="gallery-item">
              <img src={src} alt={alt} />
              <div className="overlay">{alt}</div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default AboutPage;

