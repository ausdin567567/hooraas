import React from 'react'
import './About.css'
import about_img from '../../assets/aboutus.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>About HooRaas</h3>
            <h2>Hoo Let the Raas Out? Hoo Hoo HooRaas!</h2>
            <p>HooRaas is a competitive co-ed dance team that seeks to promote the awareness of a particular type of Indian folk dance called garba-raas that is indigenous to the state of Gujarat. As a team of University of Virginia students, we perform at intercollegiate events and competitions. By performing at cultural events at the University of Virginia and at other venues, we contribute to the diversity of the university community. We aim to promote the understanding of South Asian, and specifically Gujarati, culture.</p>
        </div>
    </div>
  )
}

export default About