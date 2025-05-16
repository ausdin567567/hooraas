import React from 'react';
import Title from '../Components/Title/Title';
import TeamGrid from '../Components/TeamGrid/TeamGrid';

const TeamPage = () => (
  <div className="container team-page" style={{ padding: '2rem 0' }}>

    <Title title="Meet the Team" subTitle="Our Incredible Dancers" />

    <TeamGrid />
  </div>
);

export default TeamPage;


