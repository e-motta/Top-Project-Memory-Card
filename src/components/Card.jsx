/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@mdi/react';

import '../styles/Card.css';

function Card(props) {
  const { iconPath, iconName, onClick } = props;

  return (
    <button
      type="button"
      className="Card"
      id={iconName}
      onClick={onClick}
    >
      <div className="image">
        <Icon path={iconPath} className="icon" size={6} />
      </div>
      <div className="name">{iconName}</div>
    </button>
  );
}

Card.propTypes = {
  iconPath: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Card;
