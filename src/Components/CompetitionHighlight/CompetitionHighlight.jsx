import React from 'react';
import './CompetitionHighlight.css';

const CompetitionHighlight = ({ title, description, videoId }) => {
  return (
    <section className="competition-highlight">
      <div className="ch-description">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="ch-video">
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default CompetitionHighlight;
