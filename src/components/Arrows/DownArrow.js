import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './DownArrow.css';

const DownArrow = ({ handleArrowClick }) => {

  return (
    <div className="arrow-wrapper">
      <p className="arrow-text">Click to view next page</p>
      <FontAwesomeIcon
        icon={faChevronDown}
        onClick={handleArrowClick}
        size="4x"
        style={{ color: 'grey', cursor: 'pointer' }}
      />
    </div>
  );
};

export default DownArrow;
