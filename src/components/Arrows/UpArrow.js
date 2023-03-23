import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './UpArrow.css';

const UpArrow = ({ handleArrowClick }) => {

  return (
    <div className="arrow-wrapper">
      <FontAwesomeIcon
        icon={faChevronUp}
        onClick={handleArrowClick}
        size="4x"
        style={{ color: 'grey', cursor: 'pointer' }}
      />
      <p className="arrow-text">Click to View Previous Page</p>
    </div>
  );
};

export default UpArrow;
