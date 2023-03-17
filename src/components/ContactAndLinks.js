import React from 'react';
import './ContactAndLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactsAndLinks = () => {
  return (
    <div className="contacts-links">
      <h2>Contact & External Links</h2>
      <div className="contact-links-container">
        <a
          href="https://www.linkedin.com/in/miles-rosenberg-036992180/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Angular327"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ContactsAndLinks;
