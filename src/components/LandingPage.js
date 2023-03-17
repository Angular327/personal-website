import React from 'react';
import './LandingPage.css';
import profilePicture from '../assets/profile-picture.jpg';
import DownArrow from './Arrows/DownArrow';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="content-container">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>Miles Rosenberg</h1>
        <p>Full Stack Software Engineer</p>
        <p className="mission-statement">
          Passionate about creating innovative and scalable web applications, I excel at leveraging my
          technical skills and problem-solving abilities to deliver high-quality solutions.
        </p>
      </div>
      <div className="arrow-container">
        <DownArrow className="down-arrow"/>
      </div>
    </div>
  );
};

export default LandingPage;