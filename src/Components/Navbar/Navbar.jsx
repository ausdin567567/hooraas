// import React, { useEffect, useState } from 'react'
// import './Navbar.css'
// import logo from '../../assets/logo.png'
// import menu_icon from '../../assets/menu-icon.png'

// const Navbar = () => {

//     const [sticky, setSticky] = useState(false)
    
//     useEffect(()=>{
//         window.addEventListener('scroll', ()=> {
//             window.scrollY > 50 ? setSticky(true) : setSticky(false);
//         })
//     },[])

//     const [mobileMenu, setMobileMenu] = useState(false)
//     const toggleMenu = () => {
//         mobileMenu? setMobileMenu(false) : setMobileMenu(true)
//     }

//   return (
//     <nav className={`container ${sticky ? `dark-nav`: ''}`}>
//         <img src={logo} alt='' className='logo' />
//         <ul className={mobileMenu?'':'hide-mobile-menu'}>
//             <li>Home</li>
//             <li>Our Season</li>
//             <li>About Us</li>
//             <li>Gallery</li>
//             <li>Meet the Team</li>
//             <li><button className='btn'>Contact Us</button></li>
//         </ul>
//         <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
//     </nav>
//   )
// }

// export default Navbar

// src/Components/Navbar/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  return (
    <nav className= "container dark-nav">
      <Link to="/">
        <img src={logo} alt="HooRaas Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="/season" onClick={() => setMobileMenu(false)}>Our Season</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMobileMenu(false)}>About Us</Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setMobileMenu(false)}>Gallery</Link>
        </li>
        <li>
          <Link to="/team" onClick={() => setMobileMenu(false)}>Meet the Team</Link>
        </li>
        <li>
          {/* Anchor link back to the Home page’s contact section */}
          <a href="/contact" onClick={() => setMobileMenu(false)}>
            <button className="btn">Contact Us</button>
          </a>
        </li>
      </ul>

      <img
        src={menu_icon}
        alt="Toggle menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;