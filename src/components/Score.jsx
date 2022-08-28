import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Score.css';

function Score(props) {
  const { maxScore, currentScore } = props;

  return (
    <div className="Score">
      <div className="max-score">
        <span>
          Max:
          {' '}
          {maxScore}
        </span>
      </div>
      <div className="current-score">
        <span>
          Current:
          {' '}
          {currentScore}
        </span>
      </div>
    </div>
  );
}

Score.propTypes = {
  maxScore: PropTypes.number.isRequired,
  currentScore: PropTypes.number.isRequired,
};

export default Score;
