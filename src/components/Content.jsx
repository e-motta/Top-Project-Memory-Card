/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import '../styles/Content.css';

function Content(props) {
  const { randomIconsArr, playRound } = props;

  return (
    <div className="Content">
      <div className="main-content">
        {randomIconsArr.map((icon) => (
          <Card
            iconPath={icon[1]}
            iconName={icon[0]}
            key={icon[0]}
            onClick={playRound}
          />
        ))}
      </div>
    </div>
  );
}

Content.propTypes = {
  randomIconsArr: PropTypes.array.isRequired,
  playRound: PropTypes.func.isRequired,
};

export default Content;
