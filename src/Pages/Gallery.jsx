
import React from 'react';
import Title from '../Components/Title/Title';
import CompetitionGallery from '../Components/CompetitionGallery/CompetitionGallery';
import './Gallery.css';

const GalleryPage = () => {
  return (
    <div className="container gallery-page">
      <Title title="Our Gallery" subTitle="Moments from our unforgettable season " />
      <CompetitionGallery />
    </div>
  );
};

export default GalleryPage;
