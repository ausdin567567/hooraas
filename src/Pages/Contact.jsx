
import React from 'react';
import Title from '../Components/Title/Title';
import Contact from '../Components/Contact/Contact';
import './Contact.css';
import flyer1 from '../assets/flyer1.png';
import flyer2 from '../assets/flyer2.png';
import flyer3 from '../assets/flyer3.png';


const ContactPage = () => {
  return (
    <div className="container contact-page">
      <Title title="Contact Us" subTitle="Sponsership" />


      <div className="sponsorship-flyers">
        <img
          src={flyer1}
          alt="Partner with UVA HooRaas Sponsorship Overview"
          className="flyer-image"
        />
        <img
          src={flyer2}
          alt="Sponsorship Packages"
          className="flyer-image"
        />
        <img
          src={flyer3}
          alt="Join Us Form"
          className="flyer-image"
        />
      </div>


      <Title title="Contact Us" subTitle="Get in Touch" />
      <Contact />
    </div>
  );
};

export default ContactPage;

