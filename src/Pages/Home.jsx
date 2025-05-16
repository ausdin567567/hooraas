// // src/Pages/Home.jsx
// import React from 'react';
// import Hero from '../Components/Hero/Hero';
// import Title from '../Components/Title/Title';
// import Programs from '../Components/Programs/Programs';
// import About from '../Components/About/About';
// import Campus from '../Components/Campus/Campus';
// import Contact from '../Components/Contact/Contact';

// const Home = () => {
//   return (
//     <>
//       <Hero />

//       <div className="container">
//         <Title title="Our Competitions" subTitle="2024-25 Season" />
//         <Programs />

//         <Title title="About Us" subTitle="Who We Are" />
//         <About />

//         <Title title="Gallery" subTitle="Season Photos" />
//         <Campus />

//         {/* Make sure Contact’s root element has id="contact" so the navbar’s anchor works */}
//         <Title title="Contact Us" subTitle="Get in touch!" />
//         <div id="contact">
//           <Contact />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;
// src/Pages/Home.jsx
// src/Pages/Home.jsx
// src/Pages/Home.jsx
import React from 'react';
import Hero from '../Components/Hero/Hero';
import Title from '../Components/Title/Title';
import Programs from '../Components/Programs/Programs';
import About from '../Components/About/About';
import Campus from '../Components/Campus/Campus';
import Contact from '../Components/Contact/Contact';


const Home = () => (
  <>
    <Hero />
    <div style={{ padding: '2rem' }}>
      <Title title="Our Competitions" subTitle="2024‑25 Season" />
      <Programs />
      <About />
      <Title title="Gallery" subTitle="Season Photos" />
      <Campus />
      <Title title="Contact Us" subTitle="Get in touch!" />
      <div id="contact">
        <Contact />
      </div>
    </div>
  </>
);

export default Home;
