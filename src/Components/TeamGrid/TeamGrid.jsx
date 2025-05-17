import React from 'react';
import TeamMember from './TeamMember';
import './TeamGrid.css';
import nachiOfficial from '../../assets/nachi-official.jpg'
import nachiDance from '../../assets/UVA-1736.jpg'
import aaryanOfficial from '../../assets/aaryan-official.jpg'
import aaryanDance from '../../assets/aaryan-dance.jpg'
import shritOfficial from '../../assets/shritika-official.jpg'
import shritDance from '../../assets/shritika-dance.jpg'
import saanOfficial from '../../assets/saanvi-official.jpg'
import saanDance from '../../assets/saanvi-dance.jpg'
import dhritiOfficial from '../../assets/dhriti-official.jpg'
import dhritiDance from '../../assets/dhriti-dance.jpg'
import akOfficial from '../../assets/ak-official.jpg'
import akDance from '../../assets/ak-dance.jpg'
import ishaOfficial from '../../assets/isha-official.jpg'
import ishaDance from '../../assets/isha-dance.jpg'
import suOfficial from '../../assets/suraj-official.jpg'
import suDance from '../../assets/suraj-dance.jpg'
import ishaanOfficial from '../../assets/ishaan-official.jpg'
import ishaanDance from '../../assets/ishaan-dance.jpg'
import avishOfficial from '../../assets/avish-official.jpg'
import avishDance from '../../assets/avish-dance.jpg'
import anishaOfficial from '../../assets/anisha-official.jpg'
import anishaDance from '../../assets/anisha-dance.jpg'
import keyaOfficial from '../../assets/keya-official.jpg'
import keyaDance from '../../assets/keya-dance.jpg'
import khushiOfficial from '../../assets/khushi-official.jpg'
import khushiDance from '../../assets/khushi-dance.jpg'
import rituOfficial from '../../assets/ritu-official.jpg'
import rituDance from '../../assets/ritu-dance1.jpg'
import ashOfficial from '../../assets/ash-official.jpg'
import ashDance from '../../assets/ash-dance.jpg'
import shlokOfficial from '../../assets/shlok-official.jpg'
import shlokDance from '../../assets/shlok-dance.jpg'
import shawnOfficial from '../../assets/shawn-official.jpg'
import shawnDance from '../../assets/shawn-dance.jpg'
import malluOfficial from '../../assets/malhar-official.jpg'
import malluDance from '../../assets/malhar-dance.jpg'
import lydiaOfficial from '../../assets/lydia-official.jpg'
import lydiaDance from '../../assets/lydia-dance.jpg'
import rahilOfficial from '../../assets/rahil-official.jpg'
import rahilDance from '../../assets/rahil-dance.jpg'
import sarimOfficial from '../../assets/sarim-official.jpg'
import sarimDance from '../../assets/sarim-dance.jpg'
import samaiOfficial from '../../assets/samai-official.jpg'
import samaiDance from '../../assets/samai-dance.jpg'
import anjOfficial from '../../assets/anjali-official.jpg'
import anjDance from '../../assets/anj-dance.jpg'
import meeraOfficial from '../../assets/meera-1.jpg'
import meeraDance from '../../assets/meera-dance.jpg'
import misthiOfficial from '../../assets/misthi-official.jpg'
import misthiDance from '../../assets/misthi-dance.jpg'
import shikhaOfficial from '../../assets/shikha-official.jpg'
import shikhaDance from '../../assets/shikha-dance.jpg'
import sanjanaOfficial from '../../assets/sanjana-official.jpg'
import sanjanaDance from '../../assets/sanjana-dance.jpg'
import ausdinOfficial from '../../assets/ausdin-official.jpg'
import ausdinDance from '../../assets/ausdin-dance.jpg'
import yashOfficial from '../../assets/yash-official.jpg'
import yashDance from '../../assets/yash-dance.jpg'
import kshemaOfficial from '../../assets/kshema-official.jpg'
import kshemaDance from '../../assets/kshema-dance.jpg'
import arianaOfficial from '../../assets/ariana-official.jpg'
import arianaDance from '../../assets/ariana-dance.jpg'
import mayaOfficial from '../../assets/maya-official.jpg'
import mayaDance from '../../assets/maya-dance.jpg'
import paruOfficial from '../../assets/paru-official.jpg'
import paruDance from '../../assets/paru-dance.jpg'

