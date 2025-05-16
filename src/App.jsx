// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar'
// import Hero from './Components/Hero/Hero'
// import Programs from './Components/Programs/Programs'
// import Title from './Components/Title/Title'
// import About from './Components/About/About'
// import Campus from './Components/Campus/Campus'
// import Contact from './Components/Contact/Contact'
// import Footer from './Components/Footer/Footer'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//       <Hero />
//       <div className="container">
//         <Title title='Our Competitions' subTitle='2024-25 Season' />
//         <Programs />
//         <About />
//         <Title title='Gallery' subTitle='Season Photos' />
//         <Campus />
//         <Title title='Contact Us' subTitle='Get in touch!' />
//         <Contact />
//         <Footer />
//       </div>
      
//     </div>
//   )
// }

// export default App
// src/App.jsx
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';

// import Home from './Pages/Home';
// import Season from './Pages/Season';
// import About from './Pages/About';
// import Gallery from './Pages/Gallery';
// import Team from './Pages/Team';

// const App = () => {
//   return (
//     <Router>
//       {/* This Navbar shows up on every page */}
//       <Navbar />

//       <Routes>
//         <Route path="/"       element={<Home />} />
//         <Route path="/season" element={<Season />} />
//         <Route path="/about"  element={<About />} />
//         <Route path="/gallery" element={<Gallery />} />
//         <Route path="/team"   element={<Team />} />
//       </Routes>

//       {/* This Footer also shows up on every page */}
//       <Footer />
//     </Router>
//   );
// };

// export default App;
// src/App.jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import Season from './Pages/Season';
import TeamPage from './Pages/Team';
import AboutPage from './Pages/About';
import GalleryPage from './Pages/Gallery';
import ContactPage from './Pages/Contact';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/season" element={<Season />} />
      <Route path="/team"   element={<TeamPage />} /> 
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

