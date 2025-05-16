// src/Components/CompetitionGallery/CompetitionGallery.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CompetitionGallery.css';

const competitions = [
  {
    id: 'raasRoyalty',
    title: 'Raas Royalty XVI [FIRST PLACE 🥇]',
    publicPath: '/competitions/compA',
    count: 30,            
  },
  {
    id: 'blacksburg',
    title: 'Blacksburg Ki Badmaashi VI [SECOND PLACE 🥈]',
    publicPath: '/competitions/compB',
    count: 30,            
  },
  {
    id: 'riverCity',
    title: 'River City Raas IX [FIRST PLACE 🥇]',
    publicPath: '/competitions/compC',
    count: 30,
  },
  {
    id: 'aTown',
    title: 'A-Town Showdown [FIRST PLACE 🥇]',
    publicPath: '/competitions/compD',
    count: 30,
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 600,  settings: { slidesToShow: 1 } },
  ],
};

const CompetitionGallery = () => (
  <div className="competition-gallery">
    {competitions.map(({ id, title, publicPath, count }) => (
      <section key={id} className="competition-slider">
        <h4 className="competition-title">{title}</h4>
        <Slider {...sliderSettings}>
          {Array.from({ length: count }).map((_, idx) => {
            const src = `${publicPath}/${idx + 1}.jpg`;
            return (
              <div key={idx} className="slide-item">
                <img src={src} alt={`${title} shot ${idx + 1}`} />
              </div>
            );
          })}
        </Slider>
      </section>
    ))}
  </div>
);

export default CompetitionGallery;

