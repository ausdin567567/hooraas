// src/Pages/Season.jsx
import React from 'react';
import Title from '../Components/Title/Title';
import Programs from '../Components/Programs/Programs';
import CompetitionHighlight from '../Components/CompetitionHighlight/CompetitionHighlight';



const Season = () => {
  return (
    <div 
    className="container season-page"
    style={{ paddingTop: '4rem' }}
    >
      <Title title="Our Competitions" subTitle="2024-25 Season" />
      <Programs />

      <CompetitionHighlight
        title="Raas Royalty 🧸"
        description="After hosting East Coast Showdown the weekend before, we kicked off our competitive season by traveling to Bloomington, Indiana to compete at Raas Royalty! We earned our first-place trophy of the season 🏆🎉—a remarkable achievement so early in the year! While we’re thilled to celebrate our win, we also want to recognize the outstanding talent showcased by every team at Raas Royalty. A special shoutout goes to the other winning teams, Illini Raas and UTD TaRaas, and to our FIRE liaisons Thraya, Nithya, and Parv 🔥🙌 for their support throughout the weekend!"
        videoId="dcs7X_9jMNo"
      />

      <CompetitionHighlight
        title="Blacksburg Ki Badmaashi 🏈"
        description="After Raas Royalty, we traveled to Blacksburg, Virginia to compete at Blacksburg Ki Badmaashi. We want to give a huge shoutout and thank you to Blacksburg Ki Badmaashi for hosting such a sick competition! We had the best time and are so, so proud to have placed second! 🥈❤️ We are so grateful to our fabulous liaisons, Ambrunee, Simrin, and Ansh, for all their help 🙌. We also can’t forget to congratulate the placing teams, Steel City Raas and VCU Ricochet Raas 👏, as well as every team that competed this weekend. We’re beyond proud of everyone! 🌟"
        videoId="blKZLImohS4"
      />
      <CompetitionHighlight
        title="River City Raas 🛡️"
        description="We brought our energy to River City Raas in Richmond, VA, and had an absolute blast! 🎉 A huge thanks to River City Raas for hosting such an epic event! We’re so grateful to our awesome liaisons, Shivam and Aarjav, for keeping things running smoothly (and fun!) 🙌. Congrats to Purdue Raas and UF Gatoraas on your podium finishes—you both crushed it 🥊🔥! Also, hats off to every team that took the stage this weekend! 👏 We’re extremely proud of all of you! ❤️
"
        videoId="sQ9ePWeOPas"
      />
      <CompetitionHighlight
        title="A-Town Showdown 🗡️"
        description="For our final regular‐season competition, we traveled to Atlanta, Georgia for A-Town Showdown—and we brought our A-game, earning our 3rd first-place finish of the season! 🏆✨ A GINORMOUS THANK YOU to A-Town Showdown for hosting such an epic event. 🙌 We’re beyond grateful to our phenomenal liaisons, Harsh and Shaan, for keeping the energy sky-high all weekend. 🚀 Big congratulations to Purdue Raas and CMU Raasta on your podium finishes—you both shone brightly! 🌟 And to every team that took the stage, your talent blew us away! 🎉👏"
        videoId="GGD-Wevrmi0"
      />
      <CompetitionHighlight
        title="Raas All Stars ⭐"
        description="Wow—what an incredible journey! After racking up 14 bid points in the regular season, we’ve officially punched our ticket to Raas All Stars, the national championship, for the first time since 2022! 🎉 We’re beyond thrilled and deeply honored to represent UVA on the huge Chicago stage in front of hundreds of viewers.

A gigantic shoutout to our rockstar liaisons, Vidhi and Sai, whose tireless dedication and support fueled us all weekend! 🙌 And a heartfelt thank-you to Raas All Stars for hosting such an unforgettable competition. It was an absolute joy to share the stage with so many talented teams—huge congratulations to GT Ramblin Raas and Purdue Raas on their well-deserved podium finishes! "
        videoId="4BqmWfZbJl8"
      />
    </div>
  );
};

export default Season;
