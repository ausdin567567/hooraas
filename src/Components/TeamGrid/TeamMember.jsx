// import React, { useState } from 'react';
// import './TeamMember.css';

// const TeamMember = ({ name, role, photos }) => {
//   const [idx, setIdx] = useState(0);
//   const prev = () => setIdx((idx + photos.length - 1) % photos.length);
//   const next = () => setIdx((idx + 1) % photos.length);

//   return (
//     <div className="team-member-card">
//       <div className="member-slider">
//         <img
//           src={photos[idx]}
//           alt={`${name} (${idx + 1}/${photos.length})`}
//           className="member-photo"
//         />
//         <button className="slider-btn prev" onClick={prev}>&lt;</button>
//         <button className="slider-btn next" onClick={next}>&gt;</button>
//       </div>
//       <div className="member-info">
//         <h3>{name}</h3>
//         <p>{role}</p>
//       </div>
//     </div>
//   );
// };

// export default TeamMember;

// src/Components/TeamGrid/TeamMember.jsx
import React, { useState } from 'react';
import './TeamMember.css';

const TeamMember = ({ name, role, photos }) => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((idx + photos.length - 1) % photos.length);
  const next = () => setIdx((idx + 1) % photos.length);

  return (
    <div className="team-member-card">
      <div className="member-slider">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {photos.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${name} (${i + 1}/${photos.length})`}
              className="member-photo"
            />
          ))}
        </div>

        <button className="slider-btn prev" onClick={prev}>&lt;</button>
        <button className="slider-btn next" onClick={next}>&gt;</button>
      </div>

      <div className="member-info">
        <h3>{name}</h3>
        {role && <p>{role}</p>}
      </div>
    </div>
  );
};

export default TeamMember;

