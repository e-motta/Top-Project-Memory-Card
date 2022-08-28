import React from 'react';
import PropTypes from 'prop-types';

import Score from './Score';

import '../styles/Header.css';

function Header(props) {
  const { maxScore, currentScore } = props;

  return (
    <div className="Header">
      <div className="inner-header">
        <span className="title">MDI Memory Game</span>
        <Score
          maxScore={maxScore}
          currentScore={currentScore}
        />
      </div>
    </div>
  );
}

Header.propTypes = {
  maxScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
};

export default Header;
