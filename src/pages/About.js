import React from 'react'
import logo from '../static/cafe.png';
import { FaFacebookF, FaInstagram } from'react-icons/fa';
import {SiGmail} from 'react-icons/si'
const About = () => {
  return (
    <section className='section-about'>
      <h1>About me</h1>
      <img src={logo} alt="ava" />
      <div className="about-detail">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae facilis repellendus quaerat voluptatem? At voluptatibus nisi natus ab, perspiciatis nulla ut neque sapiente illum, nostrum possimus adipisci enim commodi omnis.</p>
        <div className="contact-detail">
          <h2>Contact us</h2>
          <ul className="contact">
            <li><FaFacebookF /></li>
            <li><FaInstagram /></li>
            <li><SiGmail /></li>
          </ul>
          
        </div>
      </div>
    </section>
  )
}

export default About
