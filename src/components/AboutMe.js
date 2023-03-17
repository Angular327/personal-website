import React from 'react';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <div className="container">
      <h1>Miles Rosenberg</h1>
      <p className="contact">Foster City, CA 94404 | (516) 448-5845 | milesrosenberg@gmail.com</p>
      <p className="contact"><a href="https://www.linkedin.com/in/miles-rosenberg-036992180/">linkedin.com/in/miles-rosenberg-036992180</a> | <a href="https://github.com/Angular327">github.com/Angular327</a></p>
      <h2>Software Engineer</h2>
      <h3 className="subtitle">SOFTWARE DEVELOPMENT | SYSTEM ARCHITECTURE</h3>
      <p>Software Engineer with a passion for building scalable and innovative applications. Skilled in developing both back end
      and front-end infrastructure using a range of technologies and programming languages.</p>
      <h3 className="subtitle">TECHNICAL SKILLS</h3>
      <ul className="skill-list">
        <li>Languages: Node.JS, PHP, Python, Java, C++, C, HTML, CSS, JavaScript</li>
        <li>Technologies: React.js, Next.js, Spring Boot, GraphQL, Typescript, OpenGL</li>
        <li>Databases: PostgreSQL, MySQL, MongoDB, Redis</li>
        <li>Tools: Git, AWS, Azure, Docker</li>
      </ul>
      <h3 className="subtitle">PROFESSIONAL EXPERIENCE</h3>
      <div className="experience">
        <h4>META</h4>
        <p className="date">July 2022 – November 2022</p>
        <h4>Software Engineer</h4>
        <ul>
          <li>Developed a Full stack interactive UI for Meta employees to view career expectations across all roles and levels.</li>
          <li>Created administrative panel allowing Meta leadership to manually set expectations per role/level and create a list of skills they could use and re-use.</li>
          <li>Created an efficient database schema design to store career expectations and skills data.</li>
          <li>Implemented server-side caching to optimize API performance and reduce load on databases.</li>
          <li>Conducted unit tests to ensure UI and API functionality and data accuracy.</li>
        </ul>
      </div>
      <div className="experience">
        <h4>WALMART GLOBAL TECH</h4>
        <p className="date">June 2021 – August 2021</p>
        <h4>Software Engineer, Intern</h4>
        <ul>
          <li>Developed and maintained server-side code for analytical tools used by store managers to better understand shipment information.</li>
          <li>Designed and implemented a user-friendly Front-end and RESTful APIs that allow non-technical users to easily access and analyze shipment data.</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