const members = [
  {
    name: 'Nachiket Gusani',
    role: 'Captain',
    photos: [nachiOfficial, nachiDance],
  },
  {
    name: 'Aaryan Dhore',
    role: 'Captain',
    photos: [aaryanOfficial, aaryanDance],
  },
  {
    name: 'Shritika Rao',
    role: 'Captain',
    photos: [shritOfficial, shritDance],
  },
  {
    name: 'Saanvi Kancherla',
    role: 'Team Manager',
    photos: [saanOfficial, saanDance],
  },
  {
    name: 'Dhriti Gampa',
    role: 'Treasurer',
    photos: [dhritiOfficial, dhritiDance],
  },
  {
    name: 'Akanksha Tibrewala',
    role: 'Social Chair',
    photos: [akOfficial, akDance],
  },
  {
    name: 'Isha Shah',
    role: 'Production Chair',
    photos: [ishaOfficial, ishaDance],
  },
  {
    name: 'Suraj Vaddi',
    role: 'Production Chair',
    photos: [suOfficial, suDance],
  },
  {
    name: 'Ishaan Shah',
    role: '',
    photos: [ishaanOfficial, ishaanDance],
  },
  {
    name: 'Avish Chiranth',
    role: '',
    photos: [avishOfficial, avishDance],
  },
  {
    name: 'Anisha Patrikar',
    role: '',
    photos: [anishaOfficial, anishaDance],
  },
  {
    name: 'Keya Patel',
    role: '',
    photos: [keyaOfficial, keyaDance],
  },
  {
    name: 'Khushi Mehta',
    role: '',
    photos: [khushiOfficial, khushiDance],
  },
  {
    name: 'Ritu Suddapalli',
    role: '',
    photos: [rituOfficial, rituDance],
  },
  {
    name: 'Ashiyana Patel',
    role: '',
    photos: [ashOfficial, ashDance],
  },
  {
    name: 'Shlok Rawal',
    role: '',
    photos: [shlokOfficial, shlokDance],
  },
  {
    name: 'Shawn Ladhani',
    role: '',
    photos: [shawnOfficial, shawnDance],
  },
  {
    name: 'Malhar Kulkarni',
    role: '',
    photos: [malluOfficial, malluDance],
  },
  {
    name: 'Lydia Ho',
    role: '',
    photos: [lydiaOfficial, lydiaDance],
  },
  {
    name: 'Rahil Karkar',
    role: '',
    photos: [rahilOfficial, rahilDance],
  },
  {
    name: 'Syed Sarim',
    role: '',
    photos: [sarimOfficial, sarimDance],
  },
  {
    name: 'Samai Patel',
    role: '',
    photos: [samaiOfficial, samaiDance],
  },
  {
    name: 'Anjali Ashok',
    role: '',
    photos: [anjOfficial, anjDance],
  },
  {
    name: 'Meera Shah',
    role: '',
    photos: [meeraOfficial, meeraDance],
  },
  {
    name: 'Misthi Choksi',
    role: '',
    photos: [misthiOfficial, misthiDance],
  },
  {
    name: 'Shikha Raghuram',
    role: '',
    photos: [shikhaOfficial, shikhaDance],
  },
  {
    name: 'Sanjana Rao',
    role: '',
    photos: [sanjanaOfficial, sanjanaDance],
  },
  {
    name: 'Ausdin Rahman',
    role: '',
    photos: [ausdinOfficial, ausdinDance],
  },
  {
    name: 'Yashaswi Sunkara',
    role: '',
    photos: [yashOfficial, yashDance],
  },
  {
    name: 'Kshema Patel',
    role: '',
    photos: [kshemaOfficial, kshemaDance],
  },
  {
    name: 'Ariana Elahi',
    role: '',
    photos: [arianaOfficial, arianaDance],
  },
  {
    name: 'Maya Shah',
    role: '',
    photos: [mayaOfficial, mayaDance],
  },
  {
    name: 'Parvathi Pullanchodan',
    role: '',
    photos: [paruOfficial, paruDance],
  },
];

const TeamGrid = () => {
  return (
    <div className="team-grid">
      {members.map((m, i) => (
        <TeamMember
          key={i}
          name={m.name}
          role={m.role}
          photos={m.photos}
        />
      ))}
    </div>
  );
};

export default TeamGrid;
